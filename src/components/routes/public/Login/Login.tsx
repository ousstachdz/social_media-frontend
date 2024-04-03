import React from 'react'
import PrimaryButton from '../../../shared/BasicElements/PrimaryButton'
import Input from '../../../shared/BasicElements/Input'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { variants } from '../../../shared/annimations'
import { RiChatSmile3Fill } from 'react-icons/ri'
import { login, loginType, saveTokens } from './login'
import useAuth from '../../../hooks/useAuth'
import usePopUps from '../../../hooks/usePopUps'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { popUpType } from '../../../shared/PopUps/PopUps'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [data, setData] = React.useState<loginType>({
    username: '',
    password: '',
  })
  const { setAuth } = useAuth()
  const { setPopUps } = usePopUps()
  const handelLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLoading(true)
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
          type: 'error',
          message: 'error',
          title: 'Error',
        } as popUpType,
      ])
      setPopUps((prev: Array<popUpType>) => [
        ...prev,
        {
          type: 'worning',
          message: 'worning',
          title: 'worning',
        } as popUpType,
      ])
      setPopUps((prev: Array<popUpType>) => [
        ...prev,
        {
          type: 'success',
          message: 'success',
          title: 'success',
        } as popUpType,
      ])
    }
    setIsLoading(false)
  }
  return (
    <div className='flex justify-center items-center mt-10'>
      <motion.div animate={'open'} variants={variants} initial='closed'>
        <form className='sm:w-80 sm:p-4  flex flex-col justify-center items-center mt-4'>
          <div className='py-4 flex flex-col'>
            <span>
              <RiChatSmile3Fill className='fill-indigo-700 sm:w-32 sm:h-32 w-20 h-20' />
            </span>
          </div>
          <span className='text-xl'>Welcome Back</span>
          <Input
            name='username'
            type='text'
            label='Username'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setData({ ...data, username: e.target.value })
            }}
          />
          <Input
            name='password'
            type='password'
            label='Password'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setData({ ...data, password: e.target.value })
            }}
          />
          <p className='text-sm mt-4'>
            You don't have an account ?{' '}
            <Link to={'/register'} className='text-indigo-700'>
              Join Us.
            </Link>
          </p>
          <PrimaryButton
            text={
              isLoading ? (
                <AiOutlineLoading3Quarters className='animate-spin w-4 h-4 fill-white' />
              ) : (
                'Login'
              )
            }
            onClick={handelLogin}
          />
        </form>
      </motion.div>
    </div>
  )
}

export default Login
