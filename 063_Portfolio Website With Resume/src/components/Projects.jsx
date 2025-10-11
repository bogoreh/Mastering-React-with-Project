import React from 'react';
import { projects } from '../assets/data';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <div className="project-number">0{project.id}</div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} className="project-link live" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .project-image {
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder {
          color: white;
          text-align: center;
        }

        .project-number {
          font-size: 4rem;
          font-weight: 700;
          opacity: 0.3;
        }

        .project-content {
          padding: 2rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .project-description {
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          background: #f8f9fa;
          color: #667eea;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid #e9ecef;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          padding: 0.8rem 1.5rem;
          border: 2px solid #667eea;
          color: #667eea;
          text-decoration: none;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
          flex: 1;
          text-align: center;
        }

        .project-link.live {
          background: #667eea;
          color: white;
        }

        .project-link:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
        }

        .project-link.live:hover {
          background: #5a6fd8;
          border-color: #5a6fd8;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;