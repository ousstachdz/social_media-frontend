import React from 'react'
import Friendships from './Friendships'
import FindAccount from './FindAccount'
import SearchResults from './SearchResults'
import NoKeyWord from './NoKeyWord'

const Explore: React.FC = () => {
  const [keyWord, setKeyWord] = React.useState<string>('')
  return (
    <div className='flex'>
      <div className='w-full md:w-1/2 '>
        <FindAccount setKeyWord={setKeyWord} />
        {keyWord === '' ? <NoKeyWord /> : <SearchResults keyWord={keyWord} />}
      </div>
      <div className='w-1/2 hidden md:block'>
        <Friendships />
      </div>
    </div>
  )
}

export default Explore
