import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './private/Profile/Profile'
import Messages from './private/Message/Messages'

// type Props = {}

const PrivateRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Profile />} />
      </Routes>
      <Routes>
        <Route path='/messages' element={<Messages />} />
      </Routes>
    </>
  )
}

export default PrivateRoutes
