import './App.css';

function BlogEntry() {
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
        <h2 className="text-center">Entrada Blog</h2>

        <article className="entrada contenido-entrada-blog">
          <div className="imagen">
            <img src="img/nosotros.jpg" alt="imagen blog" />
          </div>

          <div className="entrada-meta">
            <p>Fecha: <span>22 de Octubre de 2022</span></p>
            <p>Escrito por: <span>TiendaMuebles</span></p>
          </div>

          <div className="entrada-blog">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id numquam ducimus alias commodi eveniet, impedit amet! Quidem et tempore obcaecati vitae voluptatibus ipsam? Quae repudiandae sequi quas numquam nam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!</p>
          </div>
        </article>
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

export default BlogEntry;
