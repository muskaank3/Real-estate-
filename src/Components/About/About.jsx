import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import big1Img from '../../assets/About/big1.jpg'
import logoImg from '../../assets/About/logo-land2.png'

const About = () => {
  return (
   <div className="about-page">
      
      {/* Hero Banner */}
      <div className="about-hero">
        <img src={big1Img} alt="About Banner" />
      </div>

      {/* Content Section */}
      <div className="about-content">
        <div className="about-text">
          <p>
            Founded with a vision to simplify property buying, selling, and renting, EliteDwell is a customer-first real estate platform committed to delivering trusted, transparent, and value-driven property solutions. We connect home buyers, sellers, investors, and tenants with verified properties and expert guidance—making every property decision simple and stress-free.
          </p>

          <p>
            With a growing portfolio of residential and commercial properties, we focus on prime locations, quality construction, and long-term value. Our team of experienced real estate professionals understands the market deeply and helps clients find homes that match their lifestyle, budget, and future goals.
          </p>

          <p>At EliteDwell, we believe real estate is not just about properties—it’s about people, trust, and long-term relationships. Whether you are buying your first home, selling your property, or looking for the perfect rental, we ensure a smooth, transparent, and rewarding experience from start to finish.</p>
        </div>

        <div className="about-badge">
          <img src={logoImg} alt="Since 1993" />
        </div>
      </div>

      <div className="about-both">
        <div className="about-boxx">
            <h2>Vision</h2>
           <p>To be a Leading Property Developer in the region delivering affordable and sustainable development with high standards of construction.</p>

        </div>

        <div className="about-boxx">
            <h2>Mission</h2>
            <p>Conduct value engineering for each project. Deliver quality construction at extremely competitive rate. On-Time Delivery of the projects.</p>
        </div>
      </div>


      {/* Why Choose Us Section */}
<div className="why-choose">
  <h2>Why Choose Us ?</h2>
  <p className="why-subtitle">Trusted Real estate experts in Dubai</p>

  <div className="why-grid">
    <div className="why-card">
      <i className="fa-solid fa-circle-check why-icon"></i>
      <h4>Verified Listing</h4>
    </div>

    <div className="why-card">
      <i className="fa-solid fa-chart-line why-icon"></i>
      <h4>High Return on Investment</h4>
    </div>

    <div className="why-card">
      <i className="fa-regular fa-clock why-icon"></i>
      <h4>Timely Delivery</h4>
    </div>

    <div className="why-card">
      <i className="fa-solid fa-location-dot why-icon"></i>
      <h4>Prime Location</h4>
    </div>

    <div className="why-card">
      <i className="fa-solid fa-bed why-icon"></i>
      <h4>Luxury Furnishing</h4>
    </div>

    <div className="why-card">
      <h3>40+</h3>
      <h4>Amenities</h4>
    </div>

    <div className="why-card">
      <h3>24/7</h3>
      <h4>Available</h4>
    </div>

    <div className="why-card">
      <i className="fa-solid fa-sack-dollar why-icon"></i>
      <h4>Best Prices</h4>
    </div>
  </div>
</div>

    </div>
  )
};

export default About;
