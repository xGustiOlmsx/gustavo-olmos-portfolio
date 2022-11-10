import React from 'react'
import '../hojas-de-estilos/Servicios.css'
// importo todas las imagenes que van a aparecer en servicios
import Diseño from '../media/Servicios/Diseño.webp'
import Wordpress from '../media/Servicios/wordpress.jpg'
import Seguridad from '../media/Servicios/seguridad.png'
import Desarrollo from '../media/Servicios/desarrollo.png'
import Responsive from '../media/Servicios/responsive.jpg'

// y después las llamo
export default function Servicios() {
  return (
    <div>
      <div className='container-cards'>
      <div className='card'>
        <img src={Diseño} />
        <h4>Diseño de páginas web</h4>
        <p>Mi enfoque para el diseño de sitios web es que fortalezca la marca de su empresa al tiempo
          que garantiza la facilidad de uso y simplicidad para su audiencia.
        </p>
      </div>
      <div className='card'>
        <img src={Wordpress} />
        <h4>Desarrollo de temas personalizados de WordPress</h4>
        <p>Wordpress CMS es un área administrativa fácil de usar que le permite editar fácilmente
          el contenido de su sitio web.
        </p>
      </div>
      <div className='card'>
        <img src={Seguridad} />
        <h4>Mantenimiento y actualizaciones de seguridad del sitio web de Wordpress</h4>
        <p>Si su sitio web está construido con Wordpress, es crucial mantener la versión de Wordpress
        y los complementos actualizados para eliminar las vulnerabilidades.
        </p>
      </div>
      <div className='card'>
        <img src={Desarrollo} />
        <h4>Desarrollo de sitios web</h4>
        <p>El proceso de desarrollo web implica tomar los elementos gráficos definidos en el proceso de diseño 
        y codificarlos en un tema personalizado de Wordpress.
        </p>
      </div>
      <div className='card'>
        <img src={Responsive} />
        <h4>Diseño de sitio web responsive</h4>
        <p>Tener un diseño responsive significa que su sitio web cambia de tamaño de manera fluída
          para una visualización óptima, independientemente del tamaño de la pantalla o del dispositivo 
          (por ejemplo, iPhone, iPad).
        </p>
      </div>
      </div>
    </div>
  )
}
