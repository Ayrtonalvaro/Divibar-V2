import React from 'react'
import AdminMenu from '../../components/admin/AdminMenu'

const CreateMenu = () => {
  return (
    <div className='grid grid-cols-2 h-screen justify-start items-center'>
      <AdminMenu />
      <h1 className='text-3xl font-bold'>Create Menu </h1>
    </div>
  )
}

export default CreateMenu
