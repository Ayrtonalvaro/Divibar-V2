import React from 'react'
import About from './About'

const Banner = () => {
  return (
    <div>
      <div className='bg-black '>
        <div className=' mt-32 bg-hero-banner bg-fixed max-sm:bg-contain opacity-40   bg-cover  md:bg-no-repeat h-screen'></div>
      </div>
      <div className=' absolute max-sm:top-60 left-5 md:top-20 md:left-96'>
        <About />
      </div>
    </div>
  )
}

export default Banner
