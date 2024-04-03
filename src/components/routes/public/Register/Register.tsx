import React, { useEffect, useState } from 'react'
import { registerType } from './register'
import RegisterActions from './RegisterActions'
import RegisterForm from './RegisterForm'
import { postData, validateData } from './RegisterApi'
import { popUpType } from '../../../context/PopUpContext'
import usePopUps from '../../../hooks/usePopUps'
// type Props = {}

const Register: React.FC = () => {
  const [isValid, setValid] = useState<boolean>(true)
  const [page, setPage] = useState<number>(0)
  const [errors, setErrors] = useState<Array<{ [key: string]: string }>>([{}])
  const [data, setData] = useState<registerType>({
    photo: undefined,
    firstname: '',
    lastname: '',
    birthdate: '',
    address: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  const { setPopUps } = usePopUps()
  const RegisterAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault()
    postData(data)
    setPopUps((prev: Array<popUpType>) => [
      ...prev,
      { type: 'success', message: 'User Created', title: 'Success' },
    ])
  }
  useEffect(() => {
    const checkValid = () => {
      const e = validateData(data)
      setErrors(e)
      e.length > 0 ? setValid(false) : setValid(true)
    }
    checkValid()
  }, [data])

  return (
    <div className='flex justify-center items-center'>
      <form className='max-w-96 sm:p-4  flex flex-col justify-center items-center'>
        <RegisterForm
          errors={errors}
          page={page}
          data={data}
          setData={setData}
        />
        <RegisterActions
          page={page}
          isValid={isValid}
          setPage={setPage}
          RegisterAction={RegisterAction}
        />
      </form>
    </div>
  )
}

export default Register
