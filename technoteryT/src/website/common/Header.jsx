import React from 'react'
import { NavLink } from 'react-router-dom'

function Header({title,data}) {
  return (
    <div>
      {/* <!-- Navbar --> */}
      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <NavLink to="/" className="navbar-brand p-0">
            <h1 className="m-0"><i className="fa fa-user-tie me-2" />Technotry</h1>
          </NavLink>
          <nav className='navbar-nav nav-item'>
            <NavLink to="/" className="nav-item ms-3">Home</NavLink>
            <NavLink to="/product" className="nav-item mx-3">Product</NavLink>
            <NavLink to="/addpro" className="nav-item">Add Product</NavLink>
          </nav>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" className="nav-item nav-link">Home</NavLink>
              <NavLink to="/product" className="nav-item nav-link">Product</NavLink>
              <NavLink to="/addpro" className="nav-item nav-link">Add Product</NavLink>
              <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
            </div>
            <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search" /></button>
          </div>
        </nav>
        <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">{title}</h1>
              <a className="h5 text-white">Home</a>
              <i className="far fa-circle text-white px-2" />
              <a className="h5 text-white">{data}</a>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}


    </div>
  )
}

export default Header