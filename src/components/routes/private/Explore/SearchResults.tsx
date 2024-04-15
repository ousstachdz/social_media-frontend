import React, { useEffect, useState } from 'react'
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate'
import UserCardV, {
  UserFriendshipInfo,
} from '../../../shared/UserCards/UserCardV'

type Props = {
  keyWord: string
}

const SearchResults = ({ keyWord }: Props) => {
  const [users, setUsers] = useState<UserFriendshipInfo[]>()

  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    axiosPrivate
      .get(`search_user/${keyWord}`)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.warn(error)
      })
  }, [keyWord, axiosPrivate])

  return (
    <div>
      <div>
        {users?.map((user) => {
          return <UserCardV key={user.id} user={user} />
        })}
      </div>
    </div>
  )
}

export default SearchResults
