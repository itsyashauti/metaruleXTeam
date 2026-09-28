import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Introduction from '../components/Introduction/Introduction';
import ClientTypes from '../components/ClientTypes/ClientTypes';
import Process from '../components/Process/Process';
import Capabilities from '../components/Capabilities/Capabilities';
import Testimonials from '../components/Testimonials/Testimonials';
import Statistics from '../components/Statistics/Statistics';
import Advantages from '../components/Advantages/Advantages';
import CTA from '../components/CTA/CTA';
import './Services.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      {/* Light Grey Section */}
      <Hero />
      <ClientTypes />
      <Process />
      
      {/* Lime Green Section (bg-green-100) */}
      <div className="lime-section">
        <Introduction />
        <Capabilities />
      </div>
      
      {/* Light Grey / White Section (bg-gray-100) */}
      <div className="white-section">
        <Testimonials />
        <Statistics />
      </div>
      
      {/* Dark Green Section (bg-green text-white) */}
      <Advantages />
      
      {/* Lime Green Section */}
      <CTA />
    </div>
  );
};

export default Services;
