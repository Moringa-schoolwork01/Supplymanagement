import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddCustomer({ onAdd }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const newCustomer = {
      full_name: values.full_name,
      contact: values.contact,
      email: values.email,
    };
    fetch('/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCustomer),
    })
      .then((response) => response.json())
      .then((data) => {
        onAdd(data);
        form.resetFields();
        alert('Customer added successfully.');
        navigate('/customer');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 150 }}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/086/602/small/warehouse-workers-check-quantity-and-delivery-of-products-from-customers-purchase-orders-to-deliver-goods-to-the-correct-location-free-vector.jpg" alt="Warehouse workers" style={{ height: '80%', marginRight: 20 }} />
        <Form layout="vertical" form={form} onFinish={handleSubmit} style={{ width: 400 }}>
          <Form.Item
            label="Full Name"
            name="full_name"
            rules={[{ required: true, message: 'Please enter a full name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contact"
            name="contact"
            rules={[{ required: true, message: 'Please enter a contact number' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter an email address' }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Customer
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddCustomer;
