import React, { useEffect, useState } from 'react'
import { registerType } from './register'
import RegisterActions from './RegisterActions'
import RegisterForm from './RegisterForm'
import { validateData } from './RegisterApi'
import useRegister from '../../../hooks/useRegister'

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
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
  const { handleRegister } = useRegister({ data })
  const RegisterAction = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setIsLoading(true)
    await handleRegister()
    setIsLoading(false)
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
          isLoading={isLoading}
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
