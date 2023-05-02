import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import '../css/Addorder.css';

function AddOrder({ onAdd }) {
  const navigate = useNavigate();
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [supplier_name, setSupplierName] = useState('');
  const [buying_price, setBuyingPrice] = useState('');
  const [total_price, setTotalPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOrder = {
      product: product,
      quantity: quantity,
      supplier_name: supplier_name,
      buying_price: buying_price,
      total_price: total_price,
    };
    fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    })
      .then((response) => response.json())
      .then((data) => {
        onAdd(data);
        setProduct('');
        setQuantity('');
        setSupplierName('');
        setBuyingPrice('');
        setTotalPrice('');
        alert('Order was successful')
        navigate('/orders')
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor='product'>Product Name:</label>
          <input
            type='text'
            id='product'
            value={product}
            onChange={(event) => setProduct(event.target.value)}
            required
          />
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
          <label htmlFor='supplier_name'>Supplier Name:</label>
          <input
            type='text'
            id='supplier_name'
            value={supplier_name}
            onChange={(event) => setSupplierName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='buying_price'>Buying Price:</label>
          <input
            type='number'
            id='buying_price'
            value={buying_price}
            onChange={(event) => setBuyingPrice(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='total_price'>Total Price:</label>
          <input
            type='number'
            id='total_price'
            value={total_price}
            onChange={(event) => setTotalPrice(event.target.value)}
            required
          />
        </div>
        <button type='submit'>Add Order</button>
      </form>
    </div>
  );
}



export default AddOrder;