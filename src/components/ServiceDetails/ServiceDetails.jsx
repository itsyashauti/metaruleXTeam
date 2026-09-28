import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './ServiceDetails.css';

const detailsData = [
  {
    title: "Business Proposal",
    desc: "A business proposal is a written document sent to a prospective client in order to obtain a specific job.",
    projects: ["Ochi Pitch", "Envato Elements"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Agency",
    desc: "We build dedicated agency structures for long-term partners who need continuous presentation support.",
    projects: ["SpaceX Deck", "Tesla Investor Day"],
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop"
  }
];

const ServiceDetails = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="service-details container section-padding" ref={ref}>
      {detailsData.map((detail, index) => (
        <div 
          key={index} 
          className={`detail-block reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: `${index * 0.2}s` }}
        >
          <div className="detail-info">
            <h2 className="detail-title">{detail.title}</h2>
            <p className="detail-desc">{detail.desc}</p>
            
            <div className="detail-projects">
              <h4>Recent Projects</h4>
              <ul>
                {detail.projects.map((proj, i) => (
                  <li key={i}>{proj}</li>
                ))}
              </ul>
            </div>
            
            <button className="btn-primary" style={{marginTop: '2rem'}}>
              Start a project
            </button>
          </div>
          
          <div className="detail-image">
            <img src={detail.image} alt={detail.title} loading="lazy" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceDetails;
