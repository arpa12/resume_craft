// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/landingPage/HeroSection';
import HowItWorks from './components/landingPage/HowItWorks';
import TemplatePreviews from './components/landingPage/TemplatePeviews';
import Footer from './components/landingPage/Footer';
import Signup from './components/Signup_Login/Signup';
import Login from './components/Signup_Login/Login';
import Profile from './components/Profile/Profile'; // Import the Profile component
import './components/Signup_Login/SignupLogin.css';

function App() {
  // State to manage modal visibility
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);

  const openSignupModal = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const closeSignupModal = () => {
    setIsSignupOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <Router>
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
              <Signup onLoginClick={openLoginModal} />
            </div>
          </div>
        )}

        {/* Login Modal */}
        {isLoginOpen && (
          <div className="modal">
            <div className="modal-content zoom-in">
              <button className="close-modal" onClick={closeLoginModal}>&times;</button>
              <Login onSignupClick={openSignupModal} />
            </div>
          </div>
        )}

        {/* Define Routes */}
        <Routes>
          <Route path="/profile" element={<Profile />} />
          {/* You can define more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
