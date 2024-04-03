import React, { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { axiosInstance } from '../api/api'

export interface AuthContextType {
  isAuth: boolean | undefined
  isLoading: boolean | undefined
  setAuth: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

const AuthContext = createContext<AuthContextType>({
  isAuth: undefined,
  isLoading: undefined, // Fix: Change 'undefined' to '() => {}'
  setAuth: () => {},
})

export default AuthContext

interface AuthContextProviderProps {
  children: React.ReactNode
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}: AuthContextProviderProps) => {
  const [isAuth, setAuth] = useState<boolean | undefined>(false)
  const [isLoading, setLoading] = useState<boolean | undefined>(true)

  const checkToken = async () => {
    const token = Cookies.get('refresh')

    if (token) {
      try {
        await axiosInstance
          .post('/token/refresh/', { refresh: token })
          .then((response) => {
            console.log(response)
            Cookies.set('access', response.data.access, { secure: true })
            setAuth(true)
          })
      } catch (error) {
        setAuth(false)
        Cookies.remove('refresh', { path: '/' })
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    checkToken().then(() => null)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, isLoading, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider }
