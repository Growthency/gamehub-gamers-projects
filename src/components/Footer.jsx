import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav>
          <h3>Services</h3>
          <Link to="/">Branding</Link>
          <Link to="/">Design</Link>
          <Link to="/">Marketing</Link>
          <Link to="/">Advertisement</Link>
        </nav>
        <nav>
          <h3>Company</h3>
          <Link to="/">About us</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Jobs</Link>
          <Link to="/">Press kit</Link>
        </nav>
        <nav>
          <h3>Legal</h3>
          <Link to="/">Terms of use</Link>
          <Link to="/">Privacy policy</Link>
          <Link to="/">Cookie policy</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Gamehub
        </p>
      </div>
    </footer>
  );
};

export default Footer;
