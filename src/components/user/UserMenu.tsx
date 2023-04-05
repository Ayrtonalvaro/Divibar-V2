import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <div>
      <ul className='flex flex-col text-2xl gap-2 mt-2'>
        <NavLink to='/dashboard/user/profile'>
          <button className=' border-2 w-96 uppercase hover:bg-slate-100'>
            Profile
          </button>
        </NavLink>
        <NavLink to='/dashboard/user/orders'>
          <button className=' border-2 w-96 uppercase hover:bg-slate-100'>
            Orders
          </button>
        </NavLink>
      
      </ul>
    </div>
  )
}

export default UserMenu
