import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from 'react-router-dom';



function Login () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const [error, setError] = useState('');
const [loading, setLoading] = useState(false)
 
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
      //Console the new data creted
      console.log(newData)
      setLoading(true) //Set loading before sending API request
      //Post newuser with credentials
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
       setLoading(false) //stop loading

       //shows alert with user details
       if (newuser.user) {
        setIsLoggedIn(true);
        alert(`Login successful! Welcome, ${newuser.user}!`);
        navigate('/home')
      } else {
        setErrorMessage('User does not exist.');
        alert('Login failed. User does not exist.')
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setLoading(false) //stop loading
    });
      
     

     
  }
  return (
<div className='landingpage'>

       <div className='landingcontent'>
          <h2 className='signincont'>Lets Get Started</h2>
          <h3>Input your credentials here</h3>
        </div>
    <div>
     <form class="formone" onSubmit={handleSubmit}>
    <span class="title">User Login</span>
    <label for="email" class="label">Email</label>
    <input type="email" id="email" name="email" required=""  value={email} onChange={(e) => setEmail(e.target.value)} class="input"/>
    {error&&email.length<=0?
     <label className="formlbel">Field cant be empty</label>:""}
    <label for="password" class="label">Password</label>
    <input type="password" id="password" name="password" required="" class="input" value={password} onChange={(e) => setPassword(e.target.value)}/>
    {error&&password.length<=0?
     <label className="formlbel">Field cant be empty</label>:""}
    <button type="submit" class="submit">{loading ? <>Loading...</> : <>Login</>}</button>
  </form>
    </div>
    </div>

  );
};

export default Login;

