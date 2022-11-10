import React from 'react'
// acá, muy importante, importé NavLink de react-router-dom
import {NavLink} from 'react-router-dom';
// importo la imagen que va a aparecer en el home
import Responsive from '../media/Home/Responsive.png'
import '../hojas-de-estilos/Home.css'

export default function Home() {
  return (
    <div>
      <section className='home'>
          {/* llamo la imagen que acabo de importar */}
          <img className='home-img' src={Responsive}/>
          {/* ahora, uso la etiqueta NavLink que importé de react router dom */}
          <button type='button'><NavLink to="/Portfolio">Portfolio</NavLink></button>
      </section>
    </div>
  )
}
