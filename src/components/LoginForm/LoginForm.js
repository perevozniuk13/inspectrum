import "./LoginForm.scss";

import { useState } from "react";

export default function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <section>
        <form>
          <div>
            <label htmlFor="loginUsername">Username</label>
            <input type="text" name="loginUsername" id="loginUsername" />
          </div>
          <div>
            <label htmlFor="loginPassword">Password</label>
            <input type="password" name="loginPassword" id="loginPassword" />
          </div>
          <button>Login</button>
          {/* {loginError && <p>{loginError}</p>} */}
        </form>
      </section>
    </>
  );
}
