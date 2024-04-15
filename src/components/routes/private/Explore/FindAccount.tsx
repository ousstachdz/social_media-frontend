import React from 'react'
import Input from '../../../shared/BasicElements/Input'

type Props = {
  setKeyWord: React.Dispatch<React.SetStateAction<string>>
}

const FindAccount: React.FC<Props> = ({ setKeyWord }: Props) => {
  return (
    <div className='mx-4 my-10 flex justify-center'>
      <Input
        type='text'
        name='keyword'
        label=''
        placeHolder='Search for an account'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setKeyWord(e.target.value)
        }}
      />
    </div>
  )
}

export default FindAccount
