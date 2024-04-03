import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './components/context/AuthContext.tsx'
import { PopUpsContextProvider } from './components/context/PopUpContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PopUpsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PopUpsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
