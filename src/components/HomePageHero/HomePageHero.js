import { useNavigate } from "react-router-dom";
import "./HomePageHero.scss";

export default function HomePageHero() {
  const navigate = useNavigate();
  return <>
  <section className="homepage-hero">
    <h1 className="homepage-hero__title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
    {/* <img src="https://via.placeholder.com/300x200" alt="placeholder image" /> */}
    <button onClick={() => navigate("/login")} className="homepage-hero__get-started-button">get started</button>
  </section>
  </>
}