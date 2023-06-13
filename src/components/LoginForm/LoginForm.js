import "./LoginForm.scss";

import { useState } from "react";

export default function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <section className="login">
        <h2 className="login__title">Log in</h2>

        <form className="login-form">
          <div className="login-form__label-input-container">
            <label className="login-form__label" htmlFor="loginUsername">Username</label>
            <input className="login-form__input" type="text" name="loginUsername" id="loginUsername" />
          </div>
          <div className="login-form__label-input-container">
            <label className="login-form__label" htmlFor="loginPassword">Password</label>
            <input className="login-form__input" type="password" name="loginPassword" id="loginPassword" />
          </div>
          <button className="login-form__button">Login</button>
          {/* {loginError && <p>{loginError}</p>} */}
        </form>
      </section>
    </>
  );
}
