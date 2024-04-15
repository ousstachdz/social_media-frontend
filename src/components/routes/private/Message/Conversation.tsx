import React, { useEffect, useRef } from 'react'
import { conversation, messages } from './MessagesTypes'
import MessageSend from './MessageSend'
import MessageRecieved from './MessageRecieved'

type Props = {
  consversation: conversation | undefined
  messages: messages | undefined
}
const Conversation: React.FC<Props> = ({ consversation, messages }: Props) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesContainerRef.current?.scrollTo({
      top: messagesContainerRef.current?.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages])
  return (
    <div className='flex flex-col-reverse justify-end'>
      <div
        ref={messagesContainerRef}
        className='flex flex-col overflow-y-scroll max-h--48 px-4'
      >
        {messages?.messages.map((message) => {
          return message.sender === consversation?.user1.id ? (
            <MessageSend key={message.id} content={message.content} />
          ) : (
            <MessageRecieved key={message.id} content={message.content} />
          )
        })}
      </div>
    </div>
  )
}

export default Conversation
