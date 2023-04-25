import React, { useState } from 'react';
import '../css/Addcustomer.css';

function AddCustomer({ onAdd }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = {
      first_name: firstName,
      last_name: lastName,
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
        setFirstName('');
        setLastName('');
        setContact('');
        setEmail('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='first Name'>First Name:</label>
          <input
            type='text'
            id='first_Name'
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='Last Name'>Last Name:</label>
          <input
            type='text'
            id='last_Name'
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
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
