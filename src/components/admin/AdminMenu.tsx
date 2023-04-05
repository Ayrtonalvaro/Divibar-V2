import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <div>
      <h4 className='text-center text-4xl'>Admin panel</h4>
      <ul className='flex flex-col text-2xl gap-2 mt-2'>
        <NavLink to='/dashboard/admin/create-category'>
          <button className=' border-2 w-96 uppercase hover:bg-slate-100'>
            Create category
          </button>
        </NavLink>
        <NavLink to='/dashboard/admin/create-Menu'>
          <button className=' border-2 w-96 uppercase hover:bg-slate-100'>
            Create Menu
          </button>
        </NavLink>
        <NavLink to='/dashboard/admin/users'>
          <button className=' border-2 w-96 uppercase hover:bg-slate-100'>
            Users
          </button>
        </NavLink>
      </ul>
    </div>
  )
}

export default AdminMenu
