import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLink = (e, to) => {
    e.preventDefault();
    localStorage.clear();
    navigate(to);
  };

  return (
    <>
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
