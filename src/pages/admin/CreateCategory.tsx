import React, { FormEvent } from 'react'
import AdminMenu from '../../components/admin/AdminMenu'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Category } from '../../models/Category'
import { toast } from 'react-toastify'
import CategoryForm from '../../components/Form/CategoryForm'
import AddCategoryForm from '../../components/Form/AddCategoryForm'
const CreateCategory = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [modalState, setModalState] = useState<boolean>(false)
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        'http://localhost:3001/api/v1/category/category'
      )
      if (data.success) {
        setCategories(data.category)
      }
    } catch (error) {
      console.log(error)
      toast.error('Error getting all categories')
    }
  }

  const deleteCategory = async (pId: string) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/api/v1/category/delete-category/${pId}`
      )

      if (data.success) {
        toast.success(`category is deleted`)
        getAllCategories()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Somtihing went wrong')
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  const handleModal = () => {
    setModalState(!modalState)
  }

  return (
    <div className='max-sm:grid-cols-1 grid grid-cols-3 h-screen items-center relative'>
      <AdminMenu />
      <div className='col-span-2 p-10'>
        <div>
          <AddCategoryForm />
        </div>
        <div className='flex flex-col'>
          <div className='-my-2 overflow-x-auto '>
            <div className='py-2 align-middle   sm:px-6 lg:px-8'>
              <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Categoria
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        Acción
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {categories.map((category) => {
                      return (
                        <>
                          <tr>
                            <td
                              key={category._id}
                              className='px-6 py-4 whitespace-nowrap'
                            >
                              <div className='flex items-center'>
                                <div className='ml-4'>
                                  <div className='text-sm font-medium text-gray-900'>
                                    {category.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap flex flex-col gap-2 relative'>
                              <button
                                onClick={handleModal}
                                className='bg-green-600 w-20 rounded-md text-white hover:bg-green-400 duration-200'
                              >
                                Editar
                              </button>
                              {modalState && (
                                <div className=''>
                                  <CategoryForm pId={category._id} />
                                </div>
                              )}

                              <button
                                onClick={() => deleteCategory(category._id)}
                                className='bg-red-600 w-20 rounded-md text-white hover:bg-red-400 duration-200'
                              >
                                Eliminar
                              </button>
                            </td>
                          </tr>
                        </>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCategory
