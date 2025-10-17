
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';
import type{ Project } from '../types.js';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-5 section-bg-dark">
      <div className="container">
        <h2 className="display-5 fw-bold text-center text-light-emphasis mb-5">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {PROJECTS_DATA.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
