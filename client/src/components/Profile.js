import React from 'react'

function Profile(props) {
  

  return (
    <div>
      PROFILE PAGE
      <h1>Welcome {props.newuser?.user}</h1>
      <button >Logout</button>
    </div>
  )
}

export default Profile
