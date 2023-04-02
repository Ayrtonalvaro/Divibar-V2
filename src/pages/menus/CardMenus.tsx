import React from 'react'
import { Menu } from '../../models/Menu'

const CardMenus = (menu: Menu) => {
  return (
    <div>
      <div className='flex justify-center'>
        <img className='w-96 rounded-md' src={menu.image} />
      </div>
      <h3 className='text-center font-bold text-2xl text-yellow-500'>
        {menu.name}
      </h3>
      <p className='text-center text-xl font-semibold'>{menu.description}</p>
      <p className='text-center text-2xl text-slate-500'>${menu.price}</p>
      <div className='flex justify-center'>
        <button className='bg-yellow-500 rounded-md w-20 '>Agregar</button>
      </div>
    </div>
  )
}

export default CardMenus
