import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/@fs/C:/Users/ACER/.gemini/antigravity/brain/a1a8a58c-1d4c-4a68-973b-96336d2d9fb1/.user_uploaded/media_1790515653511.png" alt="metaruleX" className="metarulex-footer-logo" style={{height: '60px', objectFit: 'contain'}} />
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-col">
            <h3>S:</h3>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Behance</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>L:</h3>
            <ul>
              <li><a href="#">202-1965 W 4th Ave<br/>Vancouver, Canada</a></li>
              <li><a href="#">30 Chukarina St<br/>Lviv, Ukraine</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>E:</h3>
            <ul>
              <li><a href="mailto:hello@metarulex.com">hello@metarulex.com</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>M:</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/work">Our Work</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; metaruleX {new Date().getFullYear()}. Legal Terms</p>
        <p>Website by metaruleX</p>
      </div>
    </footer>
  );
};

export default Footer;
