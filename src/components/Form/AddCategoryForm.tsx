import axios from 'axios'
import React, { FormEvent, useRef } from 'react'
import { toast } from 'react-toastify'

const AddCategoryForm = () => {
  const inputCategoryRef = useRef<HTMLInputElement | null>(null)

  const handleCategory = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault
    const inputCategory = inputCategoryRef.current?.value
    const newCategory = {
      name: inputCategory
    }
    try {
      const res = await axios.post(
        'http://localhost:3001/api/v1/category/create-category',
        newCategory
      )
      console.log(res.data)
      if (res) {
        toast.success(`categoria creada correcatemnete`)
      } else {
        toast.error('Algo salio mal')
      }
    } catch (error) {
      console.log(error)
      toast.error('Algo salio mal')
    }
  }
  return (
    <>
      <div className=''>
        <form
          onSubmit={handleCategory}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
              Categoria
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              ref={inputCategoryRef}
              placeholder='Ingrese la categoria'
            />
            <div>
              <button
                className='hover:bg-green-500 bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Agregar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddCategoryForm
