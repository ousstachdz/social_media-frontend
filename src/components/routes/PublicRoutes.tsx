import React from 'react'
import Index from './public/Index/Index'
import { Route, Routes } from 'react-router-dom'
import Login from './public/Login/Login'
import Register from './public/Register/Register'

// type Props = {}

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default PublicRoutes
