import React from 'react'

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  text: string
}

const SecondairyButton: React.FC<Props> = ({ onClick, text }: Props) => {
  return (
    <button
      onClick={onClick}
      className='mt-4 py-2 px-8 bg-gray-100 hover:bg-gray-200 text-indigo-700 text-sm rounded-full font-semibold duration-300 ease-in-out'
    >
      {text}
    </button>
  )
}

export default SecondairyButton
