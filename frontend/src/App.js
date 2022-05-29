


import React from 'react'
import Login from './components/forms/login/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {   ToastContainer } from 'react-toastify';
import ForgotPassword from './components/FrogetPassword'
import Header from './components/header/Header'
function App() {
  return (
    <div>
      
      
      <BrowserRouter>
       
        <Header />
          
          <Routes>
               <Route path='/login' element= {<Login/>} />

        
          </Routes>
        
       

       
        <ToastContainer />
        
       


      
      </BrowserRouter>

      
    </div>
  )
}

export default App