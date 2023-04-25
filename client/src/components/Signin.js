import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'


function Signin() {

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
        alert(`${newme.user} Registration successfuly!`)
      })
      // .then((user) => onLogin(user));
}


  return (
    <div class="form-box">
<form class="form" onSubmit={handleSubmit}>
    <span class="title"> register new user</span>
    <span class="subtitle">Hey am new</span>
    <div class="form-container">
			<input type="email" class="input" placeholder="Email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
			<input type="password" class="input" placeholder="Password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <input type="password" class="input" placeholder="confirm password" id='confirmpassword' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
    </div>
    <button>Signup</button>
  

    </form>
    
<div class="form-section">
  <p>Have an account? <a href="login">login</a> </p>
</div>
</div>
  )
}

export default Signin