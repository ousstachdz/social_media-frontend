import { axiosInstance } from '../../../api/api'
import { registerType } from './register'

export const validateData = (data: registerType) => {
  const error = [] as Array<{ [key: string]: string }>

  if (data.username === '') {
    error.push({ username: 'username is required' })
  }
  if (data.firstname === '') {
    error.push({ firstname: 'firstname is required' })
  }
  if (data.lastname === '') {
    error.push({ lastname: 'lastname is required' })
  }
  if (data.address === '') {
    error.push({ address: 'address is required' })
  }
  if (data.photo === undefined) {
    error.push({ photo: 'photo is required' })
  }

  if (data.passwordConfirmation !== data.password) {
    error.push({ re_password: 'password mismatch' })
  }

  if (data.password === '') {
    error.push({ password: 'password is required' })
  }
  if (data.passwordConfirmation === '') {
    error.push({ passwordConfirmation: 'password confirmation is required' })
  }
  console.log(error)
  return error
}

export const postData = async (data: registerType) => {
  const dataForm = new FormData()
  dataForm.append('photo', data.photo || '')
  dataForm.append('first_name', data.firstname)
  dataForm.append('last_name', data.lastname)
  dataForm.append('date_of_birth', data.birthdate)
  dataForm.append('address', data.address)
  dataForm.append('username', data.username)
  dataForm.append('email', data.email)
  dataForm.append('password', data.password)

  return axiosInstance.post('create_user', dataForm, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
