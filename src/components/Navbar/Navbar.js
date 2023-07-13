import { Link } from "react-router-dom";
import './Navbar.css'

function NavBar() {
  return (
    <nav className="Navbar">
            <Link to='/' id="nav-logo">Logo(Travel Destination)</Link>
            <ul className="nav-menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link to='#tours'>Tours</Link></li>
                <li><Link to='#'>Contact</Link></li>
            </ul>
        </nav>
  );
}
export default NavBar;


