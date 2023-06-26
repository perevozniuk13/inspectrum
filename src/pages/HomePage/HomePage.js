import Features from "../../components/Features/Features";
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./HomePage.scss";

export default function HomePage({ isLoggedIn, userData, setIsLoggedIn }) {
  return (
    <section
      className="homepage
    "
    >
      <Header
        isLoggedIn={isLoggedIn}
        userData={userData}
        setIsLoggedIn={setIsLoggedIn}
      />
      <HomePageHero />
      <Features />
      <Footer />
    </section>
  );
}
