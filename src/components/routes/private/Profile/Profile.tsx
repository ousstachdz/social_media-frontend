import React from 'react'
import useUserInfo from '../../../hooks/useUserInfo'
import { BASE_URL } from '../../../api/api'

// type Props = {}

const Profile: React.FC = () => {
  const { userInfo } = useUserInfo()

  return (
    <div className='mt-10 flex flex-col justify-center items-center'>
      <div className='h-32 w-32  rounded-full bg-slate-200 overflow-hidden'>
        <img src={`${BASE_URL}${userInfo?.photo}`} alt='photo' />
      </div>
      <div className='font-semibold text-lg space-x-2 mt-2'>
        <span>{userInfo?.first_name}</span>
        <span>{userInfo?.last_name}</span>
      </div>
    </div>
  )
}

export default Profile
