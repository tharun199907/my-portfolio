import React from 'react';
import { USER_ABOUT_ME, USER_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5 section-bg-darker">
      <div className="container">
        <h2 className="display-5 fw-bold text-center text-light-emphasis mb-5">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-light fs-5">
              {USER_ABOUT_ME.map((paragraph, index) => (
                <p key={index} className={index > 0 ? "mt-3" : ""}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-5 text-center">
                <img 
                    src="https://res.cloudinary.com/doitrxzrs/image/upload/v1760683169/Gemini_Generated_Image_96i60h96i60h96i6_kezpxu.png" 
                    alt={`${USER_NAME} - Profile`}
                    className="img-fluid rounded-circle mx-auto shadow-lg border border-5 border-primary"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;