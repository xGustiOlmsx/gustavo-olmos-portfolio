import {NavLink} from 'react-router-dom';
import React from 'react'
import './hojas-de-estilos/Nav.css'

export default function Nav() {
  return (
    <header className='nav'>
      <div className='título'>
        <h1></h1>
      </div>
      <nav className='navBar'>
        <NavLink className="nav-a" to="/">Home</NavLink>
        <NavLink className="nav-a" to="/About">About</NavLink>
        <NavLink className="nav-a" to="/Portfolio">Portfolio</NavLink>
        <NavLink className="nav-a" to="/Servicios">Servicios</NavLink>
        <NavLink className="nav-a" to="/Contactos">Contacto</NavLink>
      </nav>
    </header>
    
  )
}
