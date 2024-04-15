import React, { useCallback, useContext, useEffect } from 'react'
import { IoIosSend } from 'react-icons/io'
import Input from '../../../shared/BasicElements/Input'
import { conversation, message, messages } from './MessagesTypes'
import SocketContext from '../../../context/SocketContext'

type Props = {
  id: number | undefined
  conversationData: conversation | undefined
  messagesData: messages | undefined
  setMassagesData: React.Dispatch<React.SetStateAction<messages | undefined>>
}

const MessageInput: React.FC<Props> = ({
  conversationData,
  setMassagesData,
  messagesData,
}: Props) => {
  const [content, setContent] = React.useState<string>('')
  const { sendMessage, lastMessage } = useContext(SocketContext)

  const handleClickSendMessage = useCallback(() => {
    const message: message = {
      id: Math.random(),
      content: content,
      sender: conversationData?.user1?.id ?? 0,
      receiver: conversationData?.user2?.id ?? 0,
      timestamp: new Date().toISOString(),
    }
    const messageText: string = JSON.stringify({ message: message })

    setMassagesData({ messages: [...(messagesData?.messages ?? []), message] })
    sendMessage(messageText)
    setContent('')
  }, [sendMessage, conversationData, content, messagesData, setMassagesData])
  useEffect(() => {
    if (lastMessage !== null) {
      console.log('lastMessage', lastMessage)
      const message = JSON.parse(lastMessage?.data).message as message

      console.log('message', message)
      console.log('conversationData', conversationData)
      if (message.sender === conversationData?.user2?.id) {
        setMassagesData({
          messages: [...(messagesData?.messages ?? []), message],
        })
      }
    }
  }, [lastMessage])

  return (
    <div className=' flex justify-center'>
      <form className='flex justify-between items-center p-4 space-x-4'>
        <Input
          type='text'
          name='message'
          label=''
          placeHolder='Start typing...'
          onChange={(e) => {
            setContent(e.target.value)
          }}
          size='flex'
          value={content}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            handleClickSendMessage()
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
