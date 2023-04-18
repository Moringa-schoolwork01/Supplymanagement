<<<<<<< HEAD
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
=======
import React, { useState } from 'react'


function Signin() {

    const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const handleSubmit = (e) => {
    e.preventDefault()
    const userData = { name, email, password}

    console.log(userData)
}

  return (
    <div class="form-box">
<form class="form" onSubmit={handleSubmit}>
    <span class="title"> User Login</span>
    <span class="subtitle">Remember Me?</span>
    <div class="form-container">
      <input type="text" class="input" placeholder="Full Name"id='name' value={name} onChange={(e) => setName(e.target.value)}/>
			<input type="email" class="input" placeholder="Email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
			<input type="password" class="input" placeholder="Password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <button>Login</button>
  

    </form>
    
<div class="form-section">
  <p>Have an account? <a href="#">Sign in</a> </p>
</div>
</div>
  )
}

export default Signin
>>>>>>> 5bb57d654522c180a37fa1fc33d42f92a06758d8
