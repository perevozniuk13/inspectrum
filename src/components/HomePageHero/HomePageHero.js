import { useNavigate } from "react-router-dom";
import "./HomePageHero.scss";

export default function HomePageHero() {
  const navigate = useNavigate();
  return (
    <>
      <section className="homepage-hero">
        <h1 className="homepage-hero__title">
          Step into the World of Color: Inspiring Combinations Await.
        </h1>
        <button
          onClick={() => navigate("/login")}
          className="homepage-hero__get-started-button"
        >
          get started
        </button>
      </section>
    </>
  );
}
