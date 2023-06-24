import { useState } from "react";
import "./LoginSignUpPage.scss";
import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function LoginSignUpPage({ page, setIsLoggedIn, isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      {page === "signup" && <SignupForm />}
      {page === "login" && <LoginForm setIsLoggedIn={setIsLoggedIn} />}

      <Footer />
    </>
  );
}
