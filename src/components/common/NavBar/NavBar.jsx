import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo"><Link to="/" className="logo-link">Dev Store</Link></h1>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li>
          <Link to="/category/ropa">Ropa</Link>
        </li>
        <li>
          <Link to="/category/accesorios">Accesorios</Link>
        </li>
        <li>
          <Link to="/category/hogar">Hogar</Link>
        </li>
      </ul>
      {<CartWidget cantidad={3} />}
    </nav>
  );
};

export default NavBar;
