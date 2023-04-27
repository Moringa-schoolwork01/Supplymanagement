import React from 'react'
import { useNavigate } from 'react-router-dom';



function LandingPage() {
  const navigate = useNavigate();


  return (
    <div className='landingpage'>
        <div className='landingcontent'>
        <h1>Welcome</h1>
      <p>Wakurugenzi P.O.S</p>
      <button className='muslimin'  onClick={() => navigate('Signin')}>Register</button>
      <button className='muslimin'  onClick={() => navigate('Login')}>Login</button>
        </div>
        <div>
           <img className='landingimage' src='https://images.unsplash.com/photo-1602665478334-f8c4fd62ede4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='img'></img>
        </div>
     
    </div>
  )
}

export default LandingPage
