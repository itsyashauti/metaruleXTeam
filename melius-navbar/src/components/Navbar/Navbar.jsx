import React, { useState, useEffect } from 'react';
import './Navbar.css';
import MobileMenu from './MobileMenu';
import logo from '/@fs/C:/Users/ACER/.gemini/antigravity/brain/7268366f-afca-4998-a6c4-33f657aac386/.user_uploaded/media_1790195356070.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Left Section: Logo & Links */}
        <div className="navbar-left">
          <a href="/" className="logo-link">
            <img 
              src="/@fs/C:/Users/ACER/.gemini/antigravity/brain/7268366f-afca-4998-a6c4-33f657aac386/.user_uploaded/media_1790200323492.png" 
              alt="metaruleX Logo" 
              className="logo-icon" 
              style={{ 
                height: '60px', 
                width: 'auto', 
                mixBlendMode: 'multiply',
                marginTop: '4px' /* Slight adjustment to visually center it perfectly */
              }} 
            />
          </a>
          <div className="nav-divider"></div>

          <ul className="desktop-nav-links">
            <li>
              <a href="#product">
                Product
                <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li><a href="#enterprise">Enterprise</a></li>
            <li>
              <a href="#resources">
                Resources
                <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#company">
                Company
                <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>

        {/* Right Section: Buttons */}
        <div className="navbar-right desktop-buttons">
          <button className="btn btn-signin">Sign In</button>
          <button className="btn btn-start">Start for Free</button>
        </div>

        {/* Hamburger Menu Icon */}
        <button className="hamburger-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} />
    </div>
  );
};

export default Navbar;
