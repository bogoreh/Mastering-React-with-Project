import React from 'react';
import { experience, education } from '../assets/data';

const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-content">
          <div className="resume-section">
            <h3 className="resume-section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{exp.position}</h4>
                    <h5 className="timeline-company">{exp.company}</h5>
                    <span className="timeline-period">{exp.period}</span>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="timeline">
              {education.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <h5 className="timeline-company">{edu.institution}</h5>
                    <span className="timeline-period">{edu.period}</span>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-download">
          <a href="/resume.pdf" className="btn" download>
            Download Resume
          </a>
        </div>
      </div>

      <style jsx>{`
        .resume-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .resume-section-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #2c3e50;
          position: relative;
          padding-left: 1rem;
        }

        .resume-section-title::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        .timeline {
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #e9ecef;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
          padding-left: 3rem;
        }

        .timeline-marker {
          position: absolute;
          left: 8px;
          top: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: 3px solid white;
          box-shadow: 0 0 0 3px #667eea;
        }

        .timeline-content {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .timeline-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .timeline-company {
          font-size: 1rem;
          color: #667eea;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .timeline-period {
          display: inline-block;
          background: #f8f9fa;
          color: #666;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .timeline-description {
          color: #666;
          line-height: 1.6;
        }

        .resume-download {
          text-align: center;
        }

        @media (max-width: 768px) {
          .resume-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;