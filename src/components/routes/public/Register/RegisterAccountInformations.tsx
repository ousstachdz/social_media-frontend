import React from 'react'
import { MdOutlineSecurity } from 'react-icons/md'
import Input from '../../../shared/BasicElements/Input'
import { registerType } from './register'

type Props = {
  data: registerType
  setData: React.Dispatch<React.SetStateAction<registerType>>
  errors: Array<{ [key: string]: string }>
}

const RegisterAccountInformations: React.FC<Props> = ({
  data,
  setData,
  errors,
}: Props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className=' p-4'>
        <MdOutlineSecurity className='sm:h-32 sm:w-32 h-20 w-20 mt-10 sm:mt-0 fill-indigo-700' />
      </div>
      <Input
        errors={errors}
        name='username'
        type='text'
        label='Username'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setData({ ...data, username: e.target.value })
        }}
      />
      <Input
        errors={errors}
        name='password'
        type='password'
        label='Password'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setData({ ...data, password: e.target.value })
        }}
      />
      <Input
        errors={errors}
        name='re_password'
        type='password'
        label='Confirm The Password'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setData({ ...data, passwordConfirmation: e.target.value })
        }}
      />
    </div>
  )
}

export default RegisterAccountInformations
