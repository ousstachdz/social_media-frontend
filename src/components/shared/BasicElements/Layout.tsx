import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex justify-center'>
      <div className='sm:w-10/12 w-full'>{children}</div>
    </div>
  )
}

export default Layout
