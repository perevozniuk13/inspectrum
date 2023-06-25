import "./LoginForm.scss";

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm({ setIsLoggedIn }) {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = e.target.loginUsername.value;
    const password = e.target.loginPassword.value;

    if (!username || !password) {
      setLoginError("Please provide required fields!");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/login`,
        {
          username,
          password,
        }
      );

      sessionStorage.setItem("authToken", response.data.authToken);
      setLoginError("");
      setIsLoggedIn(true);
      navigate("/profile");
    } catch (error) {
      setLoginError("Log in failed!");
    }
  };

  return (
    <>
      <section className="login">
        <h2 className="login__title">Log in</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-form__label-input-container">
            <label className="login-form__label" htmlFor="loginUsername">
              Username
            </label>
            <input
              className="login-form__input"
              type="text"
              name="loginUsername"
              id="loginUsername"
            />
          </div>
          <div className="login-form__label-input-container">
            <label className="login-form__label" htmlFor="loginPassword">
              Password
            </label>
            <input
              className="login-form__input"
              type="password"
              name="loginPassword"
              id="loginPassword"
            />
          </div>
          <p className="login-form__login-text">
            Don't have an account yet? Please <Link to="/signup">Sign Up</Link>
          </p>
          {loginError && <p className="login-error">{loginError}</p>}
          <button className="login-form__button">Login</button>
        </form>
      </section>
    </>
  );
}
