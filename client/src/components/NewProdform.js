import React, { useState } from 'react';
import axios from 'axios';
import NewProd from './NewProd';

function ProductForm() {
  const [formData, setFormData] = useState({ code: '', name: '', price: '', image: '' });
  const [imagePreview, setImagePreview] = useState('');

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
      setFormData({ ...formData, image: imageUrl });
      setImagePreview(imageUrl);
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form data:', formData);
    // more code to submit the form data to a database or other data store
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Image:
          <img src={imagePreview} alt="Product" width="150" height="150" />
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
      </div>
      <div>
        <label>
          Code:
          <input type="text" name="code" value={formData.code} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
      <NewProd product={formData} />
    </form>
  );
}

export default ProductForm;
