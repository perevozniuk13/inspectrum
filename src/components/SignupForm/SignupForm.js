import { useState } from "react";
import "./SignupForm.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const [signupError, setSignupError] = useState("");
  const [isSignupSuccessfull, setIsSignupSuccessfull] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const first_name = e.target.signupFirstName.value;
    const last_name = e.target.signupLastName.value;
    const username = e.target.signupUsername.value;
    const email = e.target.signupEmail.value;
    const password = e.target.signupPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (
      !first_name ||
      !last_name ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setSignupError("Please provide required fields!");
      return;
    }

    if (first_name.length < 3 || last_name.length < 3) {
      setSignupError("Fields must be at least 3 characters long!");
      return;
    }

    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setSignupError("Please provide valid email address!");
      return;
    }

    if (
      password.length < 8 ||
      !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password) ||
      !/\d/.test(password)
    ) {
      setSignupError(
        "Password must be at least 8 charachters long and contain at least 1 special character and at least one number!"
      );
      return;
    }

    if (password !== confirmPassword) {
      setSignupError("Passwords must match!");
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/signup`, {
        first_name,
        last_name,
        username,
        email,
        password,
      });
      setSignupError("");
      setIsSignupSuccessfull(true);
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      setSignupError(error.response.data);
    }
  };

  return (
    <>
      <section className="signup">
        <h2 className="signup__title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="signup-form__label-input-container">
            <label className="signup-form__label" htmlFor="signupFirstName">
              First name
            </label>
            <input
              className="signup-form__input"
              type="text"
              name="signupFirstName"
              id="signupFirstName"
            />
          </div>
          <div className="signup-form__label-input-container">
            <label className="signup-form__label" htmlFor="signupLastName">
              Last name{" "}
            </label>
            <input
              className="signup-form__input"
              type="text"
              name="signupLastName"
              id="signupLastName"
            />
          </div>
          <div className="signup-form__label-input-container">
            <label className="signup-form__label" htmlFor="signupEmail">
              Email{" "}
            </label>
            <input
              className="signup-form__input"
              type="text"
              name="signupEmail"
              id="signupEmail"
            />
          </div>
          <div className="signup-form__label-input-container">
            <label className="signup-form__label" htmlFor="signupUsername">
              Username
            </label>
            <input
              className="signup-form__input"
              type="text"
              name="signupUsername"
              id="signupUsername"
            />
          </div>
          <div className="signup-form__label-input-container">
            <label className="signup-form__label" htmlFor="signupPassword">
              Password
            </label>
            <input
              className="signup-form__input"
              type="password"
              name="signupPassword"
              id="signupPassword"
            />
          </div>
          <div className="signup-form__label-input-container">
            <label className="signup-form__label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="signup-form__input"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div>
          <p className="signup-form__login-text">
            Do you already have an account? Please{" "}
            <Link to="/login">Log In</Link>
          </p>
          {signupError && <p className="signup-error">{signupError}</p>}
          {isSignupSuccessfull && <p>Success! Please login</p>}
          <button className="signup-form__button">signup</button>
        </form>
      </section>
    </>
  );
}
