import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Advantages.css';

const advantagesData = [
  { id: "01", title: "Story + Design", description: "Every brand we work with gets tailored messaging, investor-grade clarity, and brand-defining design." },
  { id: "02", title: "Award-winning agency", description: "You don't have to care about design awards, but know that we do. Beside successful fundraising they're backing our excellence." },
  { id: "03", title: "Ahead of the Curve", description: "We helped AI, Web3, and deep tech pioneers tell their stories before the world even heard a whisper." },
  { id: "04", title: "A proven revenue engine", description: "Our work isn't just hell of a beautiful, it drives funding, sales and growth. That's the most important." },
  { id: "05", title: "We pick, you pick", description: "We view our projects as partnerships and are discerning about companies we ally with." },
  { id: "06", title: "9.3 Happiness Score", description: "Relationship with the client is our top priority. We put extra effort into keeping mutual respect, honesty and clarity. We continuously measure client happiness score." }
];

const Advantages = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="advantages section-padding" ref={ref}>
      <div className="marquee-container">
        <div className="marquee">
          <h1>Key Advantages&nbsp;&nbsp;&nbsp;Key Advantages&nbsp;&nbsp;&nbsp;Key Advantages&nbsp;&nbsp;&nbsp;Key Advantages&nbsp;&nbsp;&nbsp;</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="adv-list">
          <div className="adv-header-row">
            <h4>What to expect:</h4>
          </div>
          <div className="adv-grid">
        {advantagesData.map((item, index) => (
          <div 
            key={item.id} 
            className={`adv-item ${openIndex === index ? 'open' : ''} reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="adv-header" onClick={() => handleToggle(index)}>
              <div className="adv-title-wrap">
                <span className="adv-num">{item.id}</span>
                <h3 className="adv-title">{item.title}</h3>
              </div>
              <button className="adv-toggle">{openIndex === index ? 'HIDE' : 'READ'}</button>
            </div>
            
            <div className="adv-content" style={{ height: openIndex === index ? 'auto' : '0' }}>
              <div className="adv-content-inner">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
