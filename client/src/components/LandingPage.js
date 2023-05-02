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
           <img className='landingimage' src='https://static.vecteezy.com/system/resources/previews/003/590/705/original/scm-supply-chain-management-concept-with-icon-set-template-free-vector.jpg' alt='img'></img>
        </div>
     
    </div>
  )
}

export default LandingPage
