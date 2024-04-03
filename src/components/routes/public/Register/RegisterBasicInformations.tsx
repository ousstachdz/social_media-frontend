import React from 'react'
import Input from '../../../shared/BasicElements/Input'
import { registerType } from './register'
import InputImage from '../../../shared/BasicElements/InputImage'

type Props = {
  data: registerType
  setData: React.Dispatch<React.SetStateAction<registerType>>
  errors: Array<{ [key: string]: string }>
}

const RegisterBasicInformations: React.FC<Props> = ({
  data,
  setData,
  errors,
}: Props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <InputImage
        data={data}
        setData={setData as React.Dispatch<React.SetStateAction<object>>}
      />
      <div className='flex justify-between w-full space-x-1'>
        <Input
          errors={errors}
          name='firstname'
          type='text'
          label='firstname'
          size='small'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setData({ ...data, firstname: e.target.value })
          }}
        />
        <Input
          errors={errors}
          name='lastname'
          type='text'
          label='lastname'
          size='small'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setData({ ...data, lastname: e.target.value })
          }}
        />
      </div>
      <Input
        errors={errors}
        name='date_of_birth'
        type='date'
        label='date of birth'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setData({ ...data, birthdate: e.target.value })
        }}
      />
      <Input
        errors={errors}
        name='address'
        type='text'
        label='Address'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setData({ ...data, address: e.target.value })
        }}
      />
    </div>
  )
}

export default RegisterBasicInformations
