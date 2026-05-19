import React from "react";
import { Video, Send } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <Video size={26} />
            </div>
            <h2>Video Call</h2>
          </div>

          <p>
            The simple, secure, and reliable video meeting platform for everyone.
          </p>

            <div className="social-icons">
                <span><FaFacebookF size={22} /></span>
                <span><FaTwitter size={22} /></span>
                <span><FaLinkedinIn size={22} /></span>
                <span><FaInstagram size={22} /></span>
            </div>
        </div>

        <div className="footer-links">
          <h3>Product</h3>
          <p>Features</p>
          <p>Pricing</p>
          <p>Integrations</p>
          <p>Updates</p>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-links">
          <h3>Support</h3>
          <p>Help Center</p>
          <p>Guides</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get updates and product news.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>
              <Send size={22} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Video Call. All rights reserved.<br></br>
        <p>Developed By Jaydeep</p>
      </div>
    </footer>
  );
};

export default Footer;