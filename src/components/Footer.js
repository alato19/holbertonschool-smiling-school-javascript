import React from "react";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-images">
          <img src={logo} alt="Website Logo" />
          <div className="footer-images-with-link">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
        <p>© smileschool 2020</p>
      </div>
    </footer>
  );
};

export default Footer;