import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa";
import logoImg from '../../assets/Navbar/logo-land2.png'

const Footer = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const footerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollBtn(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer-main" ref={footerRef}>
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-col brand">
          <img src={logoImg} className='logooo-imgg'></img>
          <p>
            Exclusive luxury properties across Dubai’s most prestigious
            destinations. Designed for those who value elegance and trust.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Luxury Villas</li>
            <li>Penthouses</li>
            <li>Waterfront Homes</li>
            <li>Investment Advisory</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Dubai, UAE</li>
            <li>+971 50 123 4567</li>
            <li>info@dubailux.com</li>
          </ul>
        </div>

      </div>

      {/* 🔼 Scroll To Top Button — footer aane par hi dikhega */}
      {showScrollBtn && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <div className="footer-bottom">
        <p>© 2026 EliteDwell. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;