import React, { useState, useEffect } from "react"; // Added useState
import Swal from "sweetalert2";
import Card from "../Reusablecomponent/Card";

function Product() {
  // 1. Create state for products
  const [dbProducts, setDbProducts] = useState([]); 

  const colors = {
    gradientStart: "#4a1d13", 
    gradientEnd: "#a0402c",   
    textDark: "#2D3436",
    successGreen: "#27ae60"
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products/list");
      const data = await response.json();
      if (response.ok) {
        // 2. Save the fetched products to state
        // If your backend returns { products: [...] }, use data.products
        // If it returns just the array [...], use data
        setDbProducts(data.products || data); 
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    Swal.fire({
      title: "Added to Cart!",
      text: `${product.productName || product.name} is now in your tray.`,
      timer: 4000,
      timerProgressBar: true,
      icon: "success",
      iconColor: colors.gradientEnd,
      confirmButtonColor: colors.gradientStart,
      confirmButtonText: "Continue Shopping",
      background: "#fff",
      backdrop: `rgba(74, 29, 19, 0.4)`
    });
  };

  return (
    <div style={{ backgroundColor: "#fdfbf9", minHeight: "100vh" }}>
      <div style={{
          background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
          padding: "60px 20px",
          textAlign: "center",
          color: "white",
          borderRadius: "0 0 40px 40px", 
        }}>
        <h1 style={{ fontWeight: "800", fontSize: "2.5rem" }}>Our Delicious Menu</h1>
        <p style={{ opacity: 0.9 }}>Fresh ingredients, amazing taste, delivered fast.</p>
      </div>

      <div className="container">
        <div className="row">
          {/* 3. Map through dbProducts (from database) instead of productList */}
          {dbProducts.map((item, index) => (
            <div className="col-md-4 mb-4" key={item._id || index}>
              <Card
                name={item.productName}
                // 4. Prefix the image URL with your backend address
                img={`http://localhost:3000${item.imageUrl}`}
                description={item.description}
                price={item.price}
                shoot={() => handleAddToCart(item)}
                rating={item.rating}
                isVeg={item.vegOrNonVeg === "veg"}
                isBestSeller={item.bestSeller}
              />
            </div>
          ))}
          
          {/* Show a message if no products exist */}
          {dbProducts.length === 0 && (
             <div className="text-center w-100 mt-5">
               <h3>No products found in the database.</h3>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;