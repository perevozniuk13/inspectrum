import Features from "../../components/Features/Features";
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import Header from "../../components/Header/Header";
import "./HomePage.scss";

export default function HomePage({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <HomePageHero />
      <Features />
    </>
  );
}
