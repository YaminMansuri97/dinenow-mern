import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import DineNow_Transparent from "../assets/DineNow_Transparent.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Track both token and role in state so the UI updates immediately
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  // 2. Sync state whenever the URL changes (e.g., after login/logout)
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setRole(localStorage.getItem("role"));
  }, [location]);

  const colors = {
    gradientStart: "#4a1d13",
    gradientEnd: "#a0402c",
    textDark: "#2D3436",
  };

  const navItemStyle = (path) => ({
    color: location.pathname === path ? colors.gradientEnd : "#555",
    fontWeight: location.pathname === path ? "700" : "500",
    fontSize: "1rem",
    transition: "0.3s",
  });

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
    navigate("/login");
  };

  return (
    <div className="container-fluid sticky-top bg-white shadow-sm px-0">
      <nav className="navbar navbar-expand-lg navbar-light py-3 px-4">
        <div className="container">
          {/* LEFT: Logo & Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={DineNow_Transparent}
              alt="Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "800",
                color: colors.gradientStart,
              }}
            >
              Dine <span style={{ color: colors.gradientEnd }}>Now</span>
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MIDDLE: Nav Links */}
          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={navItemStyle("/")}>
                  <i className="bi bi-house me-1"></i> Home
                </Link>
              </li>

              {/* Corrected: Admin Link (Only shows if token exists and role is admin) */}
              {token && role === "admin" && (
                <li className="nav-item">
                  <Link to="/manageproducts" className="nav-link" style={navItemStyle("/manageproducts")}>
                    <i className="bi bi-shield-check me-1"></i> Admin
                  </Link>
                </li>
              )}

              {/* Corrected: User Link (Only shows if token exists and role is user) */}
              {token && role === "user" && (
                <li className="nav-item">
                  <Link to="/user" className="nav-link" style={navItemStyle("/user")}>
                    <i className="bi bi-person me-1"></i> Profile
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link to="/product" className="nav-link" style={navItemStyle("/product")}>
                  <i className="bi bi-journal-text me-1"></i> Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/book-table" className="nav-link" style={navItemStyle("/book-table")}>
                  <i className="bi bi-calendar-check me-1"></i> Book Table
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" style={navItemStyle("/about")}>
                  <i className="bi bi-info-circle me-1"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" style={navItemStyle("/contact")}>
                  <i className="bi bi-telephone me-1"></i> Contact
                </Link>
              </li>
            </ul>

            {/* RIGHT: Auth Buttons */}
            <div className="d-flex align-items-center gap-3">
              {token ? (
                <button
                  className="btn text-white px-4"
                  onClick={handleLogout}
                  style={{
                    background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                    borderRadius: "50px",
                    fontWeight: "700",
                    border: "none",
                    padding: "8px 25px",
                    boxShadow: "0 4px 15px rgba(160, 64, 44, 0.2)",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <i className="bi bi-box-arrow-right me-2"></i> Logout
                </button>
              ) : (
                <>
                  <button
                    className="btn btn-link text-decoration-none"
                    onClick={() => navigate("/login")}
                    style={{ color: colors.textDark, fontWeight: "600" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = colors.gradientEnd)}
                    onMouseOut={(e) => (e.currentTarget.style.color = colors.textDark)}
                  >
                    Login
                  </button>
                  <button
                    className="btn text-white px-4"
                    onClick={() => navigate("/register")}
                    style={{
                      background: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd})`,
                      borderRadius: "50px",
                      fontWeight: "600",
                      border: "none",
                      padding: "10px 25px",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;