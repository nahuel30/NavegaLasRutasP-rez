import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import "../index.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/category/entrada">Entradas</Link></li>
        <li><Link to="/category/principal">Principales</Link></li>
        <li><Link to="/category/postre">Postres</Link></li>
      </ul>
      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
