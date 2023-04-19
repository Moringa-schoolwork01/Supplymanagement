import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'


function Signin(onLogin) {


    const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
}


  return (
    <div class="form-box">
<form class="form" onSubmit={handleSubmit}>
    <span class="title"> User Login</span>
    <span class="subtitle">Remember Me?</span>
    <div class="form-container">
			<input type="email" class="input" placeholder="Email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
			<input type="password" class="input" placeholder="Password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <button>Login</button>
  

    </form>
    
<div class="form-section">
  <p>Don't have an account? <a><Link to="login">Sign Up</Link></a> </p>
</div>
<Outlet />

</div>
  )
}

export default Signin
