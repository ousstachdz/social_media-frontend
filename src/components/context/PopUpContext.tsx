import React, { createContext, useState } from 'react'
import PopUps, { popUpType } from '../shared/PopUps/PopUps'

export interface PopUpsContextType {
  popUps: Array<popUpType>
  setPopUps: React.Dispatch<React.SetStateAction<Array<popUpType>>>
}

const PopUpsContext = createContext<PopUpsContextType>({
  popUps: [],
  setPopUps: () => {},
})

export default PopUpsContext

interface PopUpsContextProviderProps {
  children: React.ReactNode
}

const PopUpsContextProvider: React.FC<PopUpsContextProviderProps> = ({
  children,
}: PopUpsContextProviderProps) => {
  const [popUps, setPopUps] = useState<Array<popUpType>>([])

  console.log(popUps)
  return (
    <PopUpsContext.Provider value={{ popUps, setPopUps }}>
      <div className='relative z-50'>
        <div className='absolute top-16 right-0 z-50 max-h-screen overflow-y-scroll hide-scrollbar'>
          {popUps.map((popUp, i) => {
            return (
              <PopUps
                key={i}
                id={i}
                title={popUp.title}
                type={popUp.type}
                message={popUp.message}
              />
            )
          })}
        </div>
        {children}
      </div>
    </PopUpsContext.Provider>
  )
}

export { PopUpsContextProvider }
