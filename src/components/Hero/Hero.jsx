import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const textVariant = {
  hidden: { y: "100%" },
  visible: { y: "0%", transition: { ease: [0.33, 1, 0.68, 1], duration: 1 } }
};

const Hero = () => {
  return (
    <section className="hero container section-padding">
      <div className="hero-content">
        <div className="mask-container">
          <motion.h1 
            className="hero-title"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            SERVICES
          </motion.h1>
        </div>
        
        <div className="hero-bottom-border">
          <div className="mask-container-desc">
            <motion.h2 
              className="hero-subtitle"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 1, delay: 0.2 }}
            >
              Our work has helped clients secure <span className="underline">$400M+ in funding</span>, wow small and global stages, and shape how the world sees them.
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
