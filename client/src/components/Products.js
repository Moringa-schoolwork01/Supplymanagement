import React, { useState } from "react";
import  NewProd from "./NewProd";
import NewProdForm from "./NewProdForm";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const addProduct = async productData => {
    try {
      const uploadedImage = await uploadImage(productData.image);
      const newProduct = {
        imageUrl: uploadedImage.secure_url,
        ...productData
      };
      await axios.post("/api/products", newProduct);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const productToUpdate = products.find(product => product.id === id);
      if (!productToUpdate) {
        throw new Error("Product not found");
      }
      const updatedImage = await uploadImage(updatedProduct.image);
      const updatedProductData = {
        ...productToUpdate,
        ...updatedProduct,
        imageUrl: updatedImage.secure_url
      };
      await axios.put(`/api/products/${id}`, updatedProductData);
      setProducts(products =>
        products.map(product =>
          product.id === id ? updatedProductData : product
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async id => {
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts(products => products.filter(product => product.id !== id));
    } catch (error) {
      console.log(error)
    }
  };

  const uploadImage = async image => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "YOUR_UPLOAD_PRESET_NAME_HERE");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME_HERE/image/upload",
      formData
    );
    return response.data;
  };

  return (
    <div className="product-list">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ProductForm onSubmit={addProduct} />
          <div className="products">
            {products.map(product => (
              <NewProd
                key={product.id}
                product={product}
                onUpdate={updateProduct}
                onDelete={deleteProduct}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;




















// import React, { useState, useEffect } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import '../css/Products.css';

// import React, { useState } from 'react';


// { function Products() { }
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     fetch('./products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error(error));
//   }, []);

//   function handleDelete(product) {
//     fetch(`./products/${product.id}`, { method: 'DELETE' })
//       .then(() => {
//         setProducts(prevProducts => prevProducts.filter(p => p.id !== product.id));
//       })
//       .catch(error => console.error(error));
//   }

//   function handleUpdate(updatedProduct) {
//     fetch(`/products/${updatedProduct.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updatedProduct)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to update product');
//       }
//       setProducts(prevProducts => {
//         const updatedProducts = prevProducts.map(product => {
//           if (product.id === updatedProduct.id) {
//             return updatedProduct;
//           } else {
//             return product;
//           }
//         });
//         return updatedProducts;
//       });
//       setSelectedProduct(null);
//     })
//     .catch(error => console.error(error));
//   }
  
//   return (
//     <div className='prodcont'>
//       <h3>Add your product here</h3>
//       <button className='btn2'>
//         <Link to='Addproduct'>Add new product</Link>
//       </button>
//       <Outlet />
//       <table className='table'>
//         <thead>
//           <tr className='table-primary'>
//             <th scope='col'>#</th>
//             <th scope='col'>Product</th>
//             <th scope='col'>Code</th>
//             <th scope='col'>Name</th>
//             <th scope='col'>Price</th>
//             <th scope='col'>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.id}>
//               <th scope='row'>{product.id}</th>
//               <td>{product.product}</td>
//               <td>{product.code}</td>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//               <td>
//                 <button
//                   className='custom-btn btn-2'
//                   onClick={() => setSelectedProduct(product)}
//                 >
//                   Update
//                 </button>
//                 <button className='btnd' onClick={() => handleDelete(product)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedProduct && (
//   <div>
//     <h3>Update Product</h3>
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       handleUpdate(selectedProduct);
//     }}>
//       <div className="form-group">
//         <label htmlFor="product">Product</label>
//         <input
//           type="text"
//           className="form-control"
//           id="product"
//           name="product"
//           value={selectedProduct.product}
//           onChange={(e) => setSelectedProduct({...selectedProduct, product: e.target.value})}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="code">Code</label>
//         <input
//           type="text"
//           className="form-control"
//           id="code"
//           name="code"
//           value={selectedProduct.code}
//           onChange={(e) => setSelectedProduct({...selectedProduct, code: e.target.value})}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           className="form-control"
//           id="name"
//           name="name"
//           value={selectedProduct.name}
//           onChange={(e) => setSelectedProduct({...selectedProduct, name: e.target.value})}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="price">Price</label>
//         <input
//           type="text"
//           className="form-control"
//           id="price"
//           name="price"
//           value={selectedProduct.price}
//           onChange={(e) => setSelectedProduct({...selectedProduct, price: e.target.value})}
//         />
//       </div>
//       <button type="submit" className="btn btn-primary mr-2">Update</button>
//       <button type="button" className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>Cancel</button>
//     </form>
//   </div>
// )}

      
//     </div>
//   );
// // }

// export default Products;
