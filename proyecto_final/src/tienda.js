import React from 'react';
import './App.css';

const ProductsPage = () => {
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
        <h2 className="text-center">Nuestros Productos</h2>

        <div className="listado-productos">
          <div className="producto">
            <img src="img/producto1.jpg" alt="Imagen Producto" />

            <div className="texto-producto">
              <h3>Producto 1</h3>
              <p>Proin condimentum sodales risus ut aliquet. Nunc eu neque quis sapien feugiat posuere sed nec mauris.</p>
              <p className="precio">$1,000,000.00</p>

              <a className="btn" href="#">Agregar al Carrito</a>
            </div>
          </div>

          <div className="producto">
            <img src="img/producto2.jpg" alt="Imagen Producto" />

            <div className="texto-producto">
              <h3>Producto 2</h3>
              <p>Proin condimentum sodales risus ut aliquet. Nunc eu neque quis sapien feugiat posuere sed nec mauris.</p>
              <p className="precio">$1,000,000.00</p>

              <a className="btn" href="#">Agregar al Carrito</a>
            </div>
          </div>

          <div className="producto">
            <img src="img/producto3.jpg" alt="Imagen Producto" />

            <div className="texto-producto">
              <h3>Producto 3</h3>
              <p>Proin condimentum sodales risus ut aliquet. Nunc eu neque quis sapien feugiat posuere sed nec mauris.</p>
              <p className="precio">$1,000,000.00</p>

              <a className="btn" href="#">Agregar al Carrito</a>
            </div>
          </div>

          <div className="producto">
            <img src="img/producto4.jpg" alt="Imagen Producto" />

            <div className="texto-producto">
              <h3>Producto 4</h3>
              <p>Proin condimentum sodales risus ut aliquet. Nunc eu neque quis sapien feugiat posuere sed nec mauris.</p>
              <p className="precio">$1,000,000.00</p>

              <a className="btn" href="#">Agregar al Carrito</a>
            </div>
          </div>

          <div className="producto">
            <img src="img/producto5.jpg" alt="Imagen Producto" />

            <div className="texto-producto">
              <h3>Producto 5</h3>
              <p>Proin condimentum sodales risus ut aliquet. Nunc eu neque quis sapien feugiat posuere sed nec mauris.</p>
              <p className="precio">$1,000,000.00</p>

              <a className="btn" href="#">Agregar al Carrito</a>
            </div>
          </div>

          <div className="producto">
            <img src="img/producto6.jpg" alt="Imagen Producto" />

            <div className="texto-producto">
              <h3>Producto 6</h3>
              <p>Proin condimentum sodales risus ut aliquet. Nunc eu neque quis sapien feugiat posuere sed nec mauris.</p>
              <p className="precio">$1,000,000.00</p>

              <a className="btn" href="#">Agregar al Carrito</a>
            </div>
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
};

export default ProductsPage;
