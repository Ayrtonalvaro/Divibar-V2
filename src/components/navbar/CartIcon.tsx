import React from 'react'

const CartIcon = () => {
  return (
    <div className='bg-yellow-500 w-2 flex justify-center items-center gap-1 text-white py-2 px-6 rounded-full md:ml-8 hover:bg-yellow-400 duration-500 cursor-pointer'>
      <i className='fa-solid fa-cart-shopping '></i>
      <p className='font-bold text-xl'>1</p>
    </div>
  )
}

export default CartIcon
