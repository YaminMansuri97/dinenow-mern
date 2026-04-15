import React from "react";
import DineNow_T from "../assets/DineNow_T.png";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleProduct = () => navigate("/product");

  const colors = {
    // Our signature double shades
    gradientStart: "#4a1d13", // Dark Brown
    gradientEnd: "#a0402c",   // Terracotta Orange
    primary: "#FF4B2B",      
    heroBg: "#FFF8F0",       
    textDark: "#2D3436",     
  };

  const stats = [
    { label: "Partner Restaurants", value: "500+" },
    { label: "Happy Customers", value: "10k+" },
    { label: "Cities Covered", value: "25+" },
    { label: "Average Delivery", value: "30 min" },
  ];

  return (
    <div style={{ color: colors.textDark, fontFamily: "sans-serif" }}>
      
      {/* --- HEADER SECTION WITH GRADIENT --- */}
      <section style={{ 
        background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
        padding: "100px 20px", 
        textAlign: "center",
        color: "white",
        borderRadius: "0 0 50px 50px", // Elegant curve at the bottom
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}>
        <div className="container">
          <img 
            src={DineNow_T} 
            alt="Logo" 
            style={{ 
              height: "100px", 
              marginBottom: "20px",
              filter: "brightness(0) invert(1)",
              filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5))"
            }} 
          />
          <h1 style={{ fontWeight: "800", fontSize: "3.5rem", marginBottom: "20px" }}>
            Our Mission is to <span style={{ color: "#FAB1A0" }}>Feed Your Soul.</span>
          </h1>
          <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.9)" }}>
            Dine Now was born out of a simple idea: that great food should be accessible to everyone, 
            anywhere, at any time. We aren't just a delivery app; we are your culinary partner.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h2 style={{ fontWeight: "700", marginBottom: "25px" }}>Who We Are</h2>
              <p style={{ lineHeight: "1.8", color: "#636e72" }}>
                Founded in 2024, **Dine Now** started as a small project to help local restaurants 
                reach more customers during busy hours. Today, we’ve grown into a full-scale 
                express booking system that prioritizes speed without compromising on the 
                quality of your dining experience.
              </p>
              <p style={{ lineHeight: "1.8", color: "#636e72" }}>
                Whether you're craving a late-night snack, a healthy office lunch, or a 
                lavish family dinner, we bring the best of the city's kitchens directly to 
                your table with just a few clicks.
              </p>
            </div>
            <div className="col-md-6">
              <div style={{ 
                background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`, 
                borderRadius: "30px", 
                padding: "40px", 
                color: "white",
                boxShadow: "10px 10px 30px rgba(0,0,0,0.1)"
              }}>
                <h3 style={{ marginBottom: "20px" }}>Why Choose Us?</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "15px" }}>✔ **Real-time Tracking:** Know exactly where your food is.</li>
                  <li style={{ marginBottom: "15px" }}>✔ **Curated Selection:** Only the best-rated restaurants make our list.</li>
                  <li style={{ marginBottom: "15px" }}>✔ **Eco-Friendly:** We encourage sustainable packaging from our partners.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section style={{ backgroundColor: "#2d3436", color: "white", padding: "60px 0" }}>
        <div className="container">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div className="col-md-3" key={index}>
                <h2 style={{ color: colors.gradientEnd, fontWeight: "bold" }}>{stat.value}</h2>
                <p style={{ textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <div style={{
          background: `linear-gradient(90deg, ${colors.gradientStart}, ${colors.gradientEnd})`,
          padding: "60px",
          borderRadius: "40px",
          color: "white",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          <h2 style={{ fontWeight: "700" }}>Ready to taste the difference?</h2>
          <button 
            onClick={handleProduct}
            className="btn mt-4" 
            style={{ 
              backgroundColor: "white", 
              color: colors.gradientStart, 
              padding: "15px 40px", 
              borderRadius: "50px", 
              fontWeight: "bold",
              fontSize: "1.1rem",
              border: "none",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
            }}
          >
            Start Your Order Now
          </button>
        </div>
      </section>

    </div>
  );
}

export default About;