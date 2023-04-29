import React, { useState } from 'react';
import '../css/Addcustomer.css';
import { useNavigate } from 'react-router-dom';


function AddCustomer({ onAdd }) {
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = {
      full_name: fullName,
      contact: contact,
      email: email,
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
        setFullName('');
        setContact('');
        setEmail('');
        alert('Customer added successfully.')
        navigate('/customer')
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor='Full Name'>Full Name:</label>
          <input
            type='text'
            id='full_Name'
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='contact'>Contact:</label>
          <input
            type='text'
            id='contact'
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type='submit'>Add Customer</button>
      </form>
    </div>
  );
}

export default AddCustomer;
