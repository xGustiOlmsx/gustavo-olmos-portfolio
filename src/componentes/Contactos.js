import React from 'react'
import '../hojas-de-estilos/Contactos.css'
export default function Contactos() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-section-header">
            <h2 className="scroll-h1a">Tomemos un café</h2>
            <p className="scroll-pa">y trabajemos juntos</p>
        </div>
        <div className="contact-links">
            <a href="mailto:gustavoolmos002@gmail.com"
            target="_blank" className="btn contact-details" rel="noreferrer">
            <i className="fas fa-at btn1"></i> Mandame un E-Mail</a>
            <a href="tel:+5493498461270" className="btn contact-details">
            <i className="fas fa-mobile-alt btn2"></i> Llamame por Teléfono
            </a>
        </div>
      </section>
    </>
  )
}

