export type message = {
  content: string
  id: number
  receiver: number
  sender: number
  timestamp: string
}
export type userMessaging = {
  id: number
  first_name: string
  last_name: string
  photo: string
  username: string
}

export type conversations = {
  id: number
  user1: userMessaging
  user2: userMessaging
  last_message: message
  timestamp: string
}

export type conversation = {
  id: number
  user1: userMessaging
  user2: userMessaging
  timestamp: string
}

export type messages = {
  messages: message[]
}
