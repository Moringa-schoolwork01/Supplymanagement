import React, { Fragment, useState } from "react";
import {Row,Col, Avatar, Card, Form, Input, Button, Typography, Alert, Spin } from 'antd';

// import "../css/login.css";
import { useNavigate } from 'react-router-dom';
import { EditOutlined, EllipsisOutlined, SettingOutlined,UserOutlined, LockOutlined  } from '@ant-design/icons';
// import { Form, Input, Button, Typography, Alert, Spin } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Meta } = Card;
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
    <>
    
    
    <Card
    style={{
      width: 900,
      top:"20vh",
      left:'20vw',
      background: '#fcfefe',
         }}
    // cover={
    //   <img
    //     alt="example"
    //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    //   />
    // }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  > 
  <Row>
            <Col span={14}> <img src="./reg.png" /></Col>
             <Col span={6}><Form
          name="login"
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
          // style={
          // {fontSize:'700px',
          // width:400,
          // height:1000,

          // }
          // }
        >
          <Title  className="title">User Login</Title>
          <Form.Item
            name="email"
            rules={[
              
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
            
          >
            <Input style= {
              {
                padding:15,
                width:300,
              }
            }prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
            <Input.Password style= {
              {
                padding:15,
                width:300,
              }
            }
            prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
          </Form.Item>
          {errorMessage && <Alert message={errorMessage} type="error" />}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit" loading={loading}>
              {loading ? <Spin /> : 'Log in'}
            </Button>
          </Form.Item>
        </Form>
        </Col>
        <Col span={4}></Col>
         </Row> 
    {/* <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    /> */}
  </Card>
    </>
  
    // <div className='landingpage'>
    //   <div className='landingcontent'>
    //     <Title level={2} className='signincont'>Welcome back !</Title>
    //     <Title level={3}>Input your credentials here</Title>
    //   </div>
    //   <div>
    //        <img className='loginimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRecroq9Fmqao54FgAtVCqFRC-014ctCH4ww&usqp=CAU' alt='img'></img>
    //     </div>
      
    //   <div>
    //     <Form
    //       name="login"
    //       onFinish={onFinish}
    //       initialValues={{
    //         remember: true,
    //       }}
    //     >
    //       <Title level={4} className="title">User Login</Title>
    //       <Form.Item
    //         name="email"
    //         rules={[
    //           {
    //             required: true,
    //             message: 'Please input your email!',
    //           },
    //         ]}
    //       >
    //         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
    //       </Form.Item>
    //       <Form.Item
    //         name="password"
    //         rules={[
    //           {
    //             required: true,
    //             message: 'Please input your password!',
    //           },
    //         ]}
    //       >
    //         <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
    //       </Form.Item>
    //       {errorMessage && <Alert message={errorMessage} type="error" />}
    //       <Form.Item>
    //         <Button type="primary" htmlType="submit" className="submit" loading={loading}>
    //           {loading ? <Spin /> : 'Log in'}
    //         </Button>
    //       </Form.Item>
    //     </Form>
        
    //   </div>
     

    // </div>

    
    
  );
};

export default Login;