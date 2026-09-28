import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Process.css';

const processData = [
  {
    id: "01",
    phase: "Discovery",
    title: "We immerse ourselves in your world",
    description: "We start by understanding your business, your audience, and your goals. This deep dive ensures every design decision is strategic.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "02",
    phase: "Storytelling",
    title: "Crafting the narrative arc",
    description: "We structure your content into a compelling story. Data meets emotion to keep your audience engaged from start to finish.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "03",
    phase: "Design",
    title: "Visualizing the vision",
    description: "Our designers bring the story to life with custom illustrations, sophisticated typography, and premium layouts.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "04",
    phase: "Testing & Optimization",
    title: "Refining the experience",
    description: "We test across devices and scenarios, refining animations and transitions to ensure a flawless delivery.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "05",
    phase: "Delivery",
    title: "The final handoff",
    description: "You receive fully editable files, fonts, and assets, along with guidelines on how to present effectively.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
  }
];

const ProcessItem = ({ item, isOpen, onClick }) => {
  return (
    <div className={`process-item ${isOpen ? 'open' : ''}`}>
      <div className="process-header" onClick={onClick}>
        <div className="process-meta">
          <span className="process-num">PHASE {item.id}</span>
          <span className="process-phase">{item.phase}</span>
        </div>
        <button className="process-toggle" aria-expanded={isOpen}>
          {isOpen ? 'HIDE' : 'READ'}
        </button>
      </div>
      
      <div className="process-content" style={{ height: isOpen ? 'auto' : '0' }}>
        <div className="process-content-inner">
          <div className="process-text">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div className="process-visual">
            <img src={item.image} alt={item.phase} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default
  const [ref, isVisible] = useIntersectionObserver();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="process-section container section-padding" ref={ref}>
      <h2 className={`section-title reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
        Holistic Process
      </h2>
      <div className="process-list">
        {processData.map((item, index) => (
          <ProcessItem 
            key={item.id}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Process;
