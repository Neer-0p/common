import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './website/pages/Home'
import Product from './website/pages/Product'
import Addproduct from './website/pages/Addproduct'
import Editproduct from './website/pages/Editproduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div>

        <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/addpro' element={<Addproduct />} />
          <Route path='/editpro' element={<Editproduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App