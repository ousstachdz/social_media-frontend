import { useEffect } from 'react'
import Coockies from 'js-cookie'
import { axiosPrivate, refreshToken } from '../api/api'

export const useAxiosPrivate = () => {
  const refresh = refreshToken()

  useEffect(() => {
    const requestInstance = axiosPrivate.interceptors.request.use(
      (config) => {
        const access = Coockies.get('access')
        config.headers.Authorization = `Bearer ${access}`
        return config
      },
      (error) => Promise.reject(error)
    )

    const responseInstance = axiosPrivate.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        const prvRequest = error?.config
        if (error.response?.status == 401 && !prvRequest?.sent) {
          prvRequest.sent = true
          const access = await refresh()
          prvRequest.headers['Authorization'] = `Bearer ${access}`
          console.log(prvRequest)
          return await axiosPrivate(prvRequest)
        }
        return Promise.reject(error)
      }
    )
    return () => {
      axiosPrivate.interceptors.response.eject(responseInstance)
      axiosPrivate.interceptors.request.eject(requestInstance)
    }
  }, [refresh])

  return axiosPrivate
}
