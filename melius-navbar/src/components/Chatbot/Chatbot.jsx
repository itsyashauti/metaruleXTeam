import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chatbot-wrapper">
      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-title">
            <div className="chat-header-dot"></div>
            <span>metaruleX AI</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="chat-close-btn">&times;</button>
        </div>
        
        <div className="chat-body">
          <div className="chat-message bot">
            <p>Hello! I am metaruleX. How can I help you explore today?</p>
          </div>
          <div className="chat-message user">
            <p>What can you do?</p>
          </div>
          <div className="chat-message bot">
            <p>I can help you generate images, navigate the platform, or answer any questions you have about our features!</p>
          </div>
        </div>
        
        <div className="chat-input-area">
          <input type="text" placeholder="Type your message..." />
          <button className="chat-send-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Widget */}
      <div className="chatbot-widget">
        {/* Speech Bubble (hide when chat is open) */}
        {!isOpen && (
          <div className="chatbot-bubble">
            <span>Say "Hey metaruleX"<br />to explore</span>
            <svg className="spark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L12.5 8.5L19 10L12.5 11.5L11 18L9.5 11.5L3 10L9.5 8.5L11 2Z" fill="currentColor" />
            </svg>
          </div>
        )}

        {/* Controls Container */}
        <div className="chatbot-controls">
          {/* Main AI Button */}
          <button 
            className="chatbot-main-btn" 
            aria-label="Activate AI Assistant"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="chatbot-lens">
              <div className="chatbot-core-glow"></div>
            </div>
          </button>

          {/* Expand Button */}
          <button 
            className="chatbot-expand-btn" 
            aria-label="Expand Chat"
            onClick={() => setIsOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
