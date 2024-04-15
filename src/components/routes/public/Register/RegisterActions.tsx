import React, { Dispatch, SetStateAction } from 'react'
import SecondairyButton from '../../../shared/BasicElements/SecondairyButton'
import PrimaryButton from '../../../shared/BasicElements/PrimaryButton'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

type Props = {
  page: number
  isValid: boolean
  setPage: Dispatch<SetStateAction<number>>
  RegisterAction: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isLoading: boolean
}

const RegisterActions: React.FC<Props> = ({
  page,
  setPage,
  isValid,
  RegisterAction,
  isLoading,
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
  console.log(isLoading && !isValid)
  return (
    <div className='flex justify-between w-full'>
      {page > 0 ? (
        <SecondairyButton text='Back' onClick={BackAction} />
      ) : (
        <span></span>
      )}
      {page === 0 ? (
        <SecondairyButton text='Next' onClick={NextAction} />
      ) : (
        <PrimaryButton
          text={
            isLoading ? (
              <AiOutlineLoading3Quarters className='animate-spin w-4 h-4 fill-white' />
            ) : (
              'Register'
            )
          }
          onClick={RegisterAction}
          disabled={!isValid ? !isLoading : false}
        />
      )}
    </div>
  )
}

export default RegisterActions
