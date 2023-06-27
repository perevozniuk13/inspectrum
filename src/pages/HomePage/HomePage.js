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
      {/* <Annimation /> */}
      {/* <div className="div1">
        <div className="div-1-1"></div>
      </div>
      <div className="div2">
        <div className="div-2-2"></div>
      </div>
      <div className="div3">
        <div className="div-3-3"></div>
      </div>
      <div className="div4">
        <div className="div-4-4"></div>
      </div>
      <div className="div5">
        <div className="div-5-5"></div>
      </div> */}

      {/* <div className="div6">
        <div className="div6-6"></div>
      </div> */}
      {/* <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div> */}
      <Features />
      <Footer />
    </section>
  );
}
