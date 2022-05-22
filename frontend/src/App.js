


import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      
      
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/login' element= {<Login />} />
        <Route path='/register' element= {<Register />} />
        </Routes>


      
      </BrowserRouter>

      
    </div>
  )
}

export default App