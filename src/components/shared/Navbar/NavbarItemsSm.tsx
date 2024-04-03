import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { motion } from 'framer-motion'
import { container, item } from '../annimations'
import { logout } from '../../routes/public/Login/login'

export type NavbarItemsSmProps = {
  toggleMenu: () => void
}

const NavbarItemsSm: React.FC<NavbarItemsSmProps> = ({ toggleMenu }) => {
  const { isAuth, setAuth } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      {isAuth ? (
        <motion.ul
          className='flex flex-col w-full sm:hidden'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.li
            variants={item}
            onClick={toggleMenu}
            className='text-sm text-center w-full p-4'
          >
            <Link to='/'>Profile</Link>
          </motion.li>

          <motion.li
            variants={item}
            onClick={toggleMenu}
            className='text-sm text-center w-full p-4'
          >
            <Link to='/messages'>Messages</Link>
          </motion.li>

          <motion.li
            variants={item}
            onClick={toggleMenu}
            className='text-sm text-center w-full p-4'
          >
            <Link to='/notifications'>Notifications</Link>
          </motion.li>

          <motion.li
            variants={item}
            onClick={toggleMenu}
            className='text-sm text-center w-full p-4'
          >
            <button
              onClick={() => {
                logout()
                setAuth(false)
                navigate('/')
              }}
            >
              Logout
            </button>
          </motion.li>
        </motion.ul>
      ) : (
        <>
          <motion.ul
            className='flex flex-col w-full sm:hidden'
            variants={container}
            initial='hidden'
            animate='visible'
          >
            <motion.li
              variants={item}
              onClick={toggleMenu}
              className='text-sm text-center w-full p-4'
            >
              <Link to='/'>Home</Link>
            </motion.li>
            <motion.li
              variants={item}
              onClick={toggleMenu}
              className='text-sm text-center w-full p-4'
            >
              <Link to='/Login'>Login</Link>
            </motion.li>
            <motion.li
              variants={item}
              onClick={toggleMenu}
              className='text-sm text-center w-full p-4'
            >
              <Link to='/register'>Register</Link>
            </motion.li>
          </motion.ul>
        </>
      )}
    </>
  )
}

export default NavbarItemsSm
