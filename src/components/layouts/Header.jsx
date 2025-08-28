import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='content__header'>
      <nav className='header__nav'>
        <div>Aquí va el logo</div>
        <div>
          <div>
            <NavLink>
              <img src='../public/logos/hogar.png' alt='Logo hogar' width='20px' height='20px' />
              Home
            </NavLink>
          </div>
          <div>Sobre mí</div>
          <div>Proyectos</div>
          <div>Curriculum</div>
        </div>
      </nav>
    </div>
  )
}
