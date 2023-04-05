import React from 'react'
import UserMenu from '../../components/user/UserMenu'

const Dashboard = () => {
  return (
    <div className=' h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl'>Panel User</h1>
      <UserMenu />
    </div>
  )
}

export default Dashboard
