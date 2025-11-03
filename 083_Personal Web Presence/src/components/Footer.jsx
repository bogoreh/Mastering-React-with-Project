import React from 'react';
import { personalData } from '../data';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 {personalData.name}. All rights reserved.</p>
          <div className="footer-links">
            <a href={personalData.socialLinks.github}>GitHub</a>
            <a href={personalData.socialLinks.linkedin}>LinkedIn</a>
            <a href={personalData.socialLinks.twitter}>Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;