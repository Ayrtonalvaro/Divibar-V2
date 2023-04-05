import React from 'react'
import AdminMenu from '../../components/admin/AdminMenu'
import { useAuth } from '../../context/authContext'

const AdminDashboard = () => {
  const [auth] = useAuth()
  return (
    <div className='h-screen'>
      <div className=' mt-96 flex justify-center items-center'>
        <AdminMenu />
      </div>
      <h1 className='text-center text-xl'>Admin</h1>
      <ul className='text-center flex justify-center gap-5 text-yellow-500'>
        <li>{auth?.user?.name}</li>
        <li>{auth?.user?.email}</li>
        <li>{auth?.user?.phone}</li>
      </ul>
    </div>
  )
}

export default AdminDashboard
