import React from "react";
import DineNow_Transparent from "../assets/DineNow_Transparent.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // Consistent branding colors
  const colors = {
    gradientStart: "#4a1d13", // Dark Brown
    gradientEnd: "#a0402c",   // Terracotta Orange
    textDark: "#2D3436",
  };
const handleRegister = async (e) => {
    e.preventDefault();
    
    // 1. Client-side validation
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    if (password.length < 6) {
      return toast.error("Password should be at least 6 characters long");
    }

    try {
      const response = await axios.post("http://localhost:3000/register", {
        fullName,
        phoneNumber,
        email,
        password,
        role: "user"
      });

      // 2. Success: Use the message sent from the backend
      toast.success(response.data.message || "Registration Successful!");
      
      // Clear form
      setFullName("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      // 3. Error: Drill down into the response to find the actual message
      // We look for error.response.data.message because that's what your index.js sends
      const errorMsg = error.response?.data?.message || 
                       error.response?.data?.error || 
                       "An error occurred during registration.";
      
      toast.error(errorMsg);
      console.error("Registration Error details:", error.response?.data);
    }
  };
  return (
    <div style={{ 
      background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px"
    }}>
      <ToastContainer />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div style={{
              backgroundColor: "#ffffff",
              borderRadius: "30px",
              padding: "40px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
              textAlign: "center"
            }}>
              {/* Header section */}
              <div className="mb-4">
                <img
                  src={DineNow_Transparent}
                  alt="Dine Now"
                  style={{ height: "70px", marginBottom: "15px" }}
                />
                <h2 style={{ fontWeight: "800", color: colors.gradientStart }}>Join Dine Now</h2>
                <p style={{ color: "#636e72" }}>Create your account and start dining!</p>
              </div>

              {/* Form Section */}
              <form onSubmit={handleRegister}>
                <div className="mb-3 text-start">
                  <label className="form-label fw-bold">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><i className="bi bi-person"></i></span>
                    <input
                      type="text"
                      value={fullName}
                      className="form-control bg-light border-start-0"
                      placeholder="Enter Your Name"
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label fw-bold">Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><i className="bi bi-telephone"></i></span>
                    <input
                      type="tel"
                      value={phoneNumber}
                      className="form-control bg-light border-start-0"
                      placeholder="Enter Your Phone Number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label fw-bold">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><i className="bi bi-envelope"></i></span>
                    <input
                      type="email"
                      value={email}
                      className="form-control bg-light border-start-0"
                      placeholder="Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label fw-bold">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><i className="bi bi-lock"></i></span>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      className="form-control bg-light border-start-0 border-end-0"
                      placeholder="Enter Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span 
                      className="input-group-text bg-light border-start-0" 
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`bi bi-eye${showPassword ? '-slash' : ''}`}></i>
                    </span>
                  </div>
                </div>

                <div className="mb-4 text-start">
                  <label className="form-label fw-bold">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><i className="bi bi-shield-check"></i></span>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword} 
                      className="form-control bg-light border-start-0"
                      placeholder="Confirm Your Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn w-100 py-3 mb-3 text-white"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                    borderRadius: "12px",
                    fontWeight: "bold",
                    border: "none",
                    boxShadow: "0 4px 15px rgba(160, 64, 44, 0.3)"
                  }}
                >
                  Create Account
                </button>
              </form>

              <p className="mt-3 mb-0" style={{ color: "#636e72" }}>
                Already have an account? <Link to="/login" style={{ color: colors.gradientEnd, fontWeight: "600", textDecoration: "none" }}>Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;  