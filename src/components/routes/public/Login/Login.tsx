import React from 'react'
import PrimaryButton from '../../../shared/BasicElements/PrimaryButton'
import Input from '../../../shared/BasicElements/Input'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { variants } from '../../../shared/annimations'
import { RiChatSmile3Fill } from 'react-icons/ri'
import { loginType } from './loginApi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useLogin from '../../../hooks/useLogin'

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [data, setData] = React.useState<loginType>({
    username: '',
    password: '',
  })

  const { handelLogin } = useLogin({ data })

  const handelLoginAction = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await handelLogin()
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
            disabled={isLoading}
            onClick={handelLoginAction}
          />
        </form>
      </motion.div>
    </div>
  )
}

export default Login
