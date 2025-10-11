import React from 'react';
import { personalInfo } from '../assets/data';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">{personalInfo.name}</span>
            </h1>
            <h2 className="hero-subtitle">{personalInfo.title}</h2>
            <p className="hero-description">
              I create amazing digital experiences with modern technologies
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="floating-elements">
                <div className="floating-element element-1">⚡</div>
                <div className="floating-element element-2">🚀</div>
                <div className="floating-element element-3">💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding-top: 80px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .highlight {
          background: linear-gradient(45deg, #ffd89b, #19547b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .hero-description {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          opacity: 0.8;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-placeholder {
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .image-placeholder::before {
          content: '👨‍💻';
          font-size: 8rem;
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-element {
          position: absolute;
          font-size: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }

        .element-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .element-2 {
          top: 10%;
          right: 10%;
          animation-delay: 1s;
        }

        .element-3 {
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .image-placeholder {
            width: 250px;
            height: 250px;
          }

          .image-placeholder::before {
            font-size: 6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;