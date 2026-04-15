import React, { useState } from "react";
import DineNow_T from "../assets/DineNow_T.png"; // Importing the logo

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const colors = {
    // Signature Double Shades
    gradientStart: "#4a1d13", // Dark Brown
    gradientEnd: "#a0402c",   // Terracotta Orange
    textDark: "#2D3436",
    white: "#FFFFFF",
    borderRadius: "20px",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
  };

  return (
    <div style={{ 
      background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`, 
      minHeight: "100vh", 
      padding: "80px 20px",
      display: "flex",
      alignItems: "center"
    }}>
      <div className="container" style={{ 
        backgroundColor: "#fff", 
        borderRadius: colors.borderRadius, 
        boxShadow: "0 20px 50px rgba(0,0,0,0.3)", 
        overflow: "hidden",
        border: "none"
      }}>
        <div className="row g-0">
          
          {/* --- LEFT SIDE: LOGO & CONTACT INFO --- */}
          <div className="col-lg-5" style={{ 
            background: `linear-gradient(160deg, ${colors.gradientStart} 0%, #2a100b 100%)`, 
            color: colors.white, 
            padding: "60px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center"
          }}>
            {/* Added Logo Here */}
            <img 
              src={DineNow_T} 
              alt="Dine Now Logo" 
              style={{ 
                height: "80px", 
                objectFit: "contain", 
                marginBottom: "30px",
                filter: "brightness(0) invert(1)" ,
                filter : "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5))"
              }} 
            />
            
            <h2 style={{ fontWeight: "800", marginBottom: "20px" }}>Get in Touch</h2>
            <p style={{ opacity: "0.8", marginBottom: "40px" }}>
              Have a question about your order or want to partner with us? Drop us a message!
            </p>
            
            <div className="mb-4 text-start">
              <h6 style={{ fontWeight: "bold", textTransform: "uppercase", fontSize: "0.75rem", color: colors.gradientEnd }}>Address</h6>
              <p style={{ fontSize: "0.95rem" }}>Nr. Taj hotel, Mumbai, Maharashtra</p>
            </div>
            
            <div className="mb-4 text-start">
              <h6 style={{ fontWeight: "bold", textTransform: "uppercase", fontSize: "0.75rem", color: colors.gradientEnd }}>Email Us</h6>
              <p style={{ fontSize: "0.95rem" }}>support@dinenow.com</p>
            </div>

            <div className="mb-4 text-start">
              <h6 style={{ fontWeight: "bold", textTransform: "uppercase", fontSize: "0.75rem", color: colors.gradientEnd }}>Call Us</h6>
              <p style={{ fontSize: "0.95rem" }}>+91 77780 83960</p>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTACT FORM --- */}
          <div className="col-lg-7" style={{ padding: "60px 40px", backgroundColor: "#fff" }}>
            <h3 style={{ fontWeight: "700", marginBottom: "30px", color: colors.gradientStart }}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label" style={{ fontWeight: "600" }}>Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control" 
                  placeholder="Enter Your Full Name"
                  required
                  onChange={handleChange}
                  style={{ borderRadius: "10px", padding: "12px", border: "1px solid #ddd" }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label" style={{ fontWeight: "600" }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  className="form-control" 
                  placeholder="Email@example.com"
                  required
                  onChange={handleChange}
                  style={{ borderRadius: "10px", padding: "12px", border: "1px solid #ddd" }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label" style={{ fontWeight: "600" }}>Message</label>
                <textarea 
                  name="message"
                  className="form-control" 
                  rows="4" 
                  placeholder="How can we help you today?"
                  required
                  onChange={handleChange}
                  style={{ borderRadius: "10px", padding: "12px", border: "1px solid #ddd" }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn w-100"
                style={{ 
                  background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`, 
                  color: "#fff", 
                  fontWeight: "bold", 
                  padding: "15px", 
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 4px 15px rgba(160, 64, 44, 0.3)",
                  transition: "0.3s"
                }}
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;