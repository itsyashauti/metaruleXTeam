import React from 'react';

const MobileMenu = ({ isOpen }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <ul className="mobile-nav-links">
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
      <div className="mobile-buttons">
        <button className="btn btn-signin mobile-btn">Sign In</button>
        <button className="btn btn-start mobile-btn">Start for Free</button>
      </div>
    </div>
  );
};

export default MobileMenu;
