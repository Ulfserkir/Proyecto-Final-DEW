import React from 'react';
import './App.css';

function Gallery() {
  return (
    <>
        <div className='html'></div>
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
        <h2 className="text-center">Galería</h2>

        <ul className="galeria">
          <li>
            <a href="img/galeria_01.jpg">
              <img src="img/galeria_01.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="img/galeria_02.jpg">
              <img src="img/galeria_02.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="img/galeria_03.jpg">
              <img src="img/galeria_03.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="img/galeria_04.jpg">
              <img src="img/galeria_04.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="img/galeria_05.jpg">
              <img src="img/galeria_05.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="img/galeria_06.jpg">
              <img src="img/galeria_06.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="img/galeria_07.jpg">
              <img src="img/galeria_07.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="img/galeria_08.jpg">
              <img src="img/galeria_08.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="img/galeria_09.jpg">
              <img src="img/galeria_09.jpg" alt="imagen galeria" />
            </a>
          </li>
        </ul>
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
    </>
  );
}

export default Gallery;
