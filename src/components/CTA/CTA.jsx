import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Eyes from '../Eyes/Eyes';
import './CTA.css';

const CTA = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="cta-section container section-padding" ref={ref}>
      <Eyes />
      <div className={`cta-content reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="cta-title">Ready<br/>to start<br/>the project?</h2>
        
        <div className="cta-buttons">
          <button className="btn-primary">Start the project</button>
          <span className="or-text">or</span>
          <button className="btn-secondary">hello@ochi.design</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
