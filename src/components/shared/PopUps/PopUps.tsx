import { useState } from 'react'
import { IoIosWarning, IoMdCheckmarkCircle } from 'react-icons/io'
import { MdError } from 'react-icons/md'
import { motion } from 'framer-motion'

export type popUpType = {
  type: 'worning' | 'error' | 'success'
  message: string
  title: string
  id: number
}

const PopUps: React.FC<popUpType> = ({ id, type, message, title }) => {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [isHovered, setHovered] = useState(false)

  const color = {
    worning: 'bg-yellow-200 text-yellow-800',
    error: 'bg-red-200 text-red-800',
    success: 'bg-green-200 text-green-800',
  }

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1, opacity: 1 }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ opacity: isHovered ? 0.9 : 0, height: isHovered ? '100%' : 0 }}
      whileTap={{ scale: 0.8, opacity: 1 }}
      transition={{ duration: 1, delay: 2, ease: 'easeOut' }}
      onAnimationComplete={() =>
        isHovered ? setAnimationComplete(false) : setAnimationComplete(true)
      }
      style={{
        display: animationComplete ? 'none' : 'block',
        height: animationComplete ? 0 : '100%',
      }}
    >
      <div id={`popUp-${id}`} className='w-screen sm:w-80 p-4 z-50'>
        <div
          className={`${color[type]} w-full  h-20  rounded-lg shadow-lg flex  items-center`}
        >
          <div className='w-28 h-20 flex justify-center items-center'>
            {type === 'worning' ? (
              <IoIosWarning className={`${color[type]} w-10 h-10`} />
            ) : type === 'error' ? (
              <MdError className={`${color[type]} w-10 h-10`} />
            ) : type === 'success' ? (
              <IoMdCheckmarkCircle className={`${color[type]} w-10 h-10`} />
            ) : null}
          </div>
          <div className='flex flex-col items-start justify-start w-full'>
            <span className='font-semibold pt-2'>{title}</span>
            <span className='text-sm'>{message}</span>
          </div>
        </div>
      </div>
    </motion.button>
  )
}

export default PopUps
