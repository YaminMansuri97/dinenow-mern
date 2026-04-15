import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ManageProduct = () => {
  const [productName, setProductName] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [vegOrNonVeg, setVegOrNonVeg] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const brandBrown = "#7C2D23";

  // Handle Image Preview cleanup to prevent memory leaks/connection errors
  useEffect(() => {
    if (!imageFile) {
      setPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(imageFile);
    setPreview(objectUrl);

    // Free memory when component unmounts or file changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile]);

  const handleProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("vegOrNonVeg", vegOrNonVeg);
    formData.append("price", Number(price)); // Ensure it's a number
    formData.append("rating", Number(rating) || 4.5);
    formData.append("description", description);
    formData.append("bestSeller", bestSeller);
    
    if (imageFile) {
      // Ensure "imageUrl" matches your backend upload.single("imageUrl")
      formData.append("imageUrl", imageFile); 
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/products/add",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // Check for response.data.success or just response.data
      toast.success("🎉 Product added successfully!");

      // Reset Form
      setProductName("");
      setBestSeller(false);
      setVegOrNonVeg("");
      setPrice("");
      setRating("");
      setImageFile(null);
      setDescription("");
      e.target.reset();
      
    } catch (error) {
      // Detailed logging to find the 500 cause
      console.error("Backend Error Response:", error.response?.data);
      const serverErrorMessage = error.response?.data?.message || "Internal Server Error";
      toast.error(`❌ ${serverErrorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "50px 0" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Add New Menu Item</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: brandBrown, margin: "10px auto" }}></div>
        </div>

        <div className="row g-5">
          <div className="col-lg-7">
            <form onSubmit={handleProduct} className="p-4 rounded-4 shadow-sm border bg-white">
              <div className="mb-4">
                <label className="form-label fw-bold small text-muted">PRODUCT NAME</label>
                <input
                  value={productName}
                  required
                  type="text"
                  className="form-control border-0 bg-light"
                  placeholder="Enter dish name..."
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label fw-bold small text-muted">FOOD CATEGORY</label>
                  <select
                    value={vegOrNonVeg}
                    required
                    className="form-select border-0 bg-light"
                    onChange={(e) => setVegOrNonVeg(e.target.value)}
                  >
                    <option value="" disabled>Select Type</option>
                    <option value="veg">Veg</option>
                    <option value="non-veg">Non-Veg</option>
                  </select>
                </div>
                <div className="col-md-6 mb-4">
                  <label className="form-label fw-bold small text-muted">PRICE (₹)</label>
                  <input
                    value={price}
                    required
                    type="number"
                    className="form-control border-0 bg-light"
                    placeholder="450"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold small text-muted">UPLOAD IMAGE</label>
                <input
                  required
                  type="file"
                  accept="image/*"
                  className="form-control border-0 bg-light"
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold small text-muted">DESCRIPTION</label>
                <textarea
                  value={description}
                  required
                  className="form-control border-0 bg-light"
                  rows="3"
                  placeholder="Delicious ingredients..."
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-check form-switch mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={bestSeller}
                  onChange={(e) => setBestSeller(e.target.checked)}
                />
                <label className="form-check-label fw-bold ms-2">Mark as Best Seller</label>
              </div>

              <button
                type="submit"
                className="btn btn-lg w-100 text-white fw-bold py-3"
                style={{ backgroundColor: brandBrown }}
                disabled={isLoading}
              >
                {isLoading ? "Uploading..." : "Add to Menu"}
              </button>
            </form>
          </div>

          <div className="col-lg-5">
            <h5 className="text-center fw-bold text-muted mb-4">Live Preview</h5>
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden mx-auto" style={{ maxWidth: "350px" }}>
              <div className="position-relative">
                {bestSeller && (
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge px-3 py-2" style={{ backgroundColor: brandBrown, fontSize: "10px" }}>BEST SELLER</span>
                  </div>
                )}
                <img
                  src={preview || "https://placehold.co/400x300?text=Food+Image"}
                  alt="Preview"
                  className="w-100"
                  style={{ height: "220px", objectFit: "cover" }}
                />
              </div>
              <div className="card-body text-center p-4">
                <div className="mb-1 d-flex justify-content-center align-items-center gap-2">
                  <span style={{ color: vegOrNonVeg === "veg" ? "#28a745" : "#dc3545" }}>●</span>
                  <span className="fw-bold small text-uppercase" style={{ color: vegOrNonVeg === "veg" ? "#28a745" : "#dc3545", fontSize: "10px" }}>
                    {vegOrNonVeg || "Category"}
                  </span>
                </div>
                <h4 className="fw-bold mb-2">{productName || "Dish Name"}</h4>
                <p className="text-muted small mb-3">{description || "Product description will appear here..."}</p>
                <h3 className="fw-bold mb-4" style={{ color: brandBrown }}>₹{price || "0"}</h3>
                <button className="btn w-100 py-2 fw-bold text-white" style={{ backgroundColor: brandBrown }} disabled>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;