import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Signin() {
  const navigate = useNavigate();
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmpassword, setConfirmPassword] = useState('')


// Register new user
const handleSubmit = (e) => {
    e.preventDefault()
    console.log("bombastic side eye")

    const newData ={
      email: email,
      password: password,
      password_confirmation: password
    }
   console.log (newData)
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((r) => r.json())
      .then((newme) => {
        alert(`${newme.email} Registration successfuly!`)
        navigate('/login')
      })
      // .then((user) => onLogin(user));
}


  return (
<div className='landingpage'>
      <div className='landingcontent'>
          <h2 className='signincont'>Get A New Account</h2>
          <h3>Register a new account and get started</h3>
        </div>
    <div>
      <form class="formone" onSubmit={handleSubmit}>
    <span class="title">Register New Account</span>
    <label for="email" class="label">Email</label>
    <input type="email" id="email" name="email" required=""  value={email} onChange={(e) => setEmail(e.target.value)} class="input"/>
    <label for="password" class="label">Password</label>
    <input type="password" id="password" name="password" required="" class="input" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <label for="password" class="label">Password Confirmation</label>
    <input type="password" id="password_confirmation" name="password_confirmation" required="" class="input" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
    <button type="submit" class="submit" >Register</button>
    <div class="form-section">
  <p>Have an account? <a href="login">login</a> </p>
 </div>
  </form>
  
    </div>
    </div>

  )
}

export default Signin


