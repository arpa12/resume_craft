// src/components/Signup_Login/Signup.js
import React, { useState } from 'react';
import './SignupLogin.css';
import axios from 'axios';

const Signup = ({ onLoginClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/signup', {
        name,
        email,
        password,
      });

      setSuccess('User created successfully!');
      setError('');
      setName('');
      setEmail('');
      setPassword('');

      // Automatically trigger login modal after signup success
      onLoginClick(); // Show the login form
    } catch (error) {
      setError('User creation failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <h3>Create Your Account First</h3>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="cta-button">Sign Up</button>
      </form>
      <p className='footer'>
        Already have an account? 
        <a href="#" onClick={onLoginClick} className="link">Login</a>
      </p>
    </div>
  );
};

export default Signup;
