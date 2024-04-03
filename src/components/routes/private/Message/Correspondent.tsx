import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export type userFullname = {
  first_name: string
  last_name: string
}
const Correspondent: React.FC<userFullname> = ({ first_name, last_name }) => {
  return (
    <div className='flex justify-between  items-center font-semibold h-16 capitalize sm:text-xl'>
      <h3 className='p-4'>
        {first_name} {last_name}
      </h3>
      <div className='p-4'>
        <BsThreeDotsVertical />
      </div>
    </div>
  )
}

export default Correspondent
