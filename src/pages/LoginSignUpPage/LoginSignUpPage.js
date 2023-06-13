import { useState } from "react"
import "./LoginSignUpPage.scss"
import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginSignUpPage({page}) {

  return <>
  {page === "signup" && <SignupForm />}
  {page === "login" && <LoginForm />}
  </>
}