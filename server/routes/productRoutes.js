const express = require('express');
const router = express.Router(); 
const multer = require('multer');
const Product = require("../models/product");
const path = require('path');
const fs = require('fs');


// Ensure the directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// Multer setup - Saving to 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// LIST PRODUCTS
router.get('/list', async (req, res) => {
    try {
        const products = await Product.find();
        // Return products directly or inside an object, 
        // but ensure User side expects this structure
        res.status(200).json(products); 
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
});

// ADD PRODUCT
router.post('/add', upload.single('imageUrl'), async (req, res) => {
    try {
        const bodyData = req.body;
        
        // We use /uploads/ because that's how we will serve it statically
        const filePath = req.file ? `/uploads/${req.file.filename}` : null;

        const finalProductData = {
            productName: bodyData.productName,
            vegOrNonVeg: bodyData.vegOrNonVeg,
            description: bodyData.description,
            imageUrl: filePath, 
            price: Number(bodyData.price),
            rating: Number(bodyData.rating) || 4.5,
            bestSeller: bodyData.bestSeller === 'true' 
        };

        const savedProduct = await Product.create(finalProductData);
        res.status(200).json({ message: "Product added successfully!", product: savedProduct });

    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Error adding product", details: error.message });
    }
});

module.exports = router;