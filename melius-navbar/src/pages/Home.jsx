import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Chatbot from '../components/Chatbot/Chatbot';
import './Home.css';

const WORDS = ['image', 'world', 'design', 'character', 'landscape', 'story'];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [blurClass, setBlurClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger the blur out animation
      setBlurClass('fade-out');
      
      // Wait for the blur to finish, then swap the word and fade back in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % WORDS.length);
        setBlurClass('fade-in');
      }, 600); // matches the 0.6s transition in CSS
      
    }, 2500); // Change the word every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      
      {/* Hidden SVG Filter for the Mosaic Censor Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <filter id="pixelate" x="-20%" y="-20%" width="140%" height="140%">
          {/* Create a 4x4 sample box */}
          <feFlood x="0" y="0" width="4" height="4" />
          {/* Space them by 8 pixels */}
          <feComposite width="8" height="8" />
          <feTile result="grid" />
          <feComposite in="SourceGraphic" in2="grid" operator="in" />
          {/* Dilate by 4 to form massive 8x8 mosaic blocks */}
          <feMorphology operator="dilate" radius="4" />
        </filter>
      </svg>

      <main className="home-main">
        <h1 className="home-title">
          Create any <span className={`animated-word ${blurClass}`}>{WORDS[index]}</span> you imagine
        </h1>
      </main>
      
      {/* Floating Chatbot Widget */}
      <Chatbot />
    </div>
  );
};

export default Home;
