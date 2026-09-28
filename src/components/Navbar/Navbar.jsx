import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/@fs/C:/Users/ACER/.gemini/antigravity/brain/a1a8a58c-1d4c-4a68-973b-96336d2d9fb1/.user_uploaded/media_1790515653511.png" alt="metaruleX" className="metarulex-logo" />
        </Link>
        
        <nav className="navbar-links desktop-only">
          {['Services', 'Our Work', 'About Us', 'Insights', 'Contact Us'].map((item, index) => (
            <Link key={index} to="/" className="nav-link">
              {item}
            </Link>
          ))}
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {['Services', 'Our Work', 'About Us', 'Insights', 'Contact Us'].map((item, index) => (
            <Link key={index} to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
