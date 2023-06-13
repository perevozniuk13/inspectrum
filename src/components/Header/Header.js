import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return <>
  <nav className="nav">
    <Link to="/" className="nav__logo">LOGO</Link>

    <div className="nav__links-container">
        <Link to="/explore">Explore Palettes</Link>
        <Link to="/create">Create palette</Link>
        <Link to="/imagePalette">Get Image Palette</Link>
        <Link to="/signup">Login/SignUp</Link>
    </div>
  </nav>
  </>
}