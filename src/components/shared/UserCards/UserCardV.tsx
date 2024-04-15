import React, { useEffect } from 'react'
import { BASE_URL } from '../../api/api'
import PrimaryButton from '../BasicElements/PrimaryButton'
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate'
import SecondairyButton from '../BasicElements/SecondairyButton'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useUserInfo from '../../hooks/useUserInfo'

export type UserFriendshipInfo = {
  id: number
  username: string
  first_name: string
  last_name: string
  address: string
  date_of_birth: string
  photo: string
  is_follower: boolean
  is_followed: boolean
  is_friend: boolean
}
type Props = {
  user: UserFriendshipInfo
}

const UserCardV: React.FC<Props> = ({ user }: Props) => {
  const axiosPrivate = useAxiosPrivate()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isFollowed, setIsFollowed] = React.useState<boolean>(user.is_followed)
  const [isFollower, setIsFollower] = React.useState<boolean>(user.is_follower)
  const [isFriend, setIsFriend] = React.useState<boolean>(user.is_friend)
  const { userInfo } = useUserInfo()
  useEffect(() => {
    console.log(user)
    console.log(userInfo)
  }, [user, userInfo])

  const handelFollowButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setIsLoading(true)
    await axiosPrivate
      .post('send_friend_request/', { receiver: user.id })
      .then((response) => {
        console.log(response.data)
        setIsFollowed(true)
      })
      .catch((error) => {
        console.warn(error)
      })
    setIsLoading(false)
  }

  const handelUnfollow = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setIsLoading(true)
    await axiosPrivate
      .post(`unfollowed/`, { receiver: user.id })
      .then((response) => {
        console.log(response.data)
        setIsFollowed(false)
      })
      .catch((error) => {
        console.warn(error)
      })
    setIsLoading(false)
  }
  const handelAccept = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setIsLoading(true)
    await axiosPrivate
      .post(`accept_friend_request/`, { sender: user.id })
      .then((response) => {
        console.log(response.data)
        setIsFriend(true)
      })
      .catch((error) => {
        console.warn(error)
      })
    setIsLoading(false)
  }
  const handelUnfriend = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setIsLoading(true)
    await axiosPrivate
      .post(`unfriend/`, { receiver: user.id })
      .then((response) => {
        console.log(response.data)
        setIsFollower(false)
        setIsFollowed(false)
        setIsFriend(false)
      })
      .catch((error) => {
        console.warn(error)
      })
    setIsLoading(false)
  }
  return (
    <div className='mt-10 flex  flex-col sm:flex-row sm:justify-between justify-center items-center md:flex-col lg:flex-row lg:justify-between md:justify-center md:items-center sm:border md:border-none lg:border m-4 px-2'>
      <div className='flex space-x-0 sm:space-x-4 md:space-x-0 lg:space-x-4 flex-col sm:flex-row  md:flex-col lg:flex-row sm:justify-start items-center lg:justify-start md:items-center justify-center'>
        <div className='my-4 h-24 w-24 sm:h-12 sm:w-12 md:h-24 md:w-24 lg:h-12 lg:w-12 rounded-full bg-slate-200 overflow-hidden'>
          <img src={`${BASE_URL}${user?.photo}`} alt='photo' />
        </div>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold text-lg space-x-2'>
            <span>{user?.first_name}</span>
            <span>{user?.last_name}</span>
          </div>
          <p className='text-sm text-zinc-600 text-center sm:text-left md:text-center lg:text-left'>
            {user.address}
          </p>
        </div>
      </div>
      <div className='mb-4'>
        {userInfo?.id === user.id ? null : isLoading ? (
          <div className='mt-4'>
            <AiOutlineLoading3Quarters className='animate-spin w-4 h-4 fill-indigo-700' />
          </div>
        ) : isFriend ? (
          <SecondairyButton onClick={handelUnfriend} text={'Unfriend'} />
        ) : (
          <>
            {isFollowed && !isFollower && (
              <SecondairyButton onClick={handelUnfollow} text={'Unfollow'} />
            )}
            {!isFollowed && isFollower && (
              <SecondairyButton onClick={handelAccept} text={'Accept'} />
            )}
            {!isFollowed && !isFollower && (
              <PrimaryButton
                onClick={handelFollowButtonClick}
                text={'Follow'}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default UserCardV
