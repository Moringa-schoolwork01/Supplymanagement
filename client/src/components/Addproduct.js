import React, { useState } from 'react';
import '../css/Addproduct.css';

function AddProduct({ onAdd }) {
  const [product, setProduct] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = {
      product: product,
      code: code,
      name: name,
      price: price,
    };
    fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCustomer),
    })
      .then((response) => response.json())
      .then((data) => {
        onAdd(data);
        setProduct('');
        setCode('');
        setName('');
        setPrice('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='product'>Product:</label>
          <input
            type='text'
            id='product'
            value={product}
            onChange={(event) => setProduct(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='code'>code:</label>
          <input
            type='text'
            id='code'
            value={code}
            onChange={(event) => setCode(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='name'>name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='price'>Product Price:</label>
          <input
            type='number'
            id='price'
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </div>
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
}



export default AddProduct;
