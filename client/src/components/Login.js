import React, { useState } from "react";
import "../css/login.css";

function Login (onRegister) {

  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(false);

 

  const handleSubmit = (e) => {
    e.preventDefault();
  
      console.log("ni kunoma mazee")
      if(email.length===0||password.length===0){
        setError(true)
      }
      const newData = {
        email: email,
        password_digest: password
      }
      console.log(newData)
      fetch('/login', {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((r) => r.json(onRegister))
 
   
  // };    
      // if (res.ok) {
      //   res.json().then((user) => {
      //     notifyUser();
      //     localStorage.setItem("token", user.jwt);
      //     localStorage.setItem("user", `${user.user.id}`);
      //   });
      // } else {
      //   res.json().then((error) => setError(error));
      // }
 

  // const handleLogout = useCallback(() => {
  //   localStorage.removeItem('token');
 
  // }, []);

  // function endNotification() {
  //   setNotify((notify) => !notify);
  //   navigate("/dashboard");
  }


  return (

    <div class="form-box">
    <form class="form" onSubmit={handleSubmit}>
        <span class="title"> User Login</span>
        <span class="subtitle">Welcome Back</span>
        <div class="form-container">
          <input type="email" class="input" placeholder="Email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          {error&&email.length<=0?
          <label className="formlbel">Field cant be empty</label>:""}
          <input type="password" class="input" placeholder="Password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          {error&&password.length<=0?
          <label className="formlbel">Field cant be empty</label>:""}

        </div>
        <button >Login</button>
        </form>
    </div>

  );
};

export default Login;
