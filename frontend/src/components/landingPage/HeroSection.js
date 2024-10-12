import React from 'react';
import './HeroSection.css';

const HeroSection = ({ onSignupClick, onLoginClick }) => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>Create Your Resume in Minutes</h1>
        <p>Select a template, fill in your details, and download a polished resume instantly.</p>
        <div className='button-group'> {/* Added button-group div for spacing */}
          <button className='cta-button' onClick={onSignupClick}>Get Started</button>
          <button className='login-button' onClick={onLoginClick}>Login</button> {/* Changed to login-button for style */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
