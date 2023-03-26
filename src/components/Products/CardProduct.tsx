import React from 'react'
import { Category } from '../../models/Category'
import { Product } from '../../models/Product'

const CardProduct = (category:Category) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img
        className='max-sm:p-5 rounded-md shadow-2xl w-96  cursor-pointer hover:scale-110 duration-300'
        src={category.url}
      />
      <h3 className='text-center font-semibold text-xl mt-5'>
        {category.name}
      </h3>
    </div>
  )
}

export default CardProduct
