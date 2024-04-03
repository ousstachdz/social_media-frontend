import { useContext } from 'react'
import PopUpsContext, { PopUpsContextType } from '../context/PopUpContext'

const usePopUps = (): PopUpsContextType => {
  const { popUps, setPopUps } = useContext(PopUpsContext)

  return { setPopUps, popUps } // Added the missing popUps property
}

export default usePopUps
