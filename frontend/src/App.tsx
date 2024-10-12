// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import HeroSection from './components/landing page/HeroSection';
import HowItWorks from './components/landing page/HowItWorks';
import TemplatePreviews from './components/landing page/TemplatePeviews';
import Footer from './components/landing page/Footer';
import Signup from './components/Signup_Login/Signup';
import Login from './components/Signup_Login/Login';
import './components/Signup_Login/SignupLogin.css'; // Make sure to import the CSS for styling

function App() {
  // State to manage modal visibility
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Functions to open and close modals
  const openSignupModal = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false); // Close login modal if open
  };

  const closeSignupModal = () => {
    setIsSignupOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false); // Close signup modal if open
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <div className="App">
      <HeroSection onSignupClick={openSignupModal} onLoginClick={openLoginModal} />
      <div className="how-it-works-container">
        <HowItWorks />
      </div>

      <div className="main-container">
        <TemplatePreviews />
      </div>

      <Footer />

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="modal">
          <div className="modal-content zoom-in">
            <button className="close-modal" onClick={closeSignupModal}>&times;</button>
            <Signup onLoginClick={openLoginModal} /> {/* Pass the openLoginModal function */}
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal">
          <div className="modal-content zoom-in">
            <button className="close-modal" onClick={closeLoginModal}>&times;</button>
            <Login onSignupClick={openSignupModal} /> {/* Pass the openSignupModal function */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
