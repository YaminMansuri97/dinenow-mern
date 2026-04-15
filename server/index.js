const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const dns = require("dns");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");

dotenv.config();

dns.setDefaultResultOrder("ipv4first");

app.use(cors());
app.use(express.json());








mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected!!!"))
  .catch((err) => console.log("MongoDB connection error:", err));


// --- REGISTER ROUTE ---
app.post("/register", async (req, res) => {
    try {
        const { fullName, phoneNumber, email, password, role } = req.body;

        // 1. Check if user already exists
        // (Previously commented out, causing the ReferenceError)
        const existingUser = await User.findOne({ email }); 
        
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // 2. Create and save new user
        const newUser = new User({
            fullName: fullName || "New User",
            phoneNumber,
            email,
            password,
            role: role || "user"
        });

        await newUser.save();
        
        // Send a success response
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        // This will print the EXACT error in your VS Code terminal
        console.error("REGISTRATION ERROR:", error);
        res.status(500).json({ message: "Server Error", details: error.message });
    }
});


// --- LOGIN ROUTE ---
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password." });
    }

    const existingUser = await User.findOne({ email });
    
    if (!existingUser) {
      return res.status(400).json({ message: "Email is invalid." });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    
    if (!matchPassword) {
      return res.status(400).json({ message: "Password is invalid." });
    }
   
    // Ensure JWT_SECRET_KEY exists
    if (!process.env.JWT_SECRET_KEY) {
        console.error("Error: JWT_SECRET_KEY is missing in .env file");
        return res.status(500).send("Server configuration error.");
    }

    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5h" }
    );
   
    res.status(200).json({ 
      token: token,
      userId: existingUser._id,
      message: "User logged in successfully!",
      user: {
        id: existingUser._id,
        fullName: existingUser.fullName,
        email: existingUser.email,
        role: existingUser.role
      }
    });

  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: "An error occurred during login." });
  }
});





// --- PRODUCT ROUTES ---

app.use("/uploads", express.static("uploads")); // Serve uploaded images statically

app.use("/products", require("./routes/productRoutes"));



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});