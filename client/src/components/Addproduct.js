import React, { useState } from 'react';
import { Form, Input, Button, Upload, Image } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function AddProduct({ onAdd }) {
  const [form] = Form.useForm();
  const [productImage, setProductImage] = useState('');

  const navigate = useNavigate();

  const onFinish = (values) => {
    const newProduct = {
      ...values,
      product_image: productImage,
    };
    fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        onAdd(data);
        form.resetFields();
        setProductImage('');
        navigate('/');
      })
      .catch((error) => console.error(error));
  };

  const handleImageChange = (info) => {
    if (info.file.status === 'done') {
      setProductImage(info.file.originFileObj);
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item label="Code" name="code" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Quantity" name="quantity" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Product Image"
        name="product_image"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList[0]}
        rules={[{ required: true }]}
      >
        <Upload
          accept="image/*"
          listType="picture"
          maxCount={1}
          beforeUpload={() => false}
          onChange={handleImageChange}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>
      {productImage && (
        <Form.Item>
          <Image
            src={URL.createObjectURL(productImage)}
            alt="Product Image Preview"
            width={100}
          />
        </Form.Item>
      )}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddProduct;
