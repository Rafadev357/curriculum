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
            <NavLink className='nav__item'>
              <img src='../public/logos/hogar.png' alt='Logo hogar' width='20px' height='20px' />
              <span>Home</span>
            </NavLink>
          
          <NavLink className='nav__item'>
            <img src='../public/logos/usuario.png' alt='Logo usuario' width='20px' height='20px'/>
            <span>Sobre mí</span>
          </NavLink>
          <NavLink className='nav__item'>
            <img src='../public/logos/project-management.png' alt='Logo proyecto' width='20px' height='20px'/>
            <span>Proyectos</span>
          </NavLink>
          <NavLink className='nav__item'>
            <img src='../public/logos/resumen.png' alt='Logo curriculum' width='20px' height='20px'/>
            <span>Currículum</span>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
