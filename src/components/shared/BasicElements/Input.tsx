import React, { useEffect, useRef } from 'react'
import { FaEyeSlash, FaRegEye } from 'react-icons/fa'
type Props = {
  label?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  type: string
  name: string
  errors?: Array<{ [key: string]: string }>
  size?: 'small' | 'flex'
  placeHolder?: string
}

const Input: React.FC<Props> = ({
  name,
  label,
  onChange,
  value,
  type,
  errors,
  size,
  placeHolder,
}: Props) => {
  const labelRef = useRef<HTMLLabelElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const [typeInput, setTypeInput] = React.useState<string>(type)
  const [error, setError] = React.useState<
    { [key: string]: string } | undefined
  >(undefined)
  const togglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (type === 'password') {
      console.log('toggle')
      setShowPassword(!showPassword)
      showPassword ? setTypeInput('password') : setTypeInput('text')
    }
  }

  const [canDisplayError, setCanDisplayError] = React.useState<boolean>(false)
  useEffect(() => {
    setError(errors?.find((error) => error[name]))
  }, [canDisplayError])

  useEffect(() => {
    if (type === 'date') {
      // select the date before 18 years
      const minDatee = new Date()
      labelRef.current?.classList.remove('translate-y-8')
      minDatee.setFullYear(minDatee.getFullYear() - 18)
      if (inputRef.current) {
        inputRef.current.value =
          minDatee.getFullYear() +
          '-' +
          ('0' + (minDatee.getMonth() + 1)).slice(-2) +
          '-' +
          ('0' + minDatee.getDate()).slice(-2)
      }
    }
  }, [type])
  const id = Math.random().toString(36).substring(7)
  return (
    <div className='flex flex-col -mt-1'>
      {label && (
        <label
          htmlFor={id}
          ref={labelRef}
          className='z-40 text-xs font-thin text-gray-600 text-center translate-y-8 duration-300 py-1.5 px-4 cursor-text capitalize'
        >
          {label}
        </label>
      )}
      <div className='relative'>
        <input
          ref={inputRef}
          min='1940-12-31'
          max={inputRef.current?.value}
          autoComplete='off'
          id={id}
          onFocus={(_) => {
            _
            labelRef.current?.classList.remove('translate-y-8', 'font-thin')
            labelRef.current?.classList.add('font-semibold')
            setCanDisplayError(false)
          }}
          onBlur={(e) => {
            setCanDisplayError(true)

            if (e.target.value === '') {
              labelRef.current?.classList.add('translate-y-8', 'font-thin')
              labelRef.current?.classList.remove('font-semibold')
            }
          }}
          name={name}
          placeholder={placeHolder || ''}
          className={`inline rounded-full bg-gray-100 border border-gray-300 px-2 py-1 focus:outline-none ${
            error ? 'ring-1 ring-red-600' : 'focus:ring-2 focus:ring-blue-600'
          } ${
            size === 'small'
              ? 'sm:w-32 w-24'
              : size === 'flex'
              ? 'w-full'
              : 'sm:w-72 w-64'
          } focus:border-transparent min-w-32`}
          onChange={onChange}
          value={value}
          type={typeInput}
        />
        {type === 'password' && (
          <button
            onClick={togglePassword}
            className='absolute bottom-0 right-2 top-0'
          >
            {showPassword ? (
              <FaEyeSlash className='z-50' />
            ) : (
              <FaRegEye className='z-50' />
            )}
          </button>
        )}
      </div>
      {error && (
        <div className='my-1'>
          <p className='text-red-600 text-xs text-center'>{error[name]}</p>
        </div>
      )}
    </div>
  )
}

export default Input
