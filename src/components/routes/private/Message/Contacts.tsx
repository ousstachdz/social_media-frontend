import React, { useEffect } from 'react'
import Contact from './Contact'
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate'
import { conversations } from './MessagesTypes'
import { MdContacts } from 'react-icons/md'

export interface Props {
  SelectedConversation: number | undefined
  setSelectedConversation: React.Dispatch<
    React.SetStateAction<number | undefined>
  >
}

const Contacts: React.FC<Props> = ({
  SelectedConversation,
  setSelectedConversation,
}) => {
  const [contacts, setContacts] = React.useState<conversations[]>([])
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const get_all_contacts = async () => {
      await axiosPrivate
        .get('/get_all_conversation')
        .then((response) => {
          setContacts(response.data)
        })
        .catch((error) => console.error(error))
    }
    get_all_contacts()
  }, [])

  return (
    <div className=' w-20 sm:min-w-64 h-screen-16'>
      {contacts.length === 0 ? (
        <div className='flex items-center justify-center h-full'>
          <p className='text-gray-500'>No contacts</p>
        </div>
      ) : (
        <>
          <div className='text-center hidden font-semibold h-16 sm:flex space-x-4 items-center justify-center'>
            <MdContacts className='text-gray-700 w-6 h-6' />
            <p>Contacts</p>
          </div>
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.user2.id}
              last_message={contact.last_message.content}
              first_name={contact.user2.first_name}
              last_name={contact.user2.last_name}
              photo={contact.user2.photo}
              SelectedConversation={SelectedConversation}
              setSelectedConversation={setSelectedConversation}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default Contacts
