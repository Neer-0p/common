import React, { useState } from "react";
import Header from "../common/Header";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../slice/productslice";

function Editproduct() {
  const location = useLocation();
  const redirect = useNavigate();
  const dispatch = useDispatch();

  // product data coming from Product page
  const product = location.state;

  const [data, setData] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
  });

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const add = (e) => {
    e.preventDefault();

    dispatch(
      updateProduct({
        ...product,
        title: data.title,
        price: data.price,
        description: data.description,
      })
    );

    redirect("/product");
    toast.success("Successfully Updated")
  };

  return (
    <div>
      <Header title="Edit Product" data="Edit Product" />

      <div className="container mt-4">
        <h3>Edit Product</h3>

        <form onSubmit={add}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input type="text" className="form-control" name="title" value={data.title} onChange={change} />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="number"  className="form-control"  name="price" value={data.price} onChange={change} />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" rows="3" value={data.description} onChange={change} />
          </div>

          <button type="submit" className="btn btn-success">
            Update Product
          </button>

          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => redirect("/product")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Editproduct;
