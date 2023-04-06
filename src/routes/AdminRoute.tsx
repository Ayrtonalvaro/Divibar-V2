import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext'
import { Outlet } from 'react-router-dom'
import Spinner from '../components/Spinner'
import axios from 'axios'

const PrivateRoute = () => {
  const [ok, setOk] = useState<boolean>(false)
  const { auth, setAuth } = useAuth()

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        'http://localhost:3001/api/v1/auth/admin-auth'
      )
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
