import React from 'react'

const CardEvents = () => {
  return (
    <div className='md:pl-52'>
      <h1 className='text-6xl text-center pt-10 text-white '>Eventos</h1>
      <div className='flex  justify-center'>
        <div className='bg-white p-8 rounded-lg mt-10 h-72 pt-20 opacity-90'>
          <h4 className='text-center text-xl text-black'>Reservá tu evento</h4>
          <span className='text-yellow-600 flex justify-center'>
            ¡Te esperamos!
          </span>
          <div className='text-center'>
            <p className='font-semibold text-black'>
              Tenemos las mejores platos para que llevas a cabo tu evento en el
              mejor lugar.
            </p>
            <button className='bg-yellow-400 rounded-md w-20 h-10 mt-10 text-xl text-center'>
              Reservar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardEvents
