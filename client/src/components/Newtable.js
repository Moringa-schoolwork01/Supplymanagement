import { Space, Table, Tag } from 'antd';
import React, { useState, useEffect } from 'react';


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
        <Tag color='geekblue' onClick={() => setSelectedCustomer()}>Update {record.name}</Tag>
        <Tag color='volcano'onClick={() => handleDelete()}>Delete</Tag>
      </Space>
    ),
  },
];

const Newtable = () =>{
    const [customers, setCustomers] =useState([]);
    useEffect(() => {
        fetch('./customers')
          .then(response => response.json())
          .then(data => setCustomers(data))
          .catch(error => console.error(error));
      }, []);
      function setSelectedCustomer() {
        console.log('')
      }
      function handleDelete() {
        console.log('')
      }
    return(

 <Table columns={columns} dataSource={customers} />

    )
} 
export default Newtable;