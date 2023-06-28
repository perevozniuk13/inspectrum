import Features from "../../components/Features/Features";
import HomePageHero from "../../components/HomePageHero/HomePageHero";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./HomePage.scss";

export default function HomePage({ isLoggedIn, setIsLoggedIn }) {
  return (
    <section
      className="homepage
    "
    >
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <HomePageHero />

      <section className="card-fan">
        <div className="animation-card1">
          <div className="animation-card1__color animation-card1__color--1"></div>
          <div className="animation-card1__color animation-card1__color--2"></div>
          <div className="animation-card1__color animation-card1__color--3"></div>
          <div className="animation-card1__color animation-card1__color--4"></div>
        </div>

        <div className="animation-card2">
          <div className="animation-card2__color animation-card2__color--1"></div>
          <div className="animation-card2__color animation-card2__color--2"></div>
          <div className="animation-card2__color animation-card2__color--3"></div>
          <div className="animation-card2__color animation-card2__color--4"></div>
        </div>

        <div className="animation-card3">
          <div className="animation-card3__color animation-card3__color--1"></div>
          <div className="animation-card3__color animation-card3__color--2"></div>
          <div className="animation-card3__color animation-card3__color--3"></div>
          <div className="animation-card3__color animation-card3__color--4"></div>
        </div>
      </section>
      <Features />
      <Footer />
    </section>
  );
}
