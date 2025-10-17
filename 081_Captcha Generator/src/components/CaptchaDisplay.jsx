import React from 'react';
import '../styles/captcha.css';

const CaptchaDisplay = ({ captchaText, onRefresh }) => {
  return (
    <div className="captcha-display">
      <div className="captcha-canvas">
        {captchaText.split('').map((char, index) => (
          <span
            key={index}
            className="captcha-char"
            style={{
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
              fontSize: `${24 + Math.random() * 8}px`,
              color: `hsl(${Math.random() * 360}, 70%, 45%)`,
              marginLeft: index > 0 ? '2px' : '0'
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <button 
        type="button" 
        className="refresh-btn"
        onClick={onRefresh}
        aria-label="Refresh captcha"
      >
        🔄
      </button>
    </div>
  );
};

export default CaptchaDisplay;