import React from 'react';
import './App.css';

function AboutUsPage() {
  return (
    <>
        <div className='html'>
      <header>
        <h1 className="nombre-sitio">Tienda <span>Muebles</span></h1>
      </header>

      <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor">
          <a href="indice.js">Inicio</a>
          <a href="nosotros.js">Nosotros</a>
          <a href="tienda.js">Tienda</a>
          <a href="blog.js">Blog</a>
          <a href="galeria.js">Galería</a>
          <a href="contacto.js">Contacto</a>
        </nav>
      </div>

      <main className="contenido-principal contenedor">
        <h2 className="text-center">Sobre Nosotros</h2>

        <div className="contenido-nosotros">
          <div className="imagen">
            <img src="img/nosotros.jpg" alt="Imagen nosotros" />
          </div>
          <div className="informacion-nosotros">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis quis consectetur animi beatae mollitia itaque ea dicta eos. Totam repellat temporibus autem aspernatur necessitatibus perspiciatis ea iste laborum ipsum!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis quis consectetur animi beatae mollitia itaque ea dicta eos. Totam repellat temporibus autem aspernatur necessitatibus perspiciatis ea iste laborum ipsum!</p>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="grid-footer contenedor">
          <div>
            <h3>Categorías</h3>
            <nav className="footer-menu">
              <a href="#">Cocina</a>
              <a href="#">Oficina</a>
              <a href="#">Jardín</a>
              <a href="#">Cochera</a>
              <a href="#">Dormitorios</a>
            </nav>
          </div>

          <div>
            <h3>Sobre Nosotros</h3>
            <nav className="footer-menu">
              <a href="#">Nuestra Historia</a>
              <a href="#">Misión, Visión y Valores</a>
              <a href="#">Carreras</a>
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos del Servicio</a>
            </nav>
          </div>

          <div>
            <h3>Soporte</h3>
            <nav className="footer-menu">
              <a href="#">Preguntas Frecuentes</a>
              <a href="#">Ayuda en línea</a>
              <a href="#">Confianza y Seguridad</a>
            </nav>
          </div>
        </div>

        <p className="copyright">Todos los derechos Reservados, TiendaMuebles</p>
      </footer>
      </div>
    </>
  );
}

export default AboutUsPage;
