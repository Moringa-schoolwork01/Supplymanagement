import React, { useState, useEffect } from 'react'

function UpdateCustomer() {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);


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
    <div>
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
    </div>
  )
}

export default UpdateCustomer
