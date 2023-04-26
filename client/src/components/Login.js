
import React, { useState } from "react";
import "../css/login.css";
import Profile from "./Profile";


function Login () {
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const [error, setError] = useState('');
const [newuser, setNewuser] = useState({});

 
// const handleLogin = () => {
//   navigate('/')
// }


  const handleSubmit = (e) => {
    e.preventDefault();
  
      console.log("ni kunoma mazee")
      if(email.length===0||password.length===0){
        setError(true)
      }
      const newData = {
        email: email,
        password: password
      }
      console.log(newData)
      fetch('/login', {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((r) => r.json())
      .then((newuser) =>{
        console.log(newuser)
        // save the token to localStorage for future access
       localStorage.setItem("jwt", newuser.jwt);
       //shows alert with user details
       if (newuser.user) {
        setNewuser(newuser);
        setIsLoggedIn(true);
        alert(`Login successful! Welcome, ${newuser.user}!`);
      } else {
        setErrorMessage('User does not exist.');
        alert('Login failed. User does not exist.')
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    });
      
     

     
  }
  return (

  //   <>
  //   {isLoggedIn ? (
  //     <Profile newuser={isLoggedIn} />
  //   ) : (
  //     <div class="form-box">
  //       <form class="form" onSubmit={handleSubmit}>
  //         <span class="title"> User Login</span>
  //         <span class="subtitle">Welcome Back</span>
  //         <div class="form-container">
  //           <input
  //             type="email"
  //             class="input"
  //             placeholder="Email"
  //             id="email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //           {error && email.length <= 0 ? (
  //             <label className="formlbel">Field cant be empty</label>
  //           ) : (
  //             ""
  //           )}
  //           <input
  //             type="password"
  //             class="input"
  //             placeholder="Password"
  //             id="password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //           />
  //           {error && password.length <= 0 ? (
  //             <label className="formlbel">Field cant be empty</label>
  //           ) : (
  //             ""
  //           )}
  //         </div>
  //         <button>Login</button>
  //       </form>
  //       {errorMessage && <p>{errorMessage}</p>}
  //     </div>
  //   )}
  // </>
    <div class="form-box">
    <form class="form" onSubmit={handleSubmit}>
        <span class="title"> User Login</span>
        <span class="subtitle">Welcome Back</span>
        <div class="form-container">
          <input type="email" class="input" placeholder="Email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          {error&&email.length<=0?
          <label className="formlbel">Field cant be empty</label>:""}
          <input type="password" class="input" placeholder="Password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          {error&&password.length<=0?
          <label className="formlbel">Field cant be empty</label>:""}

        </div>
        <button>Login</button>
        </form>
        {isLoggedIn && <Profile newuser={newuser} />}
      {errorMessage && <p>{errorMessage}</p>}
    </div>

  );
};

export default Login;