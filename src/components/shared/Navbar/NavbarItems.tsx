import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const NavbarItems: React.FC = () => {
  const { isAuth } = useAuth()
  return (
    <>
      {isAuth ? (
        <ul className='flex space-x-4'>
          <li>
            <Link to='/messages'>Messages</Link>
          </li>
          <li>
            <Link to='/notifications'>Notifications</Link>
          </li>
          <li>
            <Link to='/explore'>Explore</Link>
          </li>
        </ul>
      ) : (
        <>
          <ul className='flex space-x-8'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
        </>
      )}
    </>
  )
}

export default NavbarItems
