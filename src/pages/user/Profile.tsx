import React from 'react'
import UserMenu from '../../components/user/UserMenu'

const Profile = () => {
  return (
    <div className='h-screen'>
      <div className='pt-96 px-96'>
        <h1 className='text-xl font-bold'>Profile setting</h1>
        <UserMenu />
      </div>
    </div>
  )
}

export default Profile
