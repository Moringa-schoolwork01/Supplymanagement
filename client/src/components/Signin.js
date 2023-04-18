import React from 'react'


function Signin() {
  return (
    <div class="form-box">
<form class="form">
    <span class="title">Sign in</span>
    <span class="subtitle">Create a free account with your email.</span>
    <div class="form-container">
      <input type="text" class="input" placeholder="Full Name"/>
			<input type="email" class="input" placeholder="Email"/>
			<input type="password" class="input" placeholder="Password"/>
    </div>
    <button>Sign in</button>
    </form>
    
<div class="form-section">
  <p>Have an account? <a href="#">Log in</a> </p>
</div>
</div>
  )
}

export default Signin
