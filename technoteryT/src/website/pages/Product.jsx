import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../../slice/productslice';
import { useNavigate } from 'react-router-dom';

function Product() {

  const dispatch = useDispatch();
  const redirect = useNavigate();

  const [view, setview] = useState(null);

  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Header title="Product" data="Product" />

      <div className="my-3 p-4 pt-0">
        <table className="table text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products && products.map((data) => {
              const { id, images, title, description, price } = data;

              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <img
                      src={images[0]}
                      alt={title}
                      width="80"
                      height="80"
                    />
                  </td>
                  <td>{title}</td>
                  <td>{description.slice(0, 50)}...</td>
                  <td>{price} Rs</td>
                  <td>
                    <button className="btn btn-info btn-sm" onClick={()=>setview(data)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                      View
                    </button>

                    <button className="btn btn-success btn-sm mx-2" onClick={() => redirect('/editpro', { state: data })}  >
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteProduct(id))} >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* // view modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{view?.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              {view && (
                <div className="card mx-auto" style={{ width: '18rem' }}>
                  <img
                    src={view.images[0]}
                    className="card-img-top"
                    alt={view.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{view.title}</h5>
                    <p className="card-text">
                      {view.description}
                    </p>
                    <p className="fw-bold">
                      Price: ₹{view.price}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Product;



