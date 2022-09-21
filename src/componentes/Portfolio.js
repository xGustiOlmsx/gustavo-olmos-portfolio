/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "../hojas-de-estilos/Portfolio.css"
import instagram from '../media/instagram.webp'
import facebook from '../media/facebook.jpg'

export default function Portfolio() {
  return (
    <div>
      <div className='container-cards'>
      <div className='card'>
        <a src='#'>
        <img src={instagram}/>
        <h4>Instagram - copia</h4>
        </a>
      </div>
      <div className='card'>
      <a src='#'>
        <img src={facebook} />
        <h4>Facebook - copia</h4>
        </a>
      </div>
      <div className='card'>
      <a src='#'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/800px-YouTube_social_white_square_%282017%29.svg.png' />
        <h4>Youtube - copia</h4>
        </a>
      </div>
      <div className='card'>
      <a src='#'>
        <img src='https://wpmarmite.com/wp-content/uploads/2019/01/wordpress-com-org.jpg' />
        <h4>Sitio en Wordpress</h4>
        </a>
      </div>
      <div className='card'>
      <a src='#'>
        <img src='https://disenowebakus.net/imagenes/articulos/elementos-sitio-web.jpg' />
        <h4>Sitio web inicial - ISP20</h4>
        </a>
      </div>
      </div>
    </div>
  )
}
