
import React from 'react';
import type { Project } from '../types.js';
import { EyeIcon, GithubSquareIcon } from '../constants'; // Updated to import GithubSquareIcon

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-lg bg-dark text-light border-secondary project-card-hover" style={{transition: 'transform 0.3s ease-in-out'}}>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="card-img-top"
          style={{ height: '225px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h3 className="card-title h5 fw-semibold text-light-emphasis mb-3">{project.title}</h3>
          <p className="card-text text-muted-light small mb-4 flex-grow-1">{project.description}</p>
          
          <div className="mb-4">
            <h4 className="small fw-medium text-primary mb-2">Technologies Used:</h4>
            <div className="d-flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge badge-custom small">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-3 border-top border-secondary d-flex flex-wrap gap-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm d-inline-flex align-items-center"
              >
                <EyeIcon className="me-1" />
                Live Demo
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center text-light"
              >
                <GithubSquareIcon className="me-1" /> {/* Changed icon here */}
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
