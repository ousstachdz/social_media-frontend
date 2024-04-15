import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './private/Profile/Profile'
import Messages from './private/Message/Messages'
import Explore from './private/Explore/Explore'
import { SocketContextProvider } from '../context/SocketContext'

// type Props = {}

const PrivateRoutes: React.FC = () => {
  return (
    <SocketContextProvider>
      <Routes>
        <Route path='/' element={<Profile />} />
      </Routes>
      <Routes>
        <Route path='/messages' element={<Messages />} />
      </Routes>
      <Routes>
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </SocketContextProvider>
  )
}

export default PrivateRoutes
