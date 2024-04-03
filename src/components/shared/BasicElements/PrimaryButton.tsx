import React from 'react'

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
  text: string | JSX.Element
}

const PrimaryButton: React.FC<Props> = ({ onClick, text, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='mt-4 py-2 px-8 bg-gradient-to-r from-indigo-600 to-indigo-700 disabled:opacity-25 disabled:cursor-not-allowed text-white text-sm rounded-full font-semibold hover:from-indigo-500 hover:to-indigo-600 duration-300 ease-in-out'
    >
      {text}
    </button>
  )
}

export default PrimaryButton
