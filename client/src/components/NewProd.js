import React, { useState } from 'react';
import axios from 'axios';

function NewProd({ product }) {
  const [imagePreview, setImagePreview] = useState(product.image || 'https://via.placeholder.com/150');

  async function handleImageChange(e) {
    try {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      formData.append('upload_preset', 'your_cloudinary_upload_preset_name');
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/your_cloudinary_cloud_name/image/upload',
        formData
      );
      const imageUrl = response.data.secure_url;
      console.log('Uploaded image URL:', imageUrl);
      setImagePreview(imageUrl);
      // more code to update the product's image URL in a database or other data store
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  }

  return (
    <div>
      <div>
        <img src={imagePreview} alt="Product" width="150" height="150" />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>Code: {product.code}</p>
        <p>Price: {product.price}</p>
  </div>
</div>

);
}

export default NewProd;
       
