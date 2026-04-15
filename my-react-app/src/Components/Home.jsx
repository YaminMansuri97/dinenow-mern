import React from "react";
import DineNow_T from "../assets/DineNow_T.png";
import { FaTruckFast, FaUtensils, FaArrowPointer, FaShield } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleProduct = () => navigate("/product");
  const handleRegister = () => navigate("/register");

  const colors = {
    primary: "#FF4B2B",
    gradientStart: "#4a1d13", // Dark Brown
    gradientEnd: "#a0402c",   // Terracotta Orange
    textDark: "#2D3436",
    featureBg: "#FFFFFF",
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: colors.textDark, padding: "20px" }}>
      
      {/* --- HERO SECTION WITH DOUBLE SHADE GRADIENT --- */}
      <div
        style={{
          minHeight: "80vh",
          background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "60px 20px",
          borderRadius: "24px",
          color: "white"
        }}
      >
        <img
          src={DineNow_T}
          alt="Dine Now"
          style={{
            maxHeight: "150px",
            objectFit: "contain",
            marginBottom: "10px",
            filter: "brightness(0) invert(1) drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5))",
            filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5))"
          }}
        />
        <h1 style={{ fontWeight: "800", fontSize: "3.5rem", color: "white" }}>
          Welcome to Dine Now!
        </h1>
        <p style={{ 
          maxWidth: "700px", 
          margin: "20px auto", 
          lineHeight: "1.8", 
          fontSize: "1.1rem",
          color: "rgba(255, 255, 255, 0.9)" 
        }}>
          Your ultimate destination for delicious meals delivered right to your
          doorstep. Explore our menu, place your order, and enjoy a delightful
          dining experience from the comfort of your home.
        </p>

        <div className="d-flex gap-3 justify-content-center mt-4">
          <button 
            className="btn" 
            onClick={handleProduct}
            style={{
              backgroundColor: "white",
              color: colors.gradientStart,
              padding: "12px 30px",
              borderRadius: "50px",
              fontWeight: "bold",
              border: "none",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
            }}
          >
            Explore Menu <span style={{ marginLeft: "8px" }}>→</span>
          </button>
          
          <button 
            className="btn" 
            onClick={handleRegister}
            style={{
              border: "2px solid white",
              color: "white",
              padding: "12px 30px",
              borderRadius: "50px",
              fontWeight: "bold",
              backgroundColor: "transparent"
            }}
          >
            Register
          </button>
        </div>
      </div>

      {/* --- FEATURES SECTION --- */}
      <div style={{ backgroundColor: "#fff", padding: "80px 0" }}>
        <div className="container">
          <div className="row text-center"> 
            {[
              { 
                title: "Fast Delivery", 
                desc: "Get your food delivered to your doorstep in no time with our efficient service.", 
                icon: <FaTruckFast size={40} color={colors.gradientEnd} /> 
              },
              { 
                title: "Wide Variety", 
                desc: "Choose from a wide variety of cuisines and dishes to satisfy your cravings.", 
                icon: <FaUtensils size={40} color={colors.gradientEnd} /> 
              },
              { 
                title: "Easy Ordering", 
                desc: "Enjoy a seamless ordering experience with our user-friendly interface.", 
                icon: <FaArrowPointer size={40} color={colors.gradientEnd} /> 
              },
              { 
                title: "Quality Assurance", 
                desc: "We maintain the highest standards of hygiene in all our prepared dishes.", 
                icon: <FaShield size={40} color={colors.gradientEnd} /> 
              }
            ].map((feature, index) => (
              <div className="col-md-3 mb-4" key={index}>
                {/* Icon Container */}
                <div style={{ marginBottom: "20px" }}>
                   {feature.icon}
                </div>
                <h4 style={{ fontWeight: "bold", marginBottom: "15px" }}>{feature.title}</h4>
                <p style={{ color: "#636e72", fontSize: "0.95rem" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="d-flex justify-content-center mt-4">
            <p style={{ 
              color: "white", 
              fontSize: "1.1rem", 
              background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`, 
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              maxWidth: "800px"
            }}>
              Experience the best in food delivery with Dine Now. We are committed to providing you with delicious meals, exceptional service, and a delightful dining experience right at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;