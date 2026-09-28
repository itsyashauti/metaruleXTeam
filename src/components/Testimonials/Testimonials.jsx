import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ArrowUpRight } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    client: "Karman Ventures",
    person: "William Barnes",
    services: ["Investor Deck", "Startup Pitch"],
    testimonial: "They understood our complex technology and translated it into a compelling narrative that investors immediately grasped. We closed our round in record time.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    client: "Nexus Health",
    person: "Sarah Jenkins",
    services: ["Company Presentation"],
    testimonial: "The attention to detail and editorial eye transformed our generic slides into a premium brand experience that our sales team is proud to present.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    client: "Aurora Tech",
    person: "David Chen",
    services: ["Big News Deck"],
    testimonial: "Incredible motion design and typography. It felt less like a presentation and more like a cinematic experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="testimonials container section-padding" ref={ref}>
      <h2 className="section-title">Clients' reviews</h2>
      
      <div className={`testimonial-list reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
        {testimonialsData.map((item, index) => (
          <div key={index} className={`testimonial-item ${openIndex === index ? 'open' : ''}`}>
            <div className="testimonial-header" onClick={() => handleToggle(index)}>
              <div className="test-col test-client">
                <span className="client-name">{item.client}</span>
              </div>
              <div className="test-col test-services-label hidden-mobile">
                <span>Services:</span>
              </div>
              <div className="test-col test-person hidden-mobile">
                <span>{item.person}</span>
              </div>
              <div className="test-col test-action">
                <button className="test-toggle">
                  {openIndex === index ? 'HIDE' : 'READ'}
                </button>
              </div>
            </div>
            
            <div className="testimonial-content" style={{ height: openIndex === index ? 'auto' : '0' }}>
              <div className="testimonial-content-inner">
                <div className="test-services-list">
                  <span className="mobile-label">Services:</span>
                  {item.services.map((service, i) => (
                    <button key={i} className="cap-item-btn">
                      <span className="cap-item-text">{service}</span>
                      <div className="cap-icon"><ArrowUpRight size={18} /></div>
                    </button>
                  ))}
                </div>
                
                <div className="test-details">
                  <span className="mobile-label">{item.person}</span>
                  <div className="test-image">
                    <img src={item.image} alt={item.person} />
                  </div>
                  <p className="test-quote">{item.testimonial}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
