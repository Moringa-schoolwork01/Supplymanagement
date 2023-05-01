import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
// import 'antd/dist/antd.css';

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  // Register new user
  const handleSubmit = (values) => {
    console.log("bombastic side eye");

    const newData ={
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation
    };
    console.log (newData);
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((r) => r.json())
      .then((newme) => {
        alert(`${newme.email} Registration successfuly!`);
        navigate('/login');
      });
  };

  return (
    <div className='landingpage'>
      <div className='landingcontent'>
        <h2 className='signincont'>Get A New Account</h2>
        <h3>Register a new account and get started</h3>
      </div>
      <div>
        <Form className="formone" onFinish={handleSubmit}>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password Confirmation" name="password_confirmation" rules={[{ required: true, message: 'Please confirm your password!' }]}>
            <Input.Password value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Register</Button>
          </Form.Item>
          <div className="form-section">
            <p>Have an account? <a href="login">Login</a></p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signin;
