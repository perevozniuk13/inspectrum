import "./SignupForm.scss";

export default function SignupForm() {
  return (
    <>
      <section className="signup">
        <h2 className="signup__title">Sign Up</h2>
        <form className="signup-form">
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
          <button className="signup-form__button">signup</button>
          {/* {signupError && <p>{signupError}</p>} */}
          {/* {signupSuccess && <p>Success! Please login</p>} */}
        </form>
      </section>
    </>
  );
}
