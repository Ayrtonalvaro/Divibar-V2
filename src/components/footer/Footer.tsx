import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from '../../models/Link'
import { SocialLink } from '../../models/SocialLink'

const Footer = () => {
  const links: Link[] = [
    { name: 'Menus', to: '/menus' },
    { name: 'Eventos', to: '/eventos' },
    { name: 'Locales', to: '/locales' },
    { name: 'Contacto', to: '/contacto' }
  ]

  const socialLink: SocialLink[] = [
    {
      name: 'facebook',
      url: ''
    },
    {
      name: 'twitter',
      url: ''
    },
    {
      name: 'instagram',
      url: ''
    }
  ]
  return (
    <div className='bg-slate-800 flex justify-between items-center px-20 text-white  pt-5 pb-5'>
      <div className='flex gap-3 items-center'>
        <img
          className='w-16 rounded-full'
          src='https://static.vecteezy.com/system/resources/thumbnails/000/560/604/small/Vector_logo_with_bottel_beer.jpg'
        />
        <h5 className='text-white'>
          © Divinobar 2023 . Todos los derechos reservados
        </h5>
      </div>
      <ul className='flex'>
        {links.map((link) => {
          return (
            <NavLink key={link.name} to={link.to}>
              <li className='md:ml-8 text-xl text-white'>
                <p className=' hover:text-yellow-500 duration-300'>
                  {link.name}
                </p>
              </li>
            </NavLink>
          )
        })}
      </ul>
      <ul className='flex gap-5 text-2xl'>
        {
          socialLink.map((socialRed) => {
            return (
              <li key={socialRed.name}>
                <a href={socialRed.url}>
                  <i className={`fa-brands fa-${socialRed.name} hover:text-yellow-500 duration-300`}></i>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Footer
