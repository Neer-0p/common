import React, { useState } from 'react';
import Header from '../common/Header';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../slice/productslice';
import { redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Addproduct() {

  const dispatch = useDispatch();
  const redirect = useNavigate();

  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title: form.title,
      description: form.description,
      price: Number(form.price),
      images: [form.image]
    };

    dispatch(addProduct(newProduct));
    redirect('/product');
    toast.success("Successfully Add")
  };

  return (
    <div>
      <Header title="Add Product" data="Add Product" />

      <div className="container mt-4">
        <form onSubmit={handleSubmit} className="card p-4 shadow">

          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={form.image}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary">Add Product</button>

        </form>
      </div>
    </div>
  );
}

export default Addproduct;
