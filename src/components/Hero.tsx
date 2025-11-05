
import React from 'react';
import { USER_NAME, USER_PROFESSION, USER_TAGLINE } from '../constants.jsx';
import "./Hero.css";
const Hero: React.FC = () => {

  const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetId = href.substring(1); // Remove '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-vh-100 d-flex align-items-center justify-content-center text-center px-3 hero-gradient"
    >
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-3 fw-bold text-light-emphasis">
            Hi, I'm <span className="text-primary">{USER_NAME}</span>
          </h1>
          <p className="mt-4 fs-4 fw-bold text-animation">
            {USER_PROFESSION}
          </p>
          <p className="mt-3 fs-5 text-muted-light lead">
            {USER_TAGLINE}
          </p>
          <div className="mt-5">
            <a
              href="#projects"
              onClick={(e) => handleScrollToSection(e, '#projects')}
              className="btn btn-primary btn-lg px-4 py-2 me-sm-3 mb-3 mb-sm-0 shadow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="btn btn-outline-primary btn-lg px-4 py-2 shadow"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;