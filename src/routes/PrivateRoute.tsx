import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/authContext'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
const PrivateRoute = () => {
  const [ok, setOk] = useState<boolean>(false)
  const [auth, setAuth] = useAuth()

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get('http://localhost:3001/api/v1/auth/user-auth')
      if (res.data.ok) {
        setOk(true)
      } else {
        setOk(false)
      }
    }
    if (auth?.token) {
      authCheck()
    }
  }, [auth?.token])
  return ok ? (
    <Outlet />
  ) : (
    <div className='flex justify-center items-center h-screen'>
      <Spinner />
    </div>
  )
}

export default PrivateRoute
