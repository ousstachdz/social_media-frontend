import React from 'react'

type Props = {
  content: string
}

const MessageRecieved: React.FC<Props> = ({ content }: Props) => {
  return (
    <div className=' bg-gray-200 text-black py-2 px-3 rounded-full max-w-2xl self-start my-2 shadow-md text-xs sm:text-sm'>
      {content}
    </div>
  )
}

export default MessageRecieved
