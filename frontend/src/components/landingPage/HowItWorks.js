// src/components/HowItWorks.tsx
import React from 'react';
import { FaCheck, FaEdit, FaDownload } from 'react-icons/fa';
import './HowItWorks.css'; // Assuming your CSS is in this file

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <FaCheck size={50} className="step-icon" />
          <h3>Choose Template</h3>
          <p>Select from our library of professional templates.</p>
        </div>
        <div className="step">
          <FaEdit size={50} className="step-icon" />
          <h3>Enter Information</h3>
          <p>Fill out a form with your personal and professional details.</p>
        </div>
        <div className="step">
          <FaDownload size={50} className="step-icon" />
          <h3>Download CV</h3>
          <p>Generate and download your customized resume for free.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
