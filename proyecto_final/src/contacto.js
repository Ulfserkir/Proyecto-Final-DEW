import './App.css';

function Contact() {
  return (
    <>
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
        <h2 className="text-center">Contacto</h2>

        <form className="formulario">
          <fieldset>
            <legend>Tus Datos</legend>

            <div className="campo">
              <label jsFor="nombre">Nombre: </label>
              <input id="nombre" type="text" placeholder="Tu Nombre" required />
            </div>

            <div className="campo">
              <label jsFor="asunto">Asunto:</label>
              <input id="asunto" type="text" placeholder="Tu Asunto" required />
            </div>

            <div className="campo">
              <label jsFor="email">E-mail:</label>
              <input id="email" type="email" placeholder="Tu Email" />
            </div>

            <div className="campo">
              <label jsFor="tel">Teléfono:</label>
              <input id="tel" type="tel" placeholder="Tu Teléfono" />
            </div>

            <div className="campo">
              <label jsFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" rows="10" cols="20"></textarea>
            </div>
          </fieldset>

          <fieldset>
            <legend>País</legend>

            <div className="campo">
              <label jsFor="pais">País</label>
              <select id="pais">
                <option value="">-- Seleccione --</option>
                <option value="MX">México</option>
                <option value="PR">Perú</option>
                <option value="CO">Colombia</option>
                <option value="AR">Argentina</option>
                <option value="ES">España</option>
                <option value="CL">Chile</option>
              </select>
            </div>
          </fieldset>

          <fieldset>
            <legend>Información Extra</legend>

            <div className="campo">
              <label jsFor="cliente">Cliente</label>
              <input id="cliente" type="radio" name="tipo" value="cliente" />
            </div>

            <div className="campo">
              <label jsFor="proveedor">Proveedor</label>
              <input id="proveedor" type="radio" name="tipo" value="proveedor" />
            </div>

            <div className="campo">
              <label jsFor="categoria">Categoría de Interés</label>
              <input list="categorias" name="categorias" />
              <datalist id="categorias">
                <option value="Cocina" />
                <option value="Exterior" />
                <option value="Recamaras" />
                <option value="Oficina" />
                <option value="Televisión" />
              </datalist>
            </div>
          </fieldset>

          <input className="btn" type="submit" value="Enviar Formulario" />
        </form>
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
    </>
  );
}

export default Contact;
