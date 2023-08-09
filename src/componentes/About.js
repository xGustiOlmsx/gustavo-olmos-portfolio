import React from 'react'
// importo la imagen de mi avatar que aparecerá en la sección about
import Gusti from '../media/About/Gusti-Welcome.png';
import '../hojas-de-estilos/About.css'

// acá y en algunos otros componentes hago pruebas de "tailwind css"
// sin embargo, por comodidad preferí seguir usando los archivos css
export default function Home() {
  return (
    <div>
      <section className='sobre-mi'>
        {/* acá en img llamo a "Gusti" el avatar que acabo de importar */}
        <img className='gusti' src={Gusti}/>
        <div className='sobre-texto'>
          <span className='text-8xl'>Sobre Gusti</span>
          <p className='text-xl'>Es un futuro Desarrollador de Software que desayuna, almuerza y cena código.. sip, sin vida social.</p>
          <p className='text-xl'>Su pasión por el software empezó de chico cuando le compraron su primera playstation, interesandose
          en la programación de videojuegos, para finalmente descubrir que su verdadera pasion es el desarrollo web..</p>
          <p className='text-xl'>Además de todo esto, en sus tiempos libres es músico, cantando y tocando instrumentos como
          el piano, la guitarra y el bajo. Esto lo sube a su canal de Youtube
          como un hobby.</p>
          <p className='text-xl'>Le gustan las artes marciales, (practica Taekwondo las veces que le sobra algo de tiempo) 
          y es hincha de Boca Juniors a morir.</p>
        </div>
      </section>
    </div>
    
  )
}
