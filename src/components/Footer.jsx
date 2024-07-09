import React from "react";

import "./footer.css"

export default function Footer () {
    return (
        <footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h4>FIND A STORE</h4>
      <h4>BECOME A MEMBER</h4>
      <h4>SIGN UP FOR EMAIL</h4>
      <h4>SEND US FEEDBACK</h4>
    </div>
    <div className="footer-section">
      <h4>GET HELP</h4>
      <ul>
        <li>Order Status</li>
        <li>Shipping and Delivery</li>
        <li>Returns</li>
        <li>Payment Options</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>ABOUT NIKE</h4>
      <ul>
        <li>News</li>
        <li>Careers</li>
        <li>Investors</li>
        <li>Purpose</li>
        <li>Sustainability</li>
      </ul>
    </div>
    <div className="footer-section social-media">
      <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
      <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
      <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
      <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="footer-legal">
      <span>© 2024 Nike, Inc. All Rights Reserved</span>
      <a href="#">Guides</a>
      <a href="#">Terms of Sale</a>
      <a href="#">Terms of Use</a>
      <a href="#">Nike Privacy Policy</a>
    </div>
    <div className="footer-region">
      <span>United States</span>
    </div>
  </div>
</footer>
    )
}