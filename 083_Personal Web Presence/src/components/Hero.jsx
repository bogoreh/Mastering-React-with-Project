import React from 'react';
import { personalData } from '../data';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm {personalData.name}</h1>
          <h2>{personalData.title}</h2>
          <p>{personalData.bio}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
            alt={personalData.name}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;