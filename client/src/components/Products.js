import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import '../css/Products.css';
import { Space, Table, Tag } from 'antd';


function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('./products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);
  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Product Image',
      dataIndex: 'product_image',
      key: 'product_image',
      render: (image) => <img src={image} alt="Product" width="100" />,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tag color='geekblue' onClick={() => setSelectedProduct(record)}><a>Update </a></Tag>
          <Tag color='volcano'onClick={() => handleDelete(record)}><a>Delete</a></Tag>
        </Space>
      ),
    },
  ];
  function handleDelete(product) {
    fetch(`./products/${product.id}`, { method: 'DELETE' })
      .then(() => {
        setProducts(prevProducts => prevProducts.filter(p => p.id !== product.id));
      })
      .catch(error => console.error(error));
  }

  function handleUpdate(updatedProduct) {
    fetch(`/products/${updatedProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
      setProducts(prevProducts => {
        const updatedProducts = prevProducts.map(product => {
          if (product.id === updatedProduct.id) {
            return updatedProduct;
          } else {
            return product;
          }
        });
        return updatedProducts;
      });
      setSelectedProduct(null);
    })
    .catch(error => console.error(error));
  }
  
  return (
    <div className='prodcont'>
      <h3>Add your product here</h3>
      <button className='btn2'>
        <Link to='Addproduct'>Add new product</Link>
      </button>
      <Outlet />
      <Table columns={columns} dataSource={products} />
      {/* <table className='table'>
        <thead>
          <tr className='table-primary'>
            <th scope='col'>#</th>
            <th scope='col'>Code</th>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Product_Image</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <th scope='row'>{product.id}</th>
              <td>{product.code}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.product_image}</td>
              <td>
                <button
                  className='custom-btn btn-2'
                  onClick={() => setSelectedProduct(product)}
                >
                  Update
                </button>
                <button className='btnd' onClick={() => handleDelete(product)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {selectedProduct && (
  <div>
    <h3>Update Product</h3>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(selectedProduct);
    }}>
      <div className="form-group">
        <label htmlFor="product">Code</label>
        <input
          type="text"
          className="form-control"
          id="code"
          name="code"
          value={selectedProduct.code}
          onChange={(e) => setSelectedProduct({...selectedProduct, code: e.target.value})}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={selectedProduct.name}
          onChange={(e) => setSelectedProduct({...selectedProduct, name: e.target.value})}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          className="form-control"
          id="price"
          name="price"
          value={selectedProduct.price}
          onChange={(e) => setSelectedProduct({...selectedProduct, price: e.target.value})}
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          name="quantity"
          value={selectedProduct.quantity}
          onChange={(e) => setSelectedProduct({...selectedProduct, quantity: e.target.value})}
        />
      </div>
      <div className="form-group">
        <label htmlFor="product_image">ProductImage</label>
        <input
          type="url"
          className="form-control"
          id="product_image"
          name="product_image"
          value={selectedProduct.product_image}
          onChange={(e) => setSelectedProduct({...selectedProduct, product_image: e.target.value})}
        />
      </div>
      <button type="submit" className="btn btn-primary mr-2">Update</button>
      <button type="button" className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>Cancel</button>
    </form>
  </div>
)}

      
    </div>
  );
}

export default Products;
