
import React from 'react';
import { USER_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="d-flex align-items-center py-4 section-bg-dark border-top border-secondary mt-auto">
      <div className="container text-center text-muted-light mx-auto">
        <p className="small mb-1">
          &copy; {currentYear} {USER_NAME}. All rights reserved.
        </p>
        <p className="small mb-0">
          Crafted with <span className="text-danger">&hearts;</span> using React, TypeScript, and Bootstrap.
        </p>
      </div>
      <div className="align-items-center justify-content-center mt-4 w-50 ms-auto">
       {/* Arrow and Text Container */}
        <div className="d-flex flex-column p-3 ms-5 me-5 px-4 rounded-4 text-white fw-bold shadow-lg"
          style={{
            background: "linear-gradient(135deg, #0c1c2dff, #0b3642ff)",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "1.1rem",
            border: "2px solid rgba(255,255,255,0.3)",
          }}>
        <div>
          <span className='text-warning fs-5'> You can chat with me here</span>
        </div>
        <div>
          <small className="text-success">
          (Click the chat icon to start)
          </small>
        </div>
      </div> 
    </div>
    </footer>
  );
};

export default Footer;
