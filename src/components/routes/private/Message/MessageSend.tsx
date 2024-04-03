import React from 'react'

type Props = {
  content: string
}

const MessageSend: React.FC<Props> = ({ content }: Props) => {
  return (
    <div className='bg-indigo-700 text-white py-2 px-3 rounded-full max-w-2xl self-end my-2 mx-2 shadow-md text-xs sm:text-sm'>
      {content}
    </div>
  )
}

export default MessageSend
