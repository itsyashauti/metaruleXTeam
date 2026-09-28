import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Statistics.css';

const statsData = [
  { value: "100+", label: "Clients from multiple countries" },
  { value: "$400M+", label: "Raised by clients" },
  { value: "91%", label: "Returning clients" },
  { value: "94.5%", label: "Net Promoter Score" }
];

const Statistics = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="statistics container section-padding" ref={ref}>
      <div className="stats-header-row">
        <h4>metaruleX in numbers:</h4>
      </div>
      
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div 
            key={index} 
            className={`stat-card reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="stat-card-bg"></div>
            <div className="stat-value-wrap">
              <h3 className="stat-value">{stat.value}</h3>
            </div>
            <div className="stat-label-wrap">
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
