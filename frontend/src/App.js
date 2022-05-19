


import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Register />
      </BrowserRouter>

      
    </div>
  )
}

export default App