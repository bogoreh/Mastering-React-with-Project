import React from 'react';
import './GlassCard.css';

const GlassCard = ({ title, content, icon }) => {
  return (
    <div className="glass-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
      <button className="glass-button">
        Learn More
      </button>
    </div>
  );
};

export default GlassCard;