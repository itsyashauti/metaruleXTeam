import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Introduction.css';

const Introduction = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="introduction container section-padding" ref={ref}>
      <div className={`intro-content reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
        <h2>
          Let's be honest. There are really no excuses to have a bad presentation anymore. No one has time for poorly communicated ideas. Focus on what you do best — growing your business, while we do our best at <span className="underline">making your presentations awesome.</span>
        </h2>
      </div>
    </section>
  );
};

export default Introduction;
