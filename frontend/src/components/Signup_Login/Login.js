// src/components/Signup_Login/Login.js
import React, { useState } from 'react';
import './SignupLogin.css'; // Import the unified CSS file
import { useNavigate } from 'react-router-dom';

const Login = ({ onSignupClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleSignupClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    onSignupClick(); // Call the signup click handler
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token in local storage
        localStorage.setItem('token', data.token);
        // Redirect to the profile page
        navigate('/profile');
      } else {
        setError(data.message); // Set error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>} {/* Display error message */}
        <button type="submit" className="cta-button">Login</button>
      </form>
      <p className='footer'>
        If you have no account then 
        <a href="#" onClick={handleSignupClick} className="link"> Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
