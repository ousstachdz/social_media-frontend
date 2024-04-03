import React from 'react'
import RegisterAccountInformations from './RegisterAccountInformations'
import RegisterBasicInformations from './RegisterBasicInformations'
import { motion } from 'framer-motion'
import { variants } from '../../../shared/annimations'
import { registerType } from './register'

type Props = {
  page: number
  errors: Array<{ [key: string]: string }>
  data: registerType
  setData: React.Dispatch<React.SetStateAction<registerType>>
}

const RegisterForm: React.FC<Props> = ({
  errors,
  page,
  data,
  setData,
}: Props) => {
  return (
    <div className='max-w-96 sm:p-4 relative min-h-96 max-h-96 mt-10'>
      <motion.div
        animate={page === 0 ? 'open' : 'closed'}
        variants={variants}
        initial='closed'
      >
        <RegisterBasicInformations
          errors={errors}
          data={data}
          setData={setData}
        />
      </motion.div>
      <motion.div
        animate={page === 1 ? 'open' : 'closed'}
        variants={variants}
        initial='closed'
      >
        <RegisterAccountInformations
          errors={errors}
          data={data}
          setData={setData}
        />
      </motion.div>
    </div>
  )
}
export default RegisterForm
