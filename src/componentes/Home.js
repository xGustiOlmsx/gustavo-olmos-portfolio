import React from 'react'
import {NavLink} from 'react-router-dom';
import Responsive from '../media/Responsive.png'
import '../hojas-de-estilos/Home.css'

export default function Home() {
  return (
    <div>
      <section className='home'>
          <img className='home-img' src={Responsive}/>
          <button type='button'><NavLink to="/Portfolio">Portfolio</NavLink></button>
      </section>
    </div>
  )
}
