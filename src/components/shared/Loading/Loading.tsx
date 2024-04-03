import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import React from 'react'

// type Props = {}

const Loading: React.FC = () => {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
      <AiOutlineLoading3Quarters className='animate-spin w-10 h-10 fill-indigo-700' />
    </div>
  )
}

export default Loading
