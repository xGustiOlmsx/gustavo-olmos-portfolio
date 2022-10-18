import React from 'react'
import Gusti from '../media/About/Gusti-Welcome.png';
import '../hojas-de-estilos/About.css'

export default function Home() {
  return (
    <div>
      <section className='sobre-mi'>
        <img className='gusti' src={Gusti}/>
        <div className='sobre-texto'>
          <span className='text-8xl'>Sobre Gusti</span>
          <p className='text-xl'>Es un futuro Desarrollador de Software que desayuna, almuerza y cena código.. sip, sin vida social.</p>
          <p className='text-xl'>Su pasión por el software empezó de chico cuando le compraron su primera playstation, interesandose
          en la programación de videojuegos, para finalmente orientarse al diseño web gracias a videos de youtube y las ofertas de trabajo
          que tiene esta rama de la programación, (sin embargo, dentro de su corazón siempre va a estar Unity).</p>
          <p className='text-xl'>Además de todo esto, en sus tiempos libres es un intento de músico, cantando y tocando instrumentos como
          el piano, la guitarra y el bajo. Esto lo sube a su canal de Youtube
          como un hobby.</p>
          <p className='text-xl'>Por más que los términos programador y deportista no van de la mano, 
          le gustan las artes marciales, (practica Taekwondo las veces que le sobra algo de tiempo) 
          y es hincha de Boca Juniors a morir.</p>
        </div>
      </section>
    </div>
    
  )
}
