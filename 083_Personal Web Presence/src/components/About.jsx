import React from 'react';
import { personalData } from '../data';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with expertise in modern web technologies. 
              I love creating efficient, scalable solutions and continuously learning 
              new technologies to stay at the forefront of web development.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects, 
              writing technical blogs, or exploring new frameworks and tools.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Location:</strong> {personalData.location}
              </div>
              <div className="detail-item">
                <strong>Email:</strong> {personalData.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;