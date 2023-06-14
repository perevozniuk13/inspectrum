import { useNavigate } from "react-router-dom";
import "./ExplorePageHero.scss";

export default function ExplorePageHero() {
   const navigate = useNavigate();
    
  return <>
  <section className="explore-hero">
    <h1 className="explore-hero__title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
    <button onClick={() => navigate("/create")} className="explore-hero__create-button">create mine</button>
  </section>
  </>
}