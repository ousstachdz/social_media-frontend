import React, { useEffect } from 'react'
import Contacts from './Contacts'
import Correspondent from './Correspondent'
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate'
import { conversation, messages } from './MessagesTypes'
import Conversation from './Conversation'
import MessageInput from './MessageInput'
import Loading from '../../../shared/Loading/Loading'

const Messages: React.FC = () => {
  const [isloading, setIsLoading] = React.useState(true)
  const [SelectedConversation, setSelectedConversation] = React.useState<
    number | undefined
  >()

  const [conversationData, setConversation] = React.useState<
    conversation | undefined
  >()

  const [messagesData, setMessagesData] = React.useState<messages>()

  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    setIsLoading(true)
    const get_Conversation = async () => {
      if (SelectedConversation !== undefined) {
        await axiosPrivate
          .get(`/get_conversation/${SelectedConversation?.toString()}`)
          .then((response) => {
            setConversation(response.data)
            setMessagesData(response.data)
          })
          .catch((error) => console.error(error))
      }
      setIsLoading(false)
    }

    console.log(conversationData)
    get_Conversation()
  }, [SelectedConversation])

  return isloading ? (
    <div className='h-screen'>
      <Loading />
    </div>
  ) : (
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
            <div>
              <Conversation
                consversation={conversationData}
                messages={messagesData}
              />
              <MessageInput
                id={SelectedConversation}
                conversationData={conversationData}
                messagesData={messagesData}
                setMassagesData={setMessagesData}
              />
            </div>
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
