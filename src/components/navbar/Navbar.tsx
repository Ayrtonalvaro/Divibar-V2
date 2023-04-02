import { Link } from '../../models/Link'
import { NavLink } from 'react-router-dom'
import CartIcon from './CartIcon'
import { useState } from 'react'

const Navbar = () => {
  const links: Link[] = [
    { name: 'Home', to: '/' },
    { name: 'Menus', to: '/menus' },
    { name: 'Eventos', to: '/eventos' },
    { name: 'Contacto', to: '/contacto' },
    { name: 'Register', to: '/register' },
    { name: 'Login', to: '/login' },
    
  ]

  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-around bg-slate-800 py-5 md:px-10 px-7'>
        <div>
          <span>
            <img
              className='w-16 rounded-full'
              src='https://static.vecteezy.com/system/resources/thumbnails/000/560/604/small/Vector_logo_with_bottel_beer.jpg'
            />
          </span>
          <h2 className='text-xl font-semibold text-yellow-500'>Divinobar</h2>
        </div>
        <div
          onClick={handleOpen}
          className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden'
        >
          {open ? (
            <i className='fa-solid fa-times'></i>
          ) : (
            <i className='fa-solid fa-bars'></i>
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 max-sm:pt-3 mt-8 absolute md:static bg-slate-800 md:z-auto z-[-1] 
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? 'top-20' : 'top-[-300px]'
        }`}
        >
          {links.map((link) => {
            return (
              <NavLink key={link.name} to={link.to}>
                <li className='md:ml-8 text-xl text-white'>
                  <p className=' hover:text-yellow-500 duration-500'>
                    {link.name}
                  </p>
                </li>
              </NavLink>
            )
          })}
          <NavLink to='/compra'>
            <CartIcon />
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
