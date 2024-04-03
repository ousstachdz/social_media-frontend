import Coockies from 'js-cookie'
import axios from 'axios'

export const BASE_URL = 'http://localhost:8000'

export const SOCKET_URL = BASE_URL.startsWith('https://')
  ? `wss://${BASE_URL.substring(8)}`
  : `ws://${BASE_URL.substring(7)}`

export const axiosInstance = axios.create({
  baseURL: BASE_URL + '/api/v1/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL + '/api/v1/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
})

export const refreshToken = () => {
  const refresh = async () => {
    const refreshToken = Coockies.get('refresh')
    await axiosInstance
      .post(`token/refresh/`, { refresh: refreshToken })
      .then((response) => {
        const access = response.data.access
        Coockies.set('access', access)
      })
      .catch((error) => {
        console.warn(error)
        Coockies.remove('refresh')
        Coockies.remove('access')
      })
    return Coockies.get('access')
  }
  return refresh
}
