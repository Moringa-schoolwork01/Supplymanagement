import React, { useState } from 'react';
import '../css/Addproduct.css';

function AddProduct({ onAdd }) {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [product_image, setProductImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      code: code,
      name: name,
      price: price,
      quantity: quantity,
      product_image: product_image,
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
        setCode('');
        setName('');
        setPrice('');
        setQuantity('');
        setProductImage('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='code'>Code:</label>
          <input
            type='text'
            id='code'
            value={code}
            onChange={(event) => setCode(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='price'>Price:</label>
          <input
            type='number'
            id='price'
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='quantity'>Quantity:</label>
          <input
            type='number'
            id='quantity'
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='product_image'>Product Image:</label>
          <input
            type='url'
            id='product_image'
            accept='jpg'
            value={product_image}
            onChange={(event) => setProductImage(event.target.value)}
            required
          />
        </div>
        {product_image && (
          <img src={product_image} alt={name} style={{ width: '100px' }} />
        )}
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
