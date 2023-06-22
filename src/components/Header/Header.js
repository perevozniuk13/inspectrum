import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import menuIconURL from "../../assets/images/menu.svg";
import { useState } from "react";

export default function Header({ isLoggedIn }) {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    if (isMenuClicked) {
      setIsMenuClicked(false);
    } else {
      setIsMenuClicked(true);
    }
  };

  const handleLink = (e, to) => {
    e.preventDefault();
    localStorage.clear();
    navigate(to);
  };

  return (
    <>
      {!isMenuClicked && (
        <nav className="nav">
          <Link to="/" className="nav__logo">
            Inspectrum
          </Link>

          <div className="nav__tablet-links-container">
            <a onClick={(e) => handleLink(e, "/explore")} className="nav__link">
              Explore Palettes
            </a>
            <a onClick={(e) => handleLink(e, "/create")} className="nav__link">
              Create palette
            </a>
            <a
              onClick={(e) => handleLink(e, "/imagePalette")}
              className="nav__link"
            >
              Get Image Palette
            </a>
            {!isLoggedIn && (
              <>
                <Link to="/signup" className="nav__link">
                  Sign Up
                </Link>
                <Link to="/login" className="nav__link">
                  Log In
                </Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <a
                  onClick={(e) => handleLink(e, "/profile")}
                  className="nav__link"
                >
                  Profile
                </a>
                <a
                  onClick={() => {
                    sessionStorage.clear();
                    navigate("/");
                    window.location.reload();
                  }}
                  className="nav__link"
                >
                  Log Out
                </a>
              </>
            )}
          </div>
          <img
            src={menuIconURL}
            onClick={() => setIsMenuClicked(true)}
            alt="menu icon"
            className="nav__menu-icon"
          />
        </nav>
      )}

      {isMenuClicked && (
        <nav className="menu-nav">
          <Link to="/" className="menu-nav__logo">
            LOGO
          </Link>

          <div className="menu-nav__links-container">
            <a
              onClick={(e) => handleLink(e, "/explore")}
              className="menu-nav__link"
            >
              Explore Palettes
            </a>
            <a
              onClick={(e) => handleLink(e, "/create")}
              className="menu-nav__link"
            >
              Create palette
            </a>
            <a
              onClick={(e) => handleLink(e, "/imagePalette")}
              className="menu-nav__link"
            >
              Get Image Palette
            </a>
            <a
              onClick={(e) => handleLink(e, "/signup")}
              className="menu-nav__link"
            >
              Sign Up
            </a>
            <a
              onClick={(e) => handleLink(e, "/login")}
              className="menu-nav__link"
            >
              Log In
            </a>
          </div>
          <img
            src={menuIconURL}
            onClick={handleMenuClick}
            alt="menu icon"
            className="menu-nav__menu-icon"
          />
        </nav>
      )}
    </>
  );
}
