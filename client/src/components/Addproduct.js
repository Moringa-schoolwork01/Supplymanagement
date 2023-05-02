import React, { useState } from 'react';
import { Form, Input, Button, Upload, Image } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function AddProduct({ onAdd }) {
  const [form] = Form.useForm();
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [product_image, setProductImage] = useState('');

  const navigate = useNavigate();

  const onFinish = (values) => {
    // const newProduct = {
    //   ...values,
    //   product_image: productImage,
    // };
    const newProduct = new FormData()
    newProduct.append("code", code)
    newProduct.append("name", name)
    newProduct.append("price", price)
    newProduct.append("quantity", quantity)
    newProduct.append("product_image", product_image, "product_image")
console.log(newProduct)
    fetch('/products', {
      method: 'POST',
      body: newProduct
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log (data)
        onAdd(data);
        form.resetFields();
        setProductImage('');
        navigate('/');
      })
      .catch((error) => console.error(error));
  };

  // const handleImageChange = (info) => {
  //   if (info.file.status === 'done') {
  //     setProductImage(info.file.originFileObj);
  //   }
  // };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '80%', margin: '0 auto', marginLeft: '250%', marginTop: '40%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}></div>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item label="Code" onChange={(event) => setCode(event.target.value)} name="code" rules={[{ required: true }]}>
          <Input style={{ width: '200%' }} />
        
        </Form.Item>
        <Form.Item label="Name" onChange={(event) => setName(event.target.value)} name="name" rules={[{ required: true }]}>
          <Input style={{ width: '200%' }} />
        </Form.Item>
        <Form.Item label="Price" onChange={(event) => setPrice(event.target.value)} name="price" rules={[{ required: true }]}>
          <Input type="number" style={{ width: '200%' }} />
        </Form.Item>
        <Form.Item
          label="Quantity"
          onChange={(event) => setQuantity(event.target.value)}name="quantity"
          rules={[{ required: true }]}
        >
          <Input type="number" style={{ width: '200%' }} />
        </Form.Item>
        <Form.Item label="Image" onChange={(event) => setProductImage(event.target.files[0])}name="product_image" rules={[{ required: true }]}>
          <Input type="file" style={{ width: '200%' }} />
        </Form.Item>
        /
        {/* {productImage && (
          <Form.Item>
            <Image
              src={URL.createObjectURL(productImage)}
              alt="Product Image Preview"
              width={100}
            />
          </Form.Item>
        )} */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddProduct;
