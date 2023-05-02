import React, { Fragment, useState } from "react";
import {Row,Col, Avatar, Card, Form, Input, Button, Typography, Alert, Spin } from 'antd';

// import "../css/login.css";
import { useNavigate } from 'react-router-dom';
import { EditOutlined, EllipsisOutlined, SettingOutlined,UserOutlined, LockOutlined  } from '@ant-design/icons';
// import { Form, Input, Button, Typography, Alert, Spin } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography;

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
    <>
    
    
    <Card
    style={{
      width: 950,
      height:500,
      top:"20vh",
      left:'30vw',
      background: '#fcfefe',
            // background: 'radial-gradient(328px at 2.9% 15%, rgb(191, 224, 251) 0%, rgb(232, 233, 251) 25.8%, rgb(252, 239, 250) 50.8%, rgb(234, 251, 251) 77.6%, rgb(240, 251, 244) 100.7%)',
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
            <Col span={16}> <img src='./lg.png'  /></Col>
             <Col span={14}><Form className="formmone" onFinish={handleSubmit}>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input style= {
              {
                padding:15,
                width:300,
              }} value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password style= {
              {
                padding:15,
                width:300,
              }
            } value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password Confirmation" name="password_confirmation" rules={[{ required: true, message: 'Please confirm your password!' }]}>
            <Input.Password style= {
              {
                padding:15,
                width:300,
              }
            } value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Register</Button>
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
    );
  };
  
  export default Signin;