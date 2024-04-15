import { login, loginType, saveTokens } from '../routes/public/Login/loginApi'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'
import usePopUps from './usePopUps'
import { popUpType } from '../shared/PopUps/PopUps'

type Props = {
  data: loginType
}

const useLogin = ({ data }: Props) => {
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  const { setPopUps } = usePopUps()

  const handelLogin = async () => {
    const response = await login(data)
    if (response.status === 200) {
      saveTokens(response.data.access, response.data.refresh)
      setAuth(true)
      navigate('/')
    }
    if (response.status === 401) {
      setPopUps((prev: Array<popUpType>) => [
        ...prev,
        {
          type: 'success',
          message: 'success',
          title: 'success',
        } as popUpType,
      ])
    }
  }
  return { handelLogin }
}

export default useLogin
