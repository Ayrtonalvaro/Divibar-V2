import React from 'react'

const Login = () => {
  return (
    <div className='h-screen mt-80'>
      <h1 className='text-center text-yellow-500 text-4xl'>Iniciar sesión</h1>
      <div>
        
        <div className='flex justify-center '>
          <form className=' flex flex-col w-96 '>
            <label htmlFor='email'>Email</label>
            <input
              className='px-3 border border-slate-500 rounded'
              type='email'
              name='email'
              id='email'
              placeholder='email...'
            />
            <label htmlFor='name'>Constraseña</label>
            <input
              className='px-3 border border-slate-500 rounded'
              type='text'
              name='name'
              id='name'
              placeholder='nombre...'
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
