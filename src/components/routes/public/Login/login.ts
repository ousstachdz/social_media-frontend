import { axiosInstance } from '../../../api/api'
import Cookies from 'js-cookie'

export type loginType = {
  username: string
  password: string
}

export const login = async (data: loginType) => {
  return await axiosInstance
    .post('/login/', data)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}

export const saveTokens = (access: string, refresh: string) => {
  Cookies.set('access', access, { secure: true })
  Cookies.set('refresh', refresh, { secure: true })
}

export const logout = () => {
  Cookies.remove('access', { path: '/' })
  Cookies.remove('refresh', { path: '/' })
}
