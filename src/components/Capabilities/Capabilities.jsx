import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Capabilities.css';

const capabilitiesData = [
  {
    category: "Raise Funds",
    items: ["Investor Deck", "Startup Pitch"]
  },
  {
    category: "Sell Products",
    items: ["Business Proposal", "Company Presentation", "Product Presentation", "Sales Deck", "Service Deck"]
  },
  {
    category: "Hire & Manage People",
    items: ["Big News Deck", "Branded Template", "Onboarding Presentation", "Policy Deck & Playbook", "Progress Report"]
  },
  {
    category: "Additional",
    items: ["Agency", "Branding", "Corporate Training", "Redesign", "Review"]
  }
];

const Capabilities = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="capabilities container section-padding" ref={ref}>
      <div className="capabilities-header">
        <h2 className={`section-title reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          Our Capabilities
        </h2>
      </div>
      
      <div className="capabilities-grid">
        {capabilitiesData.map((group, index) => (
          <div 
            key={index} 
            className={`cap-group reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="cap-category-wrap">
              <span className="dot"></span>
              <h3 className="cap-category">{group.category}:</h3>
            </div>
            <div className="cap-list">
              {group.items.map((item, i) => (
                <button key={i} className="cap-item-btn">
                  <span className="cap-item-text">{item}</span>
                  <div className="cap-icon">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
