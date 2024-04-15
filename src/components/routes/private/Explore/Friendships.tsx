import React, { useEffect } from 'react'
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate'
import { UserInfo } from '../../../hooks/useUserInfo'
import { MdSearch } from 'react-icons/md'

const Friendships: React.FC = () => {
  const axiosPrivate = useAxiosPrivate()
  const [users, setUsers] = React.useState<UserInfo[]>([])
  useEffect(() => {
    axiosPrivate
      .get('friendships')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.warn(error)
      })
  }, [])

  return users.length === 0 ? (
    <div className='text-zinc-500 flex flex-col justify-center items-center h-screen-16 '>
      <MdSearch className='w-32 h-32' />
      <p className='text-2xl'>No friends</p>
    </div>
  ) : (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.username}</div>
      })}
    </div>
  )
}

export default Friendships
