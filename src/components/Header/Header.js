import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import menuIconURL from "../../assets/images/icons8-menu-50.png";
import { useState } from "react";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [menuClicked, setMenuClicked] = useState(false);

  const handleLink = (e, to) => {
    e.preventDefault();
    localStorage.clear();
    navigate(to);
  };

  return (
    <>
      <nav className="menu-nav">
        <Link to="/" className="menu-nav__logo">
          Inspectrum
        </Link>

        <img
          src={menuIconURL}
          alt="menu icon"
          className="menu-nav__icon"
          onClick={() => {
            if (!menuClicked) {
              setMenuClicked(true);
            } else {
              setMenuClicked(false);
            }
          }}
        />
        {menuClicked && (
          <div className="menu-nav__tablet-links-container">
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
            {!isLoggedIn && (
              <>
                <Link to="/login" className="menu-nav__link">
                  Log In
                </Link>
                <Link to="/signup" className="menu-nav__link">
                  Sign Up
                </Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <a
                  onClick={(e) => handleLink(e, "/profile")}
                  className="menu-nav__link"
                >
                  My Profile
                </a>
                <a
                  onClick={() => {
                    setIsLoggedIn(false);
                    sessionStorage.clear();
                    navigate("/");
                  }}
                  className="menu-nav__link"
                >
                  Log Out
                </a>
              </>
            )}
          </div>
        )}
      </nav>
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
              <Link to="/login" className="nav__link">
                Log In
              </Link>
              <Link to="/signup" className="nav__link">
                Sign Up
              </Link>
            </>
          )}

          {isLoggedIn && (
            <>
              <a
                onClick={(e) => handleLink(e, "/profile")}
                className="nav__link"
              >
                My Profile
              </a>
              <a
                onClick={() => {
                  setIsLoggedIn(false);
                  sessionStorage.clear();
                  navigate("/");
                }}
                className="nav__link"
              >
                Log Out
              </a>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
