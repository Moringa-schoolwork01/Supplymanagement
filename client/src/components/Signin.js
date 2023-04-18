import React, { useState } from 'react';

function Signin() {
  const [isSignup, setIsSignup] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormToggle = (e) => {
    e.preventDefault();
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // Your sign-up functionality goes here
      console.log(`Full Name: ${fullName}, Email: ${email}, Password: ${password}`);
    } else {
      // Your login functionality goes here
      console.log(`Email: ${email}, Password: ${password}`);
    }
  };

  return (
    <div className="form-box">
      <form className="form">
        <span className="title">{isSignup ? 'Sign up' : 'Login'}</span>
        <span className="subtitle">{isSignup ? 'Create a free account with your email.' : 'Enter your email and password to sign in.'}</span>
        {isSignup && (
          <div className="form-container">
            <input type="text" className="input" placeholder="Full Name" value={fullName} onChange={handleFullNameChange} />
          </div>
        )}
        <div className="form-container">
          <input type="email" className="input" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input type="password" className="input" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={handleSubmit}>{isSignup ? 'Sign up' : 'Login'}</button>
      </form>
      <div className="form-section">
        <p>{isSignup ? 'Already have an account?' : "Don't have an account?"} <a href="#" onClick={handleFormToggle}>{isSignup ? 'Login' : 'Sign up'}</a></p>
      </div>
    </div>
  );
}

export default Signin;
