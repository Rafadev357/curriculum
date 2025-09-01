import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='content__header'>
      <nav className='header__nav'>
        <div className='nav__logo'>
          <img src='../public/logos/r.png' alt='Letra R' width='50px' height='50px' />
          <img src='../public/logos/re.png' alt='Letra D' width= '50px' height='50px' />
        </div>
        <div className='nav__items'>
          <div className='nav__item'>
            <NavLink>
              <img src='../public/logos/hogar.png' alt='Logo hogar' width='20px' height='20px' />
              Home
            </NavLink>
          </div>
          <div className='nav__item'>Sobre mí</div>
          <div className='nav__item'>Proyectos</div>
          <div className='nav__item'>Curriculum</div>
        </div>
      </nav>
    </div>
  )
}
