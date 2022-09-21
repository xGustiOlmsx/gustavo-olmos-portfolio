import React from 'react'
import '../hojas-de-estilos/Servicios.css'

export default function Servicios() {
  return (
    <div>
      <div className='container-cards'>
      <div className='card'>
        <img src='https://www.dacontenidos.com/wp-content/uploads/2018/08/Dise%C3%B1ador-gr%C3%A1fico-1080x675.jpg' />
        <h4>Diseño de páginas web</h4>
        <p>Mi enfoque para el diseño de sitios web es que fortalezca la marca de su empresa al tiempo
          que garantiza la facilidad de uso y simplicidad para su audiencia.
        </p>
      </div>
      <div className='card'>
        <img src='https://wecan-group.com/wp-content/uploads/2019/08/Looking-for-a-WordPress-Developer-1042x665.jpg' />
        <h4>Desarrollo de temas personalizados de WordPress</h4>
        <p>Wordpress CMS es un área administrativa fácil de usar que le permite editar fácilmente
          el contenido de su sitio web.
        </p>
      </div>
      <div className='card'>
        <img src='https://www.comunicare.es/wp-content/uploads/2021/08/consejos-seguridad-web.png' />
        <h4>Mantenimiento y actualizaciones de seguridad del sitio web de Wordpress</h4>
        <p>Si su sitio web está construido con Wordpress, es crucial mantener la versión de Wordpress
        y los complementos actualizados para eliminar las vulnerabilidades.
        </p>
      </div>
      <div className='card'>
        <img src='https://www.juanmacivico87.com/wp-content/uploads/buenas-practicas-html.png' />
        <h4>Desarrollo de sitios web</h4>
        <p>El proceso de desarrollo web implica tomar los elementos gráficos definidos en el proceso de diseño 
        y codificarlos en un tema personalizado de Wordpress.
        </p>
      </div>
      <div className='card'>
        <img src='https://disenowebakus.net/imagenes/articulos/diseno-web-responsive-adaptable.jpg' />
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
