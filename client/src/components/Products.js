import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('./products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  function handleDelete(product) {
    setProducts(prevProducts => prevProducts.filter(p => p.id !== product.id));
  }

  function handleUpdate(updatedProduct) {
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
  }
  
  return (
    <div className='prodcont'>
      <h3>Add your product here</h3>
      <button className='btn2'>
        <Link to='Addproduct'>Add new product</Link>
      </button>
      <Outlet />
      <table className='table'>
        <thead>
          <tr className='table-primary'>
            <th scope='col'>#</th>
            <th scope='col'>Product</th>
            <th scope='col'>Code</th>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <th scope='row'>{product.id}</th>
              <td>{product.product}</td>
              <td>{product.code}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
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
      </table>
      {selectedProduct && (
  <div>
    <h3>Update Product</h3>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(selectedProduct);
    }}>
      <div className="form-group">
        <label htmlFor="product">Product</label>
        <input
          type="text"
          className="form-control"
          id="product"
          name="product"
          value={selectedProduct.product}
          onChange={(e) => setSelectedProduct({...selectedProduct, product: e.target.value})}
        />
      </div>
      <div className="form-group">
        <label htmlFor="code">Code</label>
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
      <button type="submit" className="btn btn-primary mr-2">Update</button>
      <button type="button" className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>Cancel</button>
    </form>
  </div>
)}

      
    </div>
  );
}

export default Products;
