import React from 'react';
import { personalInfo } from '../assets/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>{personalInfo.name}</h3>
            <p>Full Stack Developer creating amazing digital experiences</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-social">
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={personalInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #2c3e50;
          color: white;
          padding: 3rem 0 1rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-info h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-info p {
          color: #bdc3c7;
          line-height: 1.6;
        }

        .footer-links,
        .footer-social {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-links a,
        .footer-social a {
          color: #bdc3c7;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover,
        .footer-social a:hover {
          color: #667eea;
        }

        .footer-bottom {
          border-top: 1px solid #34495e;
          padding-top: 2rem;
          text-align: center;
          color: #bdc3c7;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .footer-links,
          .footer-social {
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;