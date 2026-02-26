import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Optional: auto reset after 5 sec
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Let’s Find Your Dream Home 🏡</h2>
          <p>
            Looking to <b>Buy</b>, <b>Sell</b>, or <b>Rent</b> a property?  
            Drop your details and our property expert will connect with you shortly.
          </p>

          <div className="info-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>Mumbai, India</span>
          </div>

          <div className="info-item">
            <i className="fa-solid fa-phone"></i>
            <span>+91 98765 43210</span>
          </div>

          <div className="info-item">
            <i className="fa-solid fa-envelope"></i>
            <span>support@homespace.com</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-box">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Contact Us</h3>

              <div className="form-group">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Your Email" required />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-phone"></i>
                <input type="tel" placeholder="Your Phone" required />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-house"></i>
                <select required>
                  <option value="">Select Purpose</option>
                  <option>Buy a Property</option>
                  <option>Sell a Property</option>
                  <option>Rent a Property</option>
                </select>
              </div>

              <div className="form-group textarea">
                <i className="fa-solid fa-message"></i>
                <textarea placeholder="Your Message..." rows="4"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit Request 🚀
              </button>
            </form>
          ) : (
            <div className="success-box">
              <i className="fa-solid fa-circle-check"></i>
              <h3>Request Sent Successfully!</h3>
              <p>
                Our property expert will contact you shortly to help you  
                <b> buy, sell, or rent </b> your perfect home. 🏠✨
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;