import React, { useState } from 'react'


function Signin(onLogin) {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const handleSubmit = (e) => {
    e.preventDefault()
    console.log("bombastic side eye")
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json(onLogin))
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
    </div>
    <button>SignUp</button>
  

    </form>
    
<div class="form-section">
  <p>Have an account? <a href="login">Sign in</a> </p>
</div>
</div>
  )
}

export default Signin
