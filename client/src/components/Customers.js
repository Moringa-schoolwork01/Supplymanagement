import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import '../css/Customers.css';
import { Space, Table, Tag } from 'antd';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetch('/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error(error));
  }, []);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'full_name',
      key: 'full_name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tag color='geekblue' onClick={() => setSelectedCustomer(record)}><a>Update {record.name}</a></Tag>
          <Tag color='volcano'onClick={() => handleDelete(record)}><a>Delete{record.name}</a></Tag>
        </Space>
      ),
    },
  ];
  function handleDelete(customer) {
    console.log (customer)
    fetch(`/customers/${customer.id}`, { method: 'DELETE' })
      .then(() => {
        setCustomers(prevCustomers => prevCustomers.filter(p => p.id !== customer.id));
      })
      .catch(error => console.error(error));
  }
  
  function handleUpdate(updatedCustomer) {
    fetch(`/customers/${updatedCustomer.id}`, {
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
      <button className='btn2'>
        <Link to='Addcustomer'>Add new customer</Link>
      </button>
      <Outlet />
      <Table columns={columns} dataSource={customers} />

      {selectedCustomer && (
  <div>
    <h3>Update customer</h3>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(selectedCustomer);
    }}>

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
