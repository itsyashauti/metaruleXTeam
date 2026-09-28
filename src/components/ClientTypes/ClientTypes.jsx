import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './ClientTypes.css';

const clientData = [
  {
    id: "01",
    title: "Innovation & Frontier-Tech Firms",
    description: "We work with visionaries in AI, space technology, advanced hardware, and next-gen software who are building the future."
  },
  {
    id: "02",
    title: "Established Companies & Enterprises",
    description: "We partner with Fortune 500s, universities, major SaaS platforms, and global brands to elevate their communications."
  },
  {
    id: "03",
    title: "Industry Shifters & Cultural Catalysts",
    description: "We help organizations and startups that are actively disrupting their industries and creating new cultural paradigms."
  }
];

const ClientTypes = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="client-types container section-padding" ref={ref}>
      <h2 className="section-title">We create presentations for:</h2>
      <div className="clients-grid">
        {clientData.map((client, index) => (
          <div 
            key={client.id} 
            className={`client-card reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <span className="client-number">{client.id}</span>
            <h3 className="client-title">{client.title}</h3>
            <p className="client-desc">{client.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTypes;
