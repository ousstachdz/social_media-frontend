import React from 'react'
import { BASE_URL } from '../../../api/api'

type Props = {
  id: number
  first_name: string
  last_name: string
  photo: string
  last_message: string
  SelectedConversation: number | undefined
  setSelectedConversation: React.Dispatch<
    React.SetStateAction<number | undefined>
  >
}

const Contact = ({
  id,
  first_name,
  last_name,
  photo,
  last_message,
  SelectedConversation,
  setSelectedConversation,
}: Props) => {
  return (
    <div
      onClick={() => {
        setSelectedConversation(id)
      }}
      className={`hover:bg-gray-100 duration-300 cursor-pointer ${
        SelectedConversation === id ? 'bg-gray-200' : 'bg-white'
      }`}
    >
      <div className='flex items-center justify-start px-4 py-2 sm:space-x-4'>
        <div className='h-12 w-12  rounded-full overflow-hidden'>
          <img className='bg-cover' src={`${BASE_URL}${photo}`} alt='photo' />
        </div>
        <div className=' hidden sm:block'>
          <h4 className='capitalize font-semibold'>
            {first_name} {last_name}
          </h4>
          <p className='text-xs text-gray-500 font-semibold'>{last_message}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
