


import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {   ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      
      
      <BrowserRouter>
        <Navbar />
        
          
          <Routes>
        <Route path='/login' element= {<Login/>} />
        <Route path='/register' element= {<Register />} />
        <Route path='/home' element= {<Home/>} />

        
        </Routes>
        
       

       
        <ToastContainer />
        
       


      
      </BrowserRouter>

      
    </div>
  )
}

export default App