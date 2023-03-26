import React from 'react'
import CardEvents from './CardEvents'

const Eventos = () => {
  return (
    <div className='bg-black relative'>
      <div className='max-sm:bg-contain bg-hero-events  bg-cover justify-center items-center flex-col h-screen opacity-70 text-white'></div>
      <div className='max-sm:absolute max-sm:top-60 md:absolute md:top-64 md:left-96'>
        <CardEvents />
      </div>
    </div>
  )
}

export default Eventos
