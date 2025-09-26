import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/">Inicio</a>
          <a href="/category/ropa">Ropa</a>
          <a href="/category/accesorios">Accesorios</a>
          <a href="/category/hogar">Hogar</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
