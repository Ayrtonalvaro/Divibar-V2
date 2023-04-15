import React, { useEffect, useRef, useState } from 'react'
import AdminMenu from '../../components/admin/AdminMenu'
import axios from 'axios'
import { Category } from '../../models/Category'
import { toast } from 'react-toastify'

const CreateMenu = () => {
  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputCategoryRef = useRef<HTMLSelectElement>(null)
  const inputDescriptionRef = useRef<HTMLInputElement>(null)
  const inputPriceRef = useRef<HTMLInputElement>(null)
  const inputQuantityRef = useRef<HTMLInputElement>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const filePhotoMenu = useRef<HTMLInputElement>(null)
  const [photo, setPhoto] = useState<File | null>(null)
  const getAllCategories = async () => {
    try {
      try {
        const { data } = await axios.get(
          'http://localhost:3001/api/v1/category/category'
        )
        if (data?.success) {
          setCategories(data?.category)
        }
      } catch (error) {
        console.log(error)
        toast.error('Error getting all categories')
      }
    } catch (error) {}
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      setPhoto(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const menuData = new FormData()
      const name = inputNameRef.current?.value
      const description = inputDescriptionRef.current?.value
      const price = inputPriceRef.current?.value
      const quantity = inputQuantityRef.current?.value
      const category = inputCategoryRef.current?.value
      menuData.append('name', name ?? 'name')
      menuData.append('description', description ?? 'desc')
      menuData.append('price', price ?? '100')
      menuData.append('category', category ?? 'cat')
      menuData.append('quantity', quantity ?? '100')
      if (filePhotoMenu.current?.files?.[0]) {
        menuData.append('photo', filePhotoMenu.current.files[0])
      }
      const res = await axios.post(
        'http://localhost:3001/api/v1/menu/create-menu',
        menuData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      if (res) {
        console.log(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <div className='max-sm:grid-cols-1 grid grid-cols-3  h-screen justify-start items-center'>
      <AdminMenu />
      <div className='col-span-2'>
        <h1 className='text-3xl font-bold mb-5'>Menu panel </h1>
        <div className='flex flex-col gap-2 w-96'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <select
              className='border border-yellow-500 rounded-md p-1 outline-none'
              ref={inputCategoryRef}
            >
              {categories.map((category) => {
                return (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                )
              })}
            </select>
            <label htmlFor='cargar imagen'>
              <input
                type='file'
                name='photo'
                accept='image/*'
                ref={filePhotoMenu}
                onChange={handleImageUpload}
              />
            </label>
            <input
              type='text'
              name='menu'
              className='border border-yellow-500 rounded-md p-1 outline-none'
              placeholder='Menu...'
              ref={inputNameRef}
            />
            <input
              type='text'
              className='border border-yellow-500 rounded-md p-1 outline-none'
              placeholder='Description...'
              ref={inputDescriptionRef}
            />
            <input
              type='text'
              className='border border-yellow-500 rounded-md p-1 outline-none'
              placeholder='Precio'
              ref={inputPriceRef}
            />
            <input
              type='number'
              className='border border-yellow-500 rounded-md p-1 outline-none'
              placeholder='Stock'
              ref={inputQuantityRef}
            />
            <button
              type='submit'
              className='border border-yellow-500 rounded-md hover:bg-yellow-300 duration-200'
            >
              Cargar menu
            </button>
          </form>
        </div>

        <div>
          {photo && (
            <div>
              <img
                src={URL.createObjectURL(photo)}
                alt='menu_img'
                className='w-96 rounded-md pt-2'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateMenu
