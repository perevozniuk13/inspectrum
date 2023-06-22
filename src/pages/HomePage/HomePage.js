import Features from "../../components/Features/Features";
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import Header from "../../components/Header/Header";
import "./HomePage.scss";

export default function HomePage({ isLoggedIn, userData }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} userData={userData} />
      <HomePageHero />
      <Features />
    </>
  );
}
