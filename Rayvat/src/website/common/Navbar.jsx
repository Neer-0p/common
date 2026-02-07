import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../slice/authslice';

function Navbar() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const { isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  const totalCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="header d-flex align-items-center sticky-top">
      <div className="container d-flex align-items-center justify-content-between">

        {/* Logo */}
        <Link to="/" className="logo d-flex align-items-center">
          <h1 className="sitename">Savora</h1>
        </Link>

        {/* Nav */}
        <nav className="navmenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/product">Products</Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="btn btn-outline-light position-relative"
              >
                🛒 Cart
                {totalCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalCount}
                  </span>
                )}
              </Link>
            </li>

            {/* Auth Section */}
            {!isAuthenticated ? (
              <li>
                <Link to="/login" className="btn">
                  Login
                </Link>
              </li>
            ) : (
              <li className="dropdown">
                <span className="btn btn-success">
                  {user?.username}
                </span>
                <ul>
                  <li>
                    <button
                      className=""
                      onClick={() => dispatch(logout())}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
