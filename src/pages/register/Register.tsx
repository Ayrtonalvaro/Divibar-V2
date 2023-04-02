import React, { FormEvent, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const inputNameRef = useRef<HTMLInputElement | null>(null)
  const inputEmailRef = useRef<HTMLInputElement | null>(null)
  const inputPasswordRef = useRef<HTMLInputElement | null>(null)
  const inputPhoneRef = useRef<HTMLInputElement | null>(null)
  const inputAddressRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputNameValue = inputNameRef.current?.value
    const inputEmailValue = inputEmailRef.current?.value
    const inputPasswordValue = inputPasswordRef.current?.value
    const inputPhoneValue = inputPhoneRef.current?.value
    const inputAddressValue = inputAddressRef.current?.value

    const newUser = {
      name: inputNameValue,
      email: inputEmailValue,
      password: inputPasswordValue,
      phone: inputPhoneValue,
      address: inputAddressValue
    }
    console.log(newUser)
    try {
      const res = await axios.post(`http://localhost:3001/api/v1/auth/register`,newUser)
      if (res.data.success) {
        toast.success(res.data.message)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='h-screen mt-80'>
      <h1 className='text-center text-yellow-500 text-4xl'>Registrarse</h1>
      <ToastContainer />
      <div>
        <h4 className='text-center text-xl text-slate-400'>
          Ingrese sus datos
        </h4>
        <div className='flex justify-center '>
          <form onSubmit={handleSubmit} className=' flex flex-col w-96 '>
            <label htmlFor='name'>Nombre</label>
            <input
              className='px-3 border border-slate-500 rounded'
              type='text'
              ref={inputNameRef}
              name='name'
              id='name'
              placeholder='nombre...'
              required
            />
            <label htmlFor='email'>Email</label>
            <input
              className='px-3 border border-slate-500 rounded'
              type='email'
              ref={inputEmailRef}
              name='email'
              id='email'
              placeholder='email...'
              required
            />
            <label htmlFor='password'>Password</label>
            <input
              className='px-3 border border-slate-500 rounded'
              type='password'
              ref={inputPasswordRef}
              name='password'
              id='password'
              placeholder='password...'
              required
            />
            <label htmlFor='phone'>Teléfono</label>
            <input
              className='px-3 border border-slate-500 rounded'
              type='tel'
              ref={inputPhoneRef}
              name='phone'
              id='phone'
              placeholder='telefono...'
              required
            />
            <label htmlFor='address'>Direccion</label>
            <input
              className='px-3 border border-slate-500 rounded'
              name='address'
              type='text'
              ref={inputAddressRef}
              id='address'
              placeholder='Address...'
              required
            />
            <button
              className='bg-yellow-500 hover:bg-yellow-400 duration-200 mt-5 rounded-md text-white'
              type='submit'
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
