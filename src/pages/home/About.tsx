import React from 'react'

const About = () => {
  return (
    <div className='md:grid grid-cols-2 items-center'>
      <div className='max-sm:px-20'>
        <img
          src='https://static.vecteezy.com/system/resources/thumbnails/000/560/604/small/Vector_logo_with_bottel_beer.jpg'
          alt='logoImg'
          className='rounded-full w-52'
        />
      </div>
      <div className='max-sm mt-10'>
        <h1 className='text-white text-center max-sm:text-4xl text-6xl uppercase font-bold  font-alkatra'>
          Divinobar
        </h1>
        <p className='max-sm:text-xl  text-slate-200 w-96 text-2xl mt-10 font-semibold '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos
          possimus, reiciendis eaque quibusdam facilis dolore facere repellat
          cupiditate praesentium? Praesentium quia consectetur architecto
          debitis ab perferendis cumque nulla voluptatibus!
        </p>
      </div>
    </div>
  )
}

export default About
