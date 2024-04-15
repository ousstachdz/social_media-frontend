import { postData } from '../routes/public/Register/RegisterApi'
import { registerType } from '../routes/public/Register/register'
import { popUpType } from '../shared/PopUps/PopUps'
import useLogin from './useLogin'
import usePopUps from './usePopUps'

type Props = {
  data: registerType
}

const useRegister = ({ data }: Props) => {
  const { handelLogin } = useLogin({ data })
  const { setPopUps } = usePopUps()
  const handleRegister = async () => {
    postData(data)
      .then((response) => {
        if (response.status === 201) {
          handelLogin()
        }
      })
      .catch((error) => {
        console.log(error)
        setPopUps((prev: Array<popUpType>) => [
          ...prev,
          {
            type: 'error',
            message: 'User is not created',
            title: 'Creations is not compelet',
          },
        ])
      })
  }

  return { handleRegister }
}

export default useRegister
