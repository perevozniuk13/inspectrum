import "./Header.scss";
import { Link } from "react-router-dom";
import menuIconURL from "../../assets/images/menu.svg";
import { useState } from "react";

export default function Header({isLoggedIn}) {

  const [isMenuClicked, setIsMenuClicked] = useState(false);   

  const handleMenuClick = () => {
    if (isMenuClicked) {
        setIsMenuClicked(false);
    }
    else {
        setIsMenuClicked(true);
    }
  }

  return <>
  {!isMenuClicked && 
  <nav className="nav">
    <Link to="/" className="nav__logo">LOGO</Link>

    <div className="nav__tablet-links-container">
        <Link to="/explore" className="nav__link">Explore Palettes</Link>
        <Link to="/create" className="nav__link">Create palette</Link>
        <Link to="/imagePalette" className="nav__link">Get Image Palette</Link>
        {!isLoggedIn && <>
        <Link to="/signup" className="nav__link">Sign Up</Link>
        <Link to="/login" className="nav__link">Log In</Link>
        </>}

        {isLoggedIn && <>
          <Link to="/user" className="nav__link">Profile</Link>
        </>}
    </div>
    <img src={menuIconURL} onClick={() => setIsMenuClicked(true)} alt="menu icon" className="nav__menu-icon"/>
  </nav>}

{isMenuClicked &&
  <nav className="menu-nav">
    <Link to="/" className="menu-nav__logo">LOGO</Link>

    <div className="menu-nav__links-container">
        <Link to="/explore" className="menu-nav__link">Explore Palettes</Link>
        <Link to="/create" className="menu-nav__link">Create palette</Link>
        <Link to="/imagePalette" className="menu-nav__link">Get Image Palette</Link>
        <Link to="/signup" className="menu-nav__link">Sign Up</Link>
        <Link to="/login" className="menu-nav__link">Log In</Link>
    </div>
    <img src={menuIconURL} onClick={handleMenuClick} alt="menu icon" className="menu-nav__menu-icon"/>
  </nav>}
  </>
}