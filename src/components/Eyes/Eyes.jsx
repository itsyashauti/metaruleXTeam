import React, { useEffect, useState, useRef } from 'react';
import './Eyes.css';

const Eyes = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getTransform = (ref) => {
    if (!ref.current) return 'translate(-50%, -50%)';
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = mousePos.x - centerX;
    const deltaY = mousePos.y - centerY;
    const angle = Math.atan2(deltaY, deltaX);
    
    // max distance the pupil can move
    const maxDist = rect.width / 4; 
    const dist = Math.min(maxDist, Math.hypot(deltaX, deltaY) / 5);
    
    const x = dist * Math.cos(angle);
    const y = dist * Math.sin(angle);
    
    return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  };

  return (
    <div className="eyes-wrapper">
      <div className="eye-outer" ref={eye1Ref}>
        <div className="eye-inner" style={{ transform: getTransform(eye1Ref) }}>
          <div className="eye-glare"></div>
        </div>
      </div>
      <div className="eye-outer" ref={eye2Ref}>
        <div className="eye-inner" style={{ transform: getTransform(eye2Ref) }}>
          <div className="eye-glare"></div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
