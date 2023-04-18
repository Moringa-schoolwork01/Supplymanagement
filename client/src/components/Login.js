import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [notify, setNotify] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // // const [credentials, setCredentials] = useState({
  //   username: "",
  //   password: "",
  // });
  function notifyUser() {
    setNotify((notify) => !notify);
    setTimeout(endNotification, 1000);
  }

 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.token,
      },
      body: JSON.stringify({ username, password }),
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
    <div className="container-login">
      <div className="screen">
        <div className="screen__content">
          {notify ? <p className="alert-text">Login Successful</p> : null}
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              {error ? <p className="alert-text">{error.errors}</p> : null}
              <input
                type="text"
                name="username"
                className="login__input"
                placeholder="Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
           
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
              {/* <div className="button__text">
             <button  type="submit" className="button login__submit" onClick={handleLogout}>LOGOUT
             <i className="button__icon fas fa-chevron-right"></i>
             </button> 
             </div> */}
             <div className="button__text">
             <NavLink  className="button login__submit" to='/'>LOGOUT
             <i className="button__icon fas fa-chevron-right"></i>
             </NavLink> 
             </div> 
            <NavLink to="/sign-up" className="gotosignup__text">
              Sign Up
            </NavLink>
          </form>
        </div>
        {/* <div class="social-login">
            <h3>log in via</h3>
            <div class="social-icons">
              <p className="social-login__icon fab fa-instagram"></p>
              <p className="social-login__icon fab fa-facebook"></p>
              <p className="social-login__icon fab fa-twitter"></p>
            </div>
           </div>  */}
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
