import React from 'react'
import NavbarItems from './NavbarItems'
import { IoMenu } from 'react-icons/io5'
import NavbarItemsSm from './NavbarItemsSm'

// type Props = {}

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <nav className='w-full flex flex-col justify-center items-center  border-b'>
      <div className='sm:w-10/12 w-full p-4 h-16 flex justify-between items-center'>
        <h1>Logo</h1>
        <div className='hidden sm:block'>
          <NavbarItems />
        </div>
        <IoMenu onClick={toggleMenu} className='block sm:hidden' />
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
