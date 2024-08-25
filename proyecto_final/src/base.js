import './App.css';

function App() {
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
          {[
            { id: 1, name: 'Producto 1', imgSrc: 'img/producto1.jpg' },
            { id: 2, name: 'Producto 2', imgSrc: 'img/producto2.jpg' },
            { id: 3, name: 'Producto 3', imgSrc: 'img/producto3.jpg' },
            { id: 4, name: 'Producto 4', imgSrc: 'img/producto4.jpg' },
            { id: 5, name: 'Producto 5', imgSrc: 'img/producto5.jpg' },
            { id: 6, name: 'Producto 6', imgSrc: 'img/producto6.jpg' }
          ].map(product => (
            <div key={product.id} className="producto">
              <img src={product.imgSrc} alt={`Imagen de ${product.name}`} />

              <div className="texto-producto">
                <h3>{product.name}</h3>
                <p>Proin condimentum sodales risus ut aliquet. Nunc eu neque quis sapien feugiat posuere sed nec mauris.</p>
                <p className="precio">$1,000,000.00</p>

                <a className="btn" href="#">Agregar al Carrito</a>
              </div>
            </div>
          ))}
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

        <p className="copyright">Todos los derechos reservados, TiendaMuebles</p>
      </footer>
      </div>
    </>
  );
}

export default App;
