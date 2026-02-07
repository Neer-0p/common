import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../common/Navbar';
import {  addToCart,  decreaseQty,  removeFromCart, clearCart } from '../../slice/cartslice';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="container my-4">
        <h3 className="mb-4">Shopping Cart</h3>

        {cartItems.length === 0 ? (
          <h5 className="text-center text-muted">
            Your cart is empty 🛒
          </h5>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            width="60"
                            className="me-3 rounded"
                          />
                          <span>{item.title}</span>
                        </div>
                      </td>

                      <td>₹ {item.price}</td>

                      <td>
                        <div className="btn-group">
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() =>
                              dispatch(decreaseQty(item.id))
                            }
                          >
                            −
                          </button>
                          <span className="btn btn-light btn-sm">
                            {item.quantity}
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => dispatch(addToCart(item))}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td>
                        ₹ {item.price * item.quantity}
                      </td>

                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            dispatch(removeFromCart(item.id))
                          }
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cart Summary */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <h4>Total: ₹ {totalAmount}</h4>

              <div>
                <button
                  className="btn btn-outline-danger me-2"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>
                <button className="btn btn-success">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
