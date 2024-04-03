import React, { Dispatch, SetStateAction } from 'react'
import SecondairyButton from '../../../shared/BasicElements/SecondairyButton'
import PrimaryButton from '../../../shared/BasicElements/PrimaryButton'

type Props = {
  page: number
  isValid: boolean
  setPage: Dispatch<SetStateAction<number>>
  RegisterAction: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const RegisterActions: React.FC<Props> = ({
  page,
  setPage,
  isValid,
  RegisterAction,
}: Props) => {
  const NextAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault()
    setPage(1)
  }
  const BackAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault()
    setPage(0)
  }
  return (
    <div className='flex justify-between w-full'>
      {page > 0 ? (
        <SecondairyButton text='Back' onClick={BackAction} />
      ) : (
        <span></span>
      )}
      {page === 0 ? (
        <SecondairyButton text='Next' onClick={NextAction} />
      ) : isValid ? (
        <PrimaryButton text='Register' onClick={RegisterAction} />
      ) : (
        <PrimaryButton
          text='Register'
          onClick={RegisterAction}
          disabled={true}
        />
      )}
    </div>
  )
}

export default RegisterActions
