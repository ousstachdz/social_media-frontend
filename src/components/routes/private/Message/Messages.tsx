import React, { useEffect } from 'react'
import Contacts from './Contacts'
import Correspondent from './Correspondent'
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate'
import { conversation } from './MessagesTypes'
import Conversation from './Conversation'
import MessageInput from './MessageInput'

const Messages: React.FC = () => {
  const [SelectedConversation, setSelectedConversation] = React.useState<
    number | undefined
  >()

  const [conversationData, setConversation] = React.useState<
    conversation | undefined
  >()
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const get_Conversation = async () => {
      if (SelectedConversation !== undefined) {
        await axiosPrivate
          .get(`/get_conversation/${SelectedConversation?.toString()}`)
          .then((response) => {
            setConversation(response.data)
            console.log(response.data)
          })
          .catch((error) => console.error(error))
      }
    }

    get_Conversation()
    console.log(conversationData)
  }, [SelectedConversation])

  return (
    <div className='flex'>
      <Contacts
        SelectedConversation={SelectedConversation}
        setSelectedConversation={setSelectedConversation}
      />
      <div className='w-full'>
        {conversationData?.user2 ? (
          <div className='h-screen-16 flex flex-col justify-between'>
            <Correspondent
              first_name={conversationData.user2.first_name}
              last_name={conversationData.user2.last_name}
            />
            <Conversation consversation={conversationData} />
            <MessageInput id={SelectedConversation} />
          </div>
        ) : (
          <div className='flex items-center justify-center h-screen-16'>
            <p className='text-gray-500'>Select a contact to start messaging</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Messages
