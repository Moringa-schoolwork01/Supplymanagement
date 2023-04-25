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
    setCustomers(prevCustomers => prevCustomers.filter(p => p.id !== customer.id));
  }

  function handleUpdate(updatedCustomer) {
    setCustomers(prevCustomers => {
      const updatedCustomers = prevCustomers.map(customer => {
        if (customer.id === updatedCustomer.id) {
          return updatedCustomer;
        } else {
          return customer;
        }
      });
      return updatedCustomers;
    });
    setSelectedCustomer(null);
  }
  
  return (
    <div className='custcont'>
      <h3>Add your customer</h3>
      <button className='btn2'>
        <Link to='Addcustomer'>Add new customer</Link>
      </button>
      <Outlet />
      <table className='table'>
        <thead>
          <tr className='table-primary'>
            <th scope='col'>#</th>
            <th scope='col'>first_name</th>
            <th scope='col'>last_name</th>
            <th scope='col'>contact</th>
            <th scope='col'>email</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <th scope='row'>{customer.id}</th>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.contact}</td>
              <td>{customer.email}</td>
              <td>
                <button
                  className='custom-btn btn-2'
                  onClick={() => setSelectedCustomer(customer)}
                >
                  Update
                </button>
                <button className='btnd' onClick={() => handleDelete(customer)}>
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
      <div className="form-group">
        <label htmlFor="customer">customer</label>
        <input
          type="text"
          className="form-control"
          id="customer"
          name="customer"
          value={selectedCustomer.customer}
          onChange={(e) => setSelectedCustomer({...selectedCustomer, customer: e.target.value})}
        />
      </div>
      <div className="form-group">
        <label htmlFor="first_name">first_name</label>
        <input
          type="text"
          className="form-control"
          id="first_name"
          name="first_name"
          value={selectedCustomer.first_name}
          onChange={(e) => setSelectedCustomer({...selectedCustomer, first_name: e.target.value})}
        />
      </div>
      <div className="form-group">
        <label htmlFor="last_name">last_name</label>
        <input
          type="text"
          className="form-control"
          id="last_name"
          name="last_name"
          value={selectedCustomer.last_name}
          onChange={(e) => setSelectedCustomer({...selectedCustomer, last_name: e.target.value})}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          className="form-control"
          id="contact"
          name="contact"
          value={selectedCustomer.contact}
          onChange={(e) => setSelectedCustomer({...selectedCustomer, contact: e.target.value})}
        />
      </div>
      <div className="form-group">
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
      <button type="submit" className="btn btn-primary mr-2">Update</button>
      <button type="button" className="btn btn-secondary" onClick={() => setSelectedCustomer(null)}>Cancel</button>
    </form>
  </div>
)}

      
    </div>
  );
}

export default Customers;
