import React from 'react';
import { personalInfo } from '../assets/data';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{personalInfo.about}</p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Email:</strong> {personalInfo.email}
              </div>
              <div className="detail-item">
                <strong>Phone:</strong> {personalInfo.phone}
              </div>
              <div className="detail-item">
                <strong>Location:</strong> {personalInfo.location}
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
        }

        .about-details {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .detail-item {
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 10px;
          border-left: 4px solid #667eea;
        }

        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .stat {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-stats {
            flex-direction: row;
            justify-content: space-around;
          }

          .stat {
            padding: 1.5rem 1rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .about-stats {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default About;