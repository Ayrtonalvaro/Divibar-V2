import React, { useState } from 'react'
import { Menu } from '../../models/Menu'
import CardMenus from './CardMenus'

type MenusList = {
  menus: Menu[]
}
const GridMenus = (menus: MenusList) => {
  return (
    <div className='max-sm:grid-cols-1 grid grid-cols-4 gap-5 p-10'>
      {menus.menus.map((menu) => {
        return (
          <CardMenus
            key={menu.name}
            name={menu.name}
            description={menu.description}
            price={menu.price}
            image={menu.image}
          />
        )
      })}
    </div>
  )
}

export default GridMenus
