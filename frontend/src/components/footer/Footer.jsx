import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-logo-section">
          <Link to="/" className="footer-logo">
            <span className="logo-main">KAVINDYA</span>
            <span className="logo-sub">BOOK STORE</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4><b>Quick Links</b></h4>
            <Link to="/" className="footer-item">Home</Link>
            <Link to="/books/create" className="footer-item">Add Book</Link>
            <Link to="/books/details/1" className="footer-item">Sample Book</Link>
          </div>
          <div className="footer-column">
            <h4><b>Support</b></h4>
            <Link to="/contact" className="footer-item">Contact Us</Link>
            <Link to="/about" className="footer-item">About</Link>
          </div>
          <div className="footer-column">
            <h4><b>Follow Us</b></h4>
            <a href="#" className="footer-item">Facebook</a>
            <a href="#" className="footer-item">Instagram</a>
            <a href="#" className="footer-item">Twitter</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <p className="footer-copy">&copy; {new Date().getFullYear()} KAVINDYA BOOK STORE. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
