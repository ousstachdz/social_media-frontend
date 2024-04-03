import React, { useState } from 'react'
import { BiSolidCameraOff } from 'react-icons/bi'
import { MdAddAPhoto } from 'react-icons/md'

type Props = {
  data: object
  setData: React.Dispatch<React.SetStateAction<object>>
}

const InputImage: React.FC<Props> = ({ data, setData }: Props) => {
  const [imageFile, setImageFile] = useState<File | null>(null)

  return (
    <div className=' '>
      {imageFile?.name ? (
        <div className='relative'>
          <div className='h-32 w-32  rounded-full bg-slate-200 overflow-hidden'>
            <img src={URL.createObjectURL(imageFile)} alt='photo' />
          </div>
          <div className='pt-2  bottom-0 left-0 right-0 flex justify-center'>
            <BiSolidCameraOff
              className='h-6 w-6 fill-indigo-700 cursor-pointer'
              onClick={() => {
                setImageFile(null)
                setData({ ...data, photo: undefined })
              }}
            />
          </div>
        </div>
      ) : (
        <label htmlFor='image' className='cursor-pointer'>
          <div className=' p-4'>
            <MdAddAPhoto className='sm:h-32 sm:w-32 h-20 w-20 mt-10 sm:mt-0 fill-indigo-700' />
          </div>
          <input
            id='image'
            type='file'
            onChange={(e) => {
              const file = e.target.files?.[0]
              setData({ ...data, photo: file })
              if (file) {
                setImageFile(file)
              }
            }}
            className='hidden'
          />
        </label>
      )}
    </div>
  )
}
export default InputImage
