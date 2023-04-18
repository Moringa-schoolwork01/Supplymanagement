import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  return (
    <>
    <div className='homebody'>
      <div className='homeheader'>
      <h2 > Dashboard Overview</h2>
        <button onClick={() => navigate('Signin')}>
            Login
            <div class="arrow-wrapper">
                <div class="arrow"></div>
            </div>
        </button>
      </div>
       
        <div className='body1'>
        <div class="card">
           Sales
         </div>
         <div class="card">
           Customers
         </div>
         <div class="card">
            Products
         </div>
         <div class="card">
            Orders
         </div>
        </div>
        <div className='homecont'>
        <div className='body2'>
        Weekly Report
        </div>
        <div className='body3'>
        Top 5 Products        
        </div>
        </div>
        
    </div>
    </>

  )
}

export default Home
