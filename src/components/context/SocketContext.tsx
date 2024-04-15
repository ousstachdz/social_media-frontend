import React, { createContext, useEffect, useState } from 'react'
import { SOCKET_URL } from '../api/api'
import useWebSocket from 'react-use-websocket'
import useUserInfo from '../hooks/useUserInfo'

export interface SocketContextType {
  sendMessage: (message: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lastMessage: any
}

const SocketContext = createContext<SocketContextType>({
  sendMessage: () => {},
  lastMessage: undefined,
})

export default SocketContext

interface SocketContextProviderProps {
  children: React.ReactNode
}

const SocketContextProvider: React.FC<SocketContextProviderProps> = ({
  children,
}: SocketContextProviderProps) => {
  const { userInfo } = useUserInfo()

  const id = userInfo?.id
  const [socketUrl, setSocketUrl] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      setSocketUrl(`${SOCKET_URL}/ws/chat/${id}/`)
    }
  }, [id])

  const { sendMessage, lastMessage } = useWebSocket(socketUrl, {
    shouldReconnect: (closeEvent) => {
      console.log('shouldReconnect', closeEvent)
      return true
    },
  })

  if (!socketUrl) {
    // Return a loading state or null while socketUrl is being fetched
    return null
  }

  console.log('subscribed to socket')
  return (
    <SocketContext.Provider value={{ sendMessage, lastMessage }}>
      {children}
    </SocketContext.Provider>
  )
}

export { SocketContextProvider }
