import React from 'react'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
