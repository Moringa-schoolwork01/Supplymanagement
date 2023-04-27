import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/Customers.css';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetch('./customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error(error));
  }, []);

  function handleDelete(customer) {
    fetch(`./customers/${customer.id}`, { method: 'DELETE' })
      .then(() => {
        setCustomers(prevCustomers => prevCustomers.filter(p => p.id !== customer.id));
      })
      .catch(error => console.error(error));
  }
  
  function handleUpdate(updatedCustomer) {
    fetch(`./customers/${updatedCustomer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedCustomer)
    })
    .then(response => response.json())
    .then(data => {
      setCustomers(prevCustomers => {
        const updatedCustomers = prevCustomers.map(customer => {
          if (customer.id === updatedCustomer.id) {
            return data;
          } else {
            return customer;
          }
        });
        return updatedCustomers;
      });
      setSelectedCustomer(null);
    })
    .catch(error => console.error(error));
  }
  
  
  
  return (
    <div className='custcont'>
      <h3>Add your customer</h3>
      <button className='btn5'>
        <Link to='Addcustomer'>Add new customer</Link>
      </button>
      <Outlet />
      <table className='tableC'>
        <thead>
          <tr className='table-primaryC'>
            <th scope='col'>#</th>
            {/* <th scope='col'>first_name</th> */}
            <th scope='col'>full_name</th>
            <th scope='col'>contact</th>
            <th scope='col'>email</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <th scope='row'>{customer.id}</th>
              {/* <td>{customer.first_name}</td> */}
              <td>{customer.full_name}</td>
              <td>{customer.contact}</td>
              <td>{customer.email}</td>
              <td>
                <button
                  className='custom-btnc btn-C'
                  onClick={() => setSelectedCustomer(customer)}
                >
                  Update
                </button>
                <button className='btnc' onClick={() => handleDelete(customer)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCustomer && (
  <div>
    <h3>Update customer</h3>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(selectedCustomer);
    }}>
      {/* <div className="form-groupc">
        <label htmlFor="customer">customer</label>
        <input
          type="text"
          className="form-control"
          id="customer"
          name="customer"
          value={selectedCustomer.customer}
          onChange={(e) => setSelectedCustomer({...selectedCustomer, customer: e.target.value})}
        />
      </div> */}
      {/* <div className="form-groupc">
        <label htmlFor="first_name">first_name</label>
        <input
          type="text"
          className="form-control"
          id="first_name"
          name="first_name"
          value={selectedCustomer.first_name}
          onChange={(e) => setSelectedCustomer({...selectedCustomer, first_name: e.target.value})}
        />
      </div> */}
      <div className="form-groupc">
        <label htmlFor="full_name">full_name</label>
        <input
          type="text"
          className="form-control"
          id="full_name"
          name="full_name"
          value={selectedCustomer.full_name}
          onChange={(e) => setSelectedCustomer({...selectedCustomer, full_name: e.target.value})}
        />
      </div>
      <div className="form-groupc">
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          className="form-controlc"
          id="contact"
          name="contact"
          value={selectedCustomer.contact}
          onChange={(e) => setSelectedCustomer({...selectedCustomer, contact: e.target.value})}
        />
      </div>
      <div className="form-groupc">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={selectedCustomer.email}
          onChange={(e) => setSelectedCustomer({...selectedCustomer, email: e.target.value})}
        />
      </div>
      <button type="submit" className="btn btn-primary mr-2c">Update</button>
      <button type="button" className="btn btn-secondaryc" onClick={() => setSelectedCustomer(null)}>Cancel</button>
    </form>
  </div>
)}

      
    </div>
  );
}

export default Customers;
