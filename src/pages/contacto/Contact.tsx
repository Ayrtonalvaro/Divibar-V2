import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen mt-80'>
      <h1 className='text-center text-yellow-500 text-4xl'>Contacto</h1>
      <div>
        <h4 className='text-center text-xl text-slate-400'>
          Datos del usuario
        </h4>
        <div className='flex justify-center '>
          <form className=' flex flex-col w-96 '>
            <label htmlFor='name'>Nombre</label>
            <input
              className='px-3 border border-slate-500 rounded'
              type='text'
              name='name'
              id='name'
              placeholder='nombre...'
            />
            <label htmlFor='email'>Email</label>
            <input
              className='px-3 border border-slate-500 rounded'
              type='email'
              name='email'
              id='email'
              placeholder='email...'
            />
            <label htmlFor='phone'>Teléfono</label>
            <input
              className='px-3 border border-slate-500 rounded'
              type='tel'
              name='phone'
              id='phone'
              placeholder='telefono...'
            />
            <label htmlFor='message'>Mensaje</label>
            <textarea
              className='px-3 border border-slate-500 rounded'
              name='message'
              id='message'
              cols={30}
              rows={10}
              placeholder='Escriba su mensaje...'
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

export default Contact
