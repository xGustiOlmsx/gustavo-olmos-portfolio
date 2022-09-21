import React from 'react'
import './hojas-de-estilos/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='icons-redes'>
        <a className='icon-facebook icon'><i class="fa-brands fa-facebook-f"></i></a>
        <a className='icon-linkedin icon'><i class="fa-brands fa-linkedin-in"></i></a>
        <a className='icon-github icon'><i class="fa-brands fa-github"></i></a>
        <a className='icon-instagram icon'><i class="fa-brands fa-instagram"></i></a>
      </div>
      <div className='copy'>
        Copyright <i class="fa-regular fa-copyright"></i> 2022 Gustavo Olmos | Diseñador y desarrollador web independiente San Justo - Santa Fe
      </div>
    </div>
  )
}
