import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, Alert, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

function Login () {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false)
 
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    setLoading(true);
    //Post newuser with credentials
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((r) => r.json())
    .then((newuser) =>{
      console.log(newuser)
      // save the token to localStorage for future access
     localStorage.setItem("jwt", newuser.jwt);
     setLoading(false) //stop loading

     //shows alert with user details
     if (newuser.user) {
      setIsLoggedIn(true);
      alert(`Login successful! Welcome, ${newuser.user}!`);
      navigate('/home')
    } else {
      setErrorMessage('User does not exist.');
      alert('Login failed. User does not exist.')
    }
  })
  .catch(error => {
    console.error('Error:', error);
    setErrorMessage('An error occurred. Please try again later.');
    setLoading(false) //stop loading
  });
  };

  return (
    <div className='landingpage'>
      <div className='landingcontent'>
        <Title level={2} className='signincont'>Let's Get Started</Title>
        <Title level={3}>Input your credentials here</Title>
      </div>
      <div>
        <Form
          name="login"
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
        >
          <Title level={4} className="title">User Login</Title>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
          </Form.Item>
          {errorMessage && <Alert message={errorMessage} type="error" />}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit" loading={loading}>
              {loading ? <Spin /> : 'Log in'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
