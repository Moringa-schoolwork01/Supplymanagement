import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import '../css/Orders.css';
import { Space, Table, Tag } from 'antd';


function Orders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    fetch('/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error(error));
  }, []);
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'product_name',
      key: 'product_name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'SupplierName',
      dataIndex: 'supplier_name',
      key: 'supplier_name',
    },
    {
      title: 'BuyingPrice',
      dataIndex: 'buying_price',
      key: 'buying_price',
    },
    {
      title: 'TotalPrice',
      dataIndex: 'total_price',
      key: 'total_price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tag color='geekblue' onClick={() => setSelectedOrder(record)}><a>Update </a></Tag>
          <Tag color='volcano'onClick={() => handleDelete(record)}><a>Delete</a></Tag>
        </Space>
      ),
    },
  ];
  function handleDelete(order) {
    fetch(`/orders/${order.id}`, { method: 'DELETE' })
      .then(() => {
        setOrders(prevOrders => prevOrders.filter(o => o.id !== order.id));
        setStatusMessage('Order deleted successfully');
      })
      .catch(error => console.error(error));
  }

  function handleUpdate(updatedOrder) {
    console.log(updatedOrder.id)
    fetch(`/orders/${updatedOrder.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedOrder)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update order');
      }
      setOrders(prevOrders => {
        const updatedOrders = prevOrders.map(order => {
          if (order.id === updatedOrder.id) {
            return updatedOrder;
          } else {
            return order;
          }
        });
        return updatedOrders;
      });
      setSelectedOrder(null);
      setUpdateSuccess(true); // Set updateSuccess to true
    })
    .catch(error => console.error(error));
  }
  return (
    <div className='prodconta'>
      {statusMessage && <div className="alert alert-success">{statusMessage}</div>}
      <h3>Add your order here</h3>
      <button className='btn2'>
        <Link to='AddOrder'>Add new order</Link>
      </button>
      <Outlet />
      <Table columns={columns} dataSource={orders} />
      {/* <table className='table'>
        <thead>
          <tr className='table-primary'>
            <th scope='col'>#</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Supplier name</th>
            <th scope='col'>Buying price</th>
            <th scope='col'>Total price</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <th scope='row'>{order.id}</th>
              <td>{order.quantity}</td>
              <td>{order.supplier_name}</td>
              <td>{order.buying_price}</td>
              <td>{order.total_price}</td>
              <td>
                <button
                  className='custom-btn btn-2'
                  onClick={() => setSelectedOrder(order)}
                >
                  Update
                </button>
                <button className='btnd' onClick={() => handleDelete(order)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {selectedOrder && (
        <div>
   <h3>Update Order</h3>
<form onSubmit={(e) => {
  e.preventDefault();
  handleUpdate(selectedOrder);
}}>
  <div className="form-group">
    <label htmlFor="order_quantity">Quantity</label>
    <input
      type="text"
      className="form-control"
      id="order_quantity"
      name="order_quantity"
      value={selectedOrder.quantity}
      onChange={(e) => setSelectedOrder({...selectedOrder, quantity: e.target.value})}
    />
  </div>
  <div className="form-group">
    <label htmlFor="supplier_name">Supplier Name</label>
    <input
      type="text"
      className="form-control"
      id="supplier_name"
      name="supplier_name"
      value={selectedOrder.supplier_name}
      onChange={(e) => setSelectedOrder({...selectedOrder, supplier_name: e.target.value})}
    />
  </div>
  <div className="form-group">
    <label htmlFor="buying_price">Buying price</label>
    <input
      type="text"
      className="form-control"
      id="buying_price"
      name="buying_price"
      value={selectedOrder.buying_price}
      onChange={(e) => setSelectedOrder({...selectedOrder, buying_price: e.target.value})}
    />
  </div>
  <div className="form-group">
    <label htmlFor="total_price">Total Price</label>
    <input
      type="text"
      className="form-control"
      id="buying_price"
      name="buying_price"
      value={selectedOrder.buying_price}
      onChange={(e) => setSelectedOrder({...selectedOrder, buying_price: e.target.value})}
    />
  </div>
  <button type="submit" className="btn btn-primary mr-2">Update</button>
  <button type="button" className="btn btn-secondary" onClick={() => setSelectedOrder(null)}>Cancel</button>
</form>
</div>
)}

      
    </div>
  );
}

export default Orders;