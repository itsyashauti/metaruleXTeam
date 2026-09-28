import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState("default"); // default, pointer, view

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    const handleMouseOver = (e) => {
      const target = e.target;
      
      // If hovering over an image or specific viewable areas
      if (target.tagName.toLowerCase() === 'img' || target.closest('.process-visual') || target.closest('.testimonial-image')) {
        setCursorState("view");
      } 
      // If hovering over buttons, links, or clickable headers
      else if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a' || target.closest('a') || target.closest('.process-header') || target.closest('.adv-header') || target.classList.contains('btn-primary')) {
        setCursorState("pointer");
      } 
      else {
        setCursorState("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      backgroundColor: "#212121", // foreground
      mixBlendMode: "normal"
    },
    pointer: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      width: 60,
      height: 60,
      backgroundColor: "transparent",
      border: "1px solid #212121",
      mixBlendMode: "normal"
    },
    view: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "#cdea68", // accent color
      mixBlendMode: "normal",
      border: "none"
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={cursorState}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    >
      {cursorState === "view" && <span className="cursor-text">VIEW</span>}
    </motion.div>
  );
};

export default CustomCursor;
