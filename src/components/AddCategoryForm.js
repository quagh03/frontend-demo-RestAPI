import React, { useState } from 'react';
import axios from 'axios';

function AddCategoryForm() {
  const [formData, setFormData] = useState({
    cname: '',
    cdesc: '',
    cstatus: 1, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/categories', formData)
      .then(response => {
        console.log('Category added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error adding category:', error);
      });
  };

  return (
    <div>
      <h2>Add New Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cname">Category Name:</label>
          <input
            type="text"
            id="cname"
            name="cname"
            value={formData.cname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cdesc">Category Description:</label>
          <input
            type="text"
            id="cdesc"
            name="cdesc"
            value={formData.cdesc}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>
            Category Status:
            <input
              type="radio"
              name="cstatus"
              value="1"
              checked={formData.cstatus === '1'}
              onChange={handleChange}
            /> Active
            <input
              type="radio"
              name="cstatus"
              value="0"
              checked={formData.cstatus === '0'}
              onChange={handleChange}
            /> Deactive
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCategoryForm;
