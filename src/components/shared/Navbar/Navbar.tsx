import React from 'react'
import NavbarItems from './NavbarItems'
import { IoClose, IoMenu } from 'react-icons/io5'
import NavbarItemsSm from './NavbarItemsSm'
import useUserInfo from '../../hooks/useUserInfo'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { BASE_URL } from '../../api/api'

// type Props = {}

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const toggleMenu = () => {
    setOpen(!open)
  }
  const { isAuth } = useAuth()
  const { userInfo } = useUserInfo()
  return (
    <nav className='w-full flex flex-col justify-center items-center  border-b'>
      <div className='sm:w-10/12 w-full p-4 h-16 flex justify-between items-center'>
        <h1>Logo</h1>
        <div className='hidden sm:block'>
          <NavbarItems />
        </div>
        <div className='flex space-x-4 items-center'>
          {isAuth ? (
            <Link
              className='flex space-x-4 items-center bg-slate-100 py-1 pr-3 pl-1 rounded-full shadow-md'
              to='/'
            >
              <img
                src={`${BASE_URL}${userInfo?.photo}`}
                alt='profile'
                className='w-8 h-8 rounded-full'
              />
              <h4 className='text-xs capitalize font-semibold'>
                {userInfo?.first_name} {userInfo?.last_name}
              </h4>
            </Link>
          ) : null}
          {open ? (
            <IoClose
              className='block sm:hidden bg-slate-100  hover:bg-slate-200 duration-300 p-1 w-8 h-8  rounded-full shadow-md'
              onClick={toggleMenu}
            />
          ) : (
            <IoMenu
              className='block sm:hidden bg-slate-100  hover:bg-slate-200 duration-300 p-1 w-8 h-8  rounded-full shadow-md'
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
      {open ? (
        <div className='w-full '>
          <NavbarItemsSm toggleMenu={toggleMenu} />
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar
