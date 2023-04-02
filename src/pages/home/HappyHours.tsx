import React from 'react'

const HappyHours = () => {
  return (
    <div>
      <h2 className='text-center text-5xl font-bold text-yellow-500 mt-10'>
        Happy Hours
      </h2>
      <div className='h-screen max-sm:grid-cols-1 justify-center  grid grid-cols-2'>
        <div className='relative p-20 max-sm:hidden '>
          <div className='bg-hero-happy-hour bg-cover bg-center bg-no-repeat opacity-80 bg-fixed max-sm:h-96 h-screen'></div>
        </div>
        <div className='flex justify-center items-center '>
          <div className='flex flex-col justify-center items-center gap-10 border h-96 w-96 border-slate-600 rounded-md shadow-md'>
            <h6 className='text-xl'>Te esperamos!!</h6>
            <h2 className='font-bold text-yellow-500 text-3xl'>
              Happy Hours
            </h2>
            <h4 className='text-2xl'>Horario</h4>
            <p className='font-extrabold'>18:00hs a 20:00hs</p>
            <button className='bg-yellow-400 rounded-md w-20 hover:bg-yellow-500 duration-200 '>Reservar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HappyHours
