import React from 'react'

function Profile(props) {

  const handleLogout = (e) =>{
    e.preventDefault()
    // localStorage.removeItem("jwt", newuser.jwt);

  }
  return (
    <div>
      PROFILE PAGE
      <h1>Welcome {props.newuser.user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
