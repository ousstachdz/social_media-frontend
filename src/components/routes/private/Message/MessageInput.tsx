import React, { useState, useCallback, useEffect } from 'react'
import { IoIosSend } from 'react-icons/io'
import Input from '../../../shared/BasicElements/Input'
import useWebSocket from 'react-use-websocket'
import { SOCKET_URL } from '../../../api/api'

type Props = {
  id: number | undefined
}

const MessageInput: React.FC<Props> = ({ id }: Props) => {
  const [messageHistory, setMessageHistory] = useState<MessageEvent<unknown>[]>(
    []
  )
  const [message, setMessage] = React.useState<string>('')
  const [socketUrl] = useState(`${SOCKET_URL}/ws/chat/`)

  const { sendMessage, lastMessage } = useWebSocket(socketUrl)

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => [...prev, lastMessage])
    }
    console.log(messageHistory)
  }, [lastMessage])

  const handleClickSendMessage = useCallback(() => sendMessage('Hello'), [])

  const handelSendMessage = async () => {
    if (id) {
      handleClickSendMessage()
      console.log(message)
      setMessage('')
    }
  }

  return (
    <div className=' flex justify-center'>
      <form className='flex justify-between items-center p-4 space-x-4'>
        <Input
          type='text'
          name='message'
          label=''
          placeHolder='Start typing...'
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          size='flex'
          value={message}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            handelSendMessage()
          }}
          className='flex justify-center items-center'
        >
          <IoIosSend className='text-indigo-700 hover:text-indigo-900 w-8 h-6' />
        </button>
      </form>
    </div>
  )
}

export default MessageInput
