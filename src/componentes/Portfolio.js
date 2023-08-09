import React from 'react'
import "../hojas-de-estilos/Portfolio.css"
// importo todas las imagenes que van a aparecer en el portfolio
import instagram from '../media/Portfolio/instagram.webp'
import facebook from '../media/Portfolio/facebook.jpg'
import wordpress from '../media/Portfolio/wordpress.webp'
import ISP20 from '../media/Portfolio/ISP20.jpg'

// y después las llamo
export default function Portfolio() {
  return (
    <div>
      <div className='container-cards'>
        <div className='card'>
          <a target='_blank' href='https://celsoolmos.000webhostapp.com/'>
            <img src={wordpress} />
            <h4>Sitio en Wordpress</h4>
          </a>
        </div>
        <div className='card'>
          <a target='_blank' href='https://xgustiolmsx.github.io/Instagram/'>
            <img src={instagram}/>
            <h4>Instagram - copia</h4>
          </a>
        </div>
        <div className='card'>
          <a target='_blank' href='https://xgustiolmsx.github.io/Facebook/'>
            <img src={facebook} />
            <h4>Facebook - copia</h4>
          </a>
        </div>
      </div>
    </div>
  )
}
