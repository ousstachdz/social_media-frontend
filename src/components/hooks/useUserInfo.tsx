import { useEffect, useState } from 'react'
import { useAxiosPrivate } from './useAxiosPrivate'

export type UserInfo = {
  id: number
  username: string
  first_name: string
  last_name: string
  address: string
  date_of_birth: string
  photo: string
}

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>()
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    axiosPrivate.get('/get_user').then((response) => {
      console.log(response.data)
      setUserInfo(response.data)
    })
  }, [])
  return { userInfo }
}
export default useUserInfo
