
import React from 'react';
import { SKILLS_DATA } from '../constants';
import type { Skill } from '../types';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-5 section-bg-darker">
      <div className="container">
        <h2 className="display-5 fw-bold text-center text-light-emphasis mb-5">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4 justify-content-center">
          {SKILLS_DATA.map((skill: Skill) => (
            <div
              key={skill.id}
              className="col"
            >
              <div 
                className="bg-dark p-4 rounded shadow-sm text-center skill-card-hover"
                style={{transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out'}}
              >
                {skill.icon && <div className="mb-2 fs-2 text-primary">{skill.icon}</div>}
                <h3 className="h5 fw-medium text-light-emphasis">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
