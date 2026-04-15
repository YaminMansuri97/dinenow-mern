import React from "react";
import DineNow_Transparent from "../assets/DineNow_Transparent.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const colors = {
    gradientStart: "#4a1d13", // Dark Brown
    gradientEnd: "#a0402c",   // Terracotta Orange
    textDark: "#2D3436",
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log(response.data);
      toast.success("Login Successful!");


      localStorage.setItem("userEmail", response.data.user.email);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("role", response.data.user.role);


      
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      const msg = error.response?.data || "Invalid email or password.";
      toast.error(typeof msg === "string" ? msg : "An error occurred.");
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
          <div className="col-md-4">
            <div style={{
              backgroundColor: "#ffffff",
              borderRadius: "30px",
              padding: "60px 40px",
              minHeight: "400px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
              textAlign: "center"
            }}>
              {/* Logo & Header */}
              <div className="mb-4">
                <img
                  src={DineNow_Transparent}
                  alt="Dine Now"
                  style={{ height: "70px", marginBottom: "15px" }}
                />
                <h2 style={{ fontWeight: "800", color: colors.gradientStart }}>Welcome Back</h2>
                <p style={{ color: "#636e72" }}>Login and explore our delicious menu!</p>
              </div>

              <form onSubmit={handleLogin}>
                {/* Email Input */}
                <div className="mb-4 text-start">
                  <label className="form-label fw-bold">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-envelope"></i>
                    </span>
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

                {/* Password Input */}
                <div className="mb-3 text-start">
                  <label className="form-label fw-bold">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-lock"></i>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      className="form-control bg-light border-start-0 border-end-0"
                      placeholder="Enter Your Password"
                      onChange={(e) => setPassword(e.target.value)} // Fixed: added 'e'
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

                {/* Remember Me */}
                <div className="mb-4 text-start d-flex align-items-center">
                  <input type="checkbox" className="form-check-input me-2" id="remember" />
                  <label className="form-check-label" htmlFor="remember">Remember me</label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn w-100 py-3 text-white"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                    borderRadius: "12px",
                    fontWeight: "bold",
                    border: "none",
                    boxShadow: "0 4px 15px rgba(160, 64, 44, 0.3)"
                  }}
                >
                  Login
                </button>
              </form>

              <p className="mt-4 mb-0" style={{ color: "#636e72" }}>
                Don't have an account? <Link to="/register" style={{ color: colors.gradientEnd, fontWeight: "600", textDecoration: "none" }}>Register here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;