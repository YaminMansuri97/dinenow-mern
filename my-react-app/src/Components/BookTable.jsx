import React, { useMemo, useState } from "react";
import { toast } from "react-toastify";
import {
  FaCalendarDays,
  FaChair,
  FaClock,
  FaLocationDot,
  FaPhoneVolume,
  FaUtensils,
  FaUserGroup,
} from "react-icons/fa6";

const diningHighlights = [
  {
    icon: <FaUtensils size={18} />,
    title: "Chef's Signature Menu",
    text: "Seasonal plates, live counters, and chef-curated tasting options every evening.",
  },
  {
    icon: <FaLocationDot size={18} />,
    title: "City View Seating",
    text: "Choose indoor lounge seating or a candle-lit terrace table for special nights.",
  },
  {
    icon: <FaPhoneVolume size={18} />,
    title: "Instant Confirmation",
    text: "Book now and get a reservation summary you can later connect to your backend.",
  },
];

const occasionOptions = [
  "Casual Dinner",
  "Family Gathering",
  "Birthday Celebration",
  "Date Night",
  "Business Lunch",
];

const timeSlots = [
  "12:30 PM",
  "1:30 PM",
  "3:00 PM",
  "6:30 PM",
  "7:30 PM",
  "8:30 PM",
  "9:30 PM",
];

function BookTable() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "2",
    date: "",
    time: "7:30 PM",
    occasion: "Casual Dinner",
    seating: "Indoor",
    requests: "",
  });

  const palette = {
    page: "#fff7ec",
    card: "#fffdf8",
    accent: "#c75b39",
    accentDark: "#7a2e1c",
    text: "#2f241f",
    muted: "#6c5c54",
    border: "#efddcf",
    panel: "#f7e2c9",
    success: "#eef8ee",
  };

  const reservationSummary = useMemo(
    () => [
      { label: "Date", value: formData.date || "Select a date" },
      { label: "Time", value: formData.time },
      { label: "Guests", value: `${formData.guests} Guests` },
      { label: "Seating", value: formData.seating },
    ],
    [formData]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Table booking request submitted successfully.");
    console.log("Reservation submitted:", formData);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #ffe3b8 0%, #fff7ec 42%, #fffdf9 100%)",
        padding: "48px 16px 80px",
        color: palette.text,
      }}
    >
      <div className="container">
        <div
          style={{
            background: "linear-gradient(135deg, #4b1d12 0%, #8c3d28 60%, #c75b39 100%)",
            color: "#fffaf3",
            borderRadius: "28px",
            padding: "48px 32px",
            boxShadow: "0 24px 60px rgba(92, 36, 21, 0.18)",
            marginBottom: "28px",
          }}
        >
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p style={{ letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.82 }}>
                Reserve Your Experience
              </p>
              <h1 style={{ fontSize: "clamp(2.3rem, 4vw, 4rem)", fontWeight: "800", marginBottom: "16px" }}>
                Book a table for your next memorable meal
              </h1>
              <p style={{ maxWidth: "640px", lineHeight: "1.8", opacity: 0.92, marginBottom: "0" }}>
                Plan lunch, dinner, or a celebration in a few clicks. This frontend is ready for backend integration whenever you want to connect reservation APIs.
              </p>
            </div>

            <div className="col-lg-5">
              <div
                style={{
                  backgroundColor: "rgba(255, 250, 243, 0.12)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  borderRadius: "24px",
                  padding: "24px",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div className="row g-3">
                  {[
                    { icon: <FaCalendarDays />, label: "Open all week", value: "12 PM - 11 PM" },
                    { icon: <FaChair />, label: "Private corner tables", value: "Available on request" },
                    { icon: <FaUserGroup />, label: "Group dining", value: "Up to 12 guests" },
                  ].map((item) => (
                    <div className="col-12" key={item.label}>
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <div
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "14px",
                            backgroundColor: "rgba(255,255,255,0.16)",
                            display: "grid",
                            placeItems: "center",
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div style={{ fontWeight: "700" }}>{item.label}</div>
                          <div style={{ opacity: 0.82 }}>{item.value}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div
              style={{
                backgroundColor: palette.card,
                borderRadius: "28px",
                padding: "32px",
                border: `1px solid ${palette.border}`,
                boxShadow: "0 14px 34px rgba(89, 53, 34, 0.08)",
              }}
            >
              <div style={{ marginBottom: "24px" }}>
                <h2 style={{ fontWeight: "800", marginBottom: "10px" }}>Reservation Details</h2>
                <p style={{ color: palette.muted, marginBottom: "0" }}>
                  Fill out the form below to create a clean reservation flow for your users.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      required
                      style={{ padding: "14px", borderRadius: "14px", borderColor: palette.border }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 11111 00000"
                      required
                      style={{ padding: "14px", borderRadius: "14px", borderColor: palette.border }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email@example.com"
                      required
                      style={{ padding: "14px", borderRadius: "14px", borderColor: palette.border }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Number of Guests</label>
                    <select
                      className="form-select"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      style={{ padding: "14px", borderRadius: "14px", borderColor: palette.border }}
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((guestCount) => (
                        <option key={guestCount} value={guestCount}>
                          {guestCount} {guestCount === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Reservation Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      style={{ padding: "14px", borderRadius: "14px", borderColor: palette.border }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Preferred Time</label>
                    <select
                      className="form-select"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      style={{ padding: "14px", borderRadius: "14px", borderColor: palette.border }}
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Occasion</label>
                    <select
                      className="form-select"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      style={{ padding: "14px", borderRadius: "14px", borderColor: palette.border }}
                    >
                      {occasionOptions.map((occasion) => (
                        <option key={occasion} value={occasion}>
                          {occasion}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Seating Preference</label>
                    <div className="d-flex gap-2">
                      {["Indoor", "Outdoor"].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData((previous) => ({ ...previous, seating: option }))}
                          className="btn flex-fill"
                          style={{
                            padding: "12px",
                            borderRadius: "14px",
                            border: `1px solid ${formData.seating === option ? palette.accent : palette.border}`,
                            backgroundColor: formData.seating === option ? "#fde6dc" : "#fff",
                            color: palette.text,
                            fontWeight: "700",
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Special Request</label>
                    <textarea
                      className="form-control"
                      name="requests"
                      value={formData.requests}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Add decoration requests, allergies, wheelchair access needs, or anything else."
                      style={{ padding: "14px", borderRadius: "14px", borderColor: palette.border }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn w-100 mt-4"
                  style={{
                    backgroundColor: palette.accent,
                    color: "#fff",
                    borderRadius: "16px",
                    padding: "15px",
                    fontWeight: "800",
                    letterSpacing: "0.03em",
                    boxShadow: "0 14px 30px rgba(199, 91, 57, 0.24)",
                  }}
                >
                  Confirm Reservation
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div
              style={{
                backgroundColor: palette.card,
                borderRadius: "28px",
                padding: "28px",
                border: `1px solid ${palette.border}`,
                boxShadow: "0 14px 34px rgba(89, 53, 34, 0.08)",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: palette.panel,
                  borderRadius: "22px",
                  padding: "22px",
                  marginBottom: "22px",
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <FaClock color={palette.accentDark} />
                  <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "800" }}>Booking Summary</h3>
                </div>

                <div className="row g-3">
                  {reservationSummary.map((item) => (
                    <div className="col-sm-6" key={item.label}>
                      <div
                        style={{
                          backgroundColor: "#fffaf3",
                          borderRadius: "16px",
                          padding: "14px",
                          minHeight: "88px",
                        }}
                      >
                        <div style={{ color: palette.muted, fontSize: "0.88rem", marginBottom: "8px" }}>{item.label}</div>
                        <div style={{ fontWeight: "800" }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: palette.success,
                  border: "1px dashed #b8d8b8",
                  borderRadius: "18px",
                  padding: "18px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ fontWeight: "800", marginBottom: "6px" }}>Reservation Policy</div>
                <p style={{ margin: 0, color: palette.muted, lineHeight: "1.7" }}>
                  Please arrive 10 minutes early. Tables are held for 15 minutes after the reserved time.
                </p>
              </div>

              <div>
                <h3 style={{ fontWeight: "800", marginBottom: "16px" }}>Why guests book with us</h3>
                <div className="d-grid gap-3">
                  {diningHighlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      style={{
                        display: "flex",
                        gap: "14px",
                        alignItems: "flex-start",
                        padding: "16px",
                        border: `1px solid ${palette.border}`,
                        borderRadius: "18px",
                        backgroundColor: "#fff",
                      }}
                    >
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "14px",
                          backgroundColor: "#fde6dc",
                          display: "grid",
                          placeItems: "center",
                          color: palette.accentDark,
                          flexShrink: 0,
                        }}
                      >
                        {highlight.icon}
                      </div>
                      <div>
                        <div style={{ fontWeight: "800", marginBottom: "6px" }}>{highlight.title}</div>
                        <div style={{ color: palette.muted, lineHeight: "1.6" }}>{highlight.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTable;
