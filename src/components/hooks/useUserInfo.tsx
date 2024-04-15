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
    const getUserInfo = async () => {
      await axiosPrivate
        .get('get_user')
        .then((response) => {
          setUserInfo(response.data)
        })
        .catch((error) => {
          console.warn(error)
        })
    }
    getUserInfo()
  }, [axiosPrivate])

  return { userInfo }
}
export default useUserInfo
