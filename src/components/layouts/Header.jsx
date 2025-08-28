import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='content__header'>
      <nav className='header__nav'>
        <div>Aquí va el logo</div>
        <div>
          <div>Home</div>
          <div>Sobre mí</div>
          <div>Proyectos</div>
          <div>Curriculum</div>
        </div>
      </nav>
    </div>
  )
}
