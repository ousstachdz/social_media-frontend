import React from 'react'
import { conversation } from './MessagesTypes'
import MessageSend from './MessageSend'
import MessageRecieved from './MessageRecieved'

type Props = {
  consversation: conversation
}

const Conversation: React.FC<Props> = ({ consversation }: Props) => {
  return (
    <div className='flex flex-col-reverse px-4 h-full'>
      {consversation.messages.map((message) => {
        return message.sender === consversation.user1.id ? (
          <MessageSend key={message.id} content={message.timestamp} />
        ) : (
          <MessageRecieved key={message.id} content={message.timestamp} />
        )
      })}
    </div>
  )
}

export default Conversation
