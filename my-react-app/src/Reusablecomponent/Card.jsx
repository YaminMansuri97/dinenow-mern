import React from 'react';

const Card = ({ name, img, description, price, shoot, rating, isBestSeller, isVeg }) => {
  const colors = {
    gradientStart: "#4a1d13",
    gradientEnd: "#a0402c",
    veg: "#2AC23C",
    nonVeg: "#C22A2A",
  };

  return (
    <div className="card h-100 shadow-sm border-0 position-relative" 
         style={{ width: "18rem", borderRadius: "20px", overflow: "hidden", margin: "0 auto" }}>
      

      {isBestSeller && (
        <span className="badge position-absolute top-0 end-0 m-3 px-3 py-2 text-white"
          style={{ 
            background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`, 
            borderRadius: "50px", 
            zIndex: 2,
            fontSize: "0.7rem"
          }}>
          BEST SELLER
        </span>
      )}

      <img src={img} className="card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }} />

      <div className="card-body d-flex flex-column text-center">
        
        {/* VEG / NON-VEG INDICATOR */}
        <div className="mb-2 d-flex justify-content-center align-items-center gap-1">
          <span style={{ 
            display: "inline-block", 
            width: "8px", 
            height: "8px", 
            borderRadius: "50%", 
            background: isVeg ? colors.veg : colors.nonVeg 
          }}></span>
          <span style={{ color: isVeg ? colors.veg : colors.nonVeg, fontWeight: "700", fontSize: "0.75rem" }}>
            {isVeg ? "VEG" : "NON-VEG"}
          </span>
        </div>

        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text text-muted small" style={{ flexGrow: 1 }}>{description}</p>

        {/* RATING SECTION */}
        <div className="mb-2">
          <span className="badge bg-light text-dark border">
            <i className="bi bi-star-fill text-warning me-1"></i>
            {rating} <span className="text-muted" style={{fontSize: '0.7rem'}}>/ 5</span>
          </span>
        </div>

        <h5 className="fw-bold mb-3" style={{ color: colors.gradientEnd }}>₹{price}</h5>

        <button className="btn text-white w-100 py-2" onClick={shoot}
          style={{ 
            background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`, 
            border: "none", 
            borderRadius: "12px",
            fontWeight: "600"
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;