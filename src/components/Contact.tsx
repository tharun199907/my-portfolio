
import React from 'react';
import { USER_EMAIL, USER_LINKEDIN_URL, USER_GITHUB_URL, GithubSquareIcon, LinkedInSquareIcon, MailIcon } from '../constants';
import "./Contact.css";
const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5 section-bg-dark">
      <div className="container text-center">
        <h2 className="display-5 fw-bold text-light-emphasis mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="fs-5 text-muted-light mb-5 col-lg-7 mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
        </p>
        
        <div className="mb-5">
           <a 
            href={`mailto:${USER_EMAIL}`} 
            className="btn btn-lg btn-outline-primary d-inline-flex align-items-center p-3"
          >
            <MailIcon className="me-2" />
            {USER_EMAIL}
          </a>
        </div>

        <div className="d-flex justify-content-center gap-4">
          <a
            href={USER_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-muted-light social-icon-hover"
            style={{transition: 'color 0.2s ease-in-out, transform 0.2s ease-in-out'}}
          >
            <LinkedInSquareIcon className='linkdin-git-icons'/> 
          </a>
          <a
            href={USER_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-muted-light social-icon-hover"
            style={{transition: 'color 0.2s ease-in-out, transform 0.2s ease-in-out'}}
          >
            <GithubSquareIcon className='linkdin-git-icons'/> 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
