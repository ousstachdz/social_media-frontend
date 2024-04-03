import { useContext } from 'react'
import AuthContext, { AuthContextType } from '../context/AuthContext'

const useAuth = (): AuthContextType => {
  const { isAuth, isLoading, setAuth } = useContext(AuthContext)

  return { isAuth, isLoading, setAuth }
}

export default useAuth
