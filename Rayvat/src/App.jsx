import React from 'react'
// import  Navbar  from '../src/website/common/Navbar'
import Home from './website/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './website/pages/Product'
import Cart from './website/pages/Cart'
import Contact from './website/pages/Contact'
import Login from './website/pages/Login'
import ProtectedRoute from './website/pages/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<ProtectedRoute><Product /></ProtectedRoute>} />
          <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          

      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App