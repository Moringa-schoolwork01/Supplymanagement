import React, { useState } from "react";
import "../css/login.css";
import Profile from "./Profile";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');
  const [newuser, setNewuser] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length === 0 || password.length === 0) {
      setError(true);
      return;
    }

    const newData = {
      email: email,
      password: password,
    };

    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((r) => r.json())
      .then((newuser) => {
        if (newuser.user) {
          setNewuser(newuser);
          setIsLoggedIn(true);
          alert(`Login successful! Welcome, ${newuser.user}!`);
          navigate('/home');
        } else {
          setErrorMessage('User does not exist.');
          alert('Login failed. User does not exist.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };

  return (
    <div className="form-box">
      <form className="form" onSubmit={handleSubmit}>
        <span className="title">User Login</span>
        <span className="subtitle">Welcome Back</span>
        <div className="form-container">
          <input
            type="email"
            className="input"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && email.length <= 0 ? (
            <label className="formlbel">Field can't be empty</label>
          ) : (
            ''
          )}
          <input
            type="password"
            className="input"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && password.length <= 0 ? (
            <label className="formlbel">Field can't be empty</label>
          ) : (
            ''
          )}
        </div>
        <button>Login</button>
      </form>
      {isLoggedIn && <Profile newuser={newuser} />}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
