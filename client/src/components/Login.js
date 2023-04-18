import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [notify, setNotify] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState('')

 
  function notifyUser() {

    setNotify((notify) => !notify);
    setTimeout(endNotification, 1000);
  }



  
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.token,
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          notifyUser();
          localStorage.setItem("token", user.jwt);
          localStorage.setItem("user", `${user.user.id}`);
        });
      } else {
        res.json().then((error) => setError(error));
      }
    });
  };

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
 
  }, []);

  function endNotification() {
    setNotify((notify) => !notify);
    navigate("/dashboard");
  }
  return (
    <div class="form-box">
    <form class="form" onSubmit={handleSubmit}>
        <span class="title"> Sign Up</span>
        <span class="subtitle">Remember Me?</span>
        <div class="form-container">
        <input type="text" class="input" placeholder="Full Name"id='name' value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" class="input" placeholder="Email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" class="input" placeholder="Password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button>SignUp</button>
      
    
        </form>
        
    
    </div>
      )
};

export default Login;
