import React, { FormEvent, useRef, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../../context/authContext'
import { User } from '../../models/User'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const inputEmailRef = useRef<HTMLInputElement | null>(null)
  const inputPasswordRef = useRef<HTMLInputElement | null>(null)
  const {auth, setAuth} = useAuth()
  const navigate = useNavigate()
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputEmailValue = inputEmailRef.current?.value
    const inputPasswordValue = inputPasswordRef.current?.value

    const loginUser = {
      email: inputEmailValue,
      password: inputPasswordValue
    }
    try {
      const res = await axios.post(
        'http://localhost:3001/api/v1/auth/login',
        loginUser
      )
      if (res && res.data.success) {
        toast.success(res.data && res.data.message)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        })
        localStorage.setItem('auth', JSON.stringify(res.data))
        navigate('/')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='h-screen mt-80'>
      <h1 className='text-center text-yellow-500 text-4xl'>Iniciar sesión</h1>
      <div>
        <div className='flex justify-center '>
          <ToastContainer />
          <form onSubmit={handleLogin} className=' flex flex-col w-96 '>
            <label htmlFor='email'>Email</label>
            <input
              className='px-3 border border-slate-500 rounded'
              type='email'
              ref={inputEmailRef}
              name='email'
              id='email'
              placeholder='email...'
            />
            <label htmlFor='name'>Constraseña</label>
            <input
              className='px-3 border border-slate-500 rounded'
              type='password'
              ref={inputPasswordRef}
              name='password'
              id='password'
              placeholder='password...'
            />
            <button
              className='bg-yellow-500 hover:bg-yellow-400 duration-200 mt-5 rounded-md text-white'
              type='submit'
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
