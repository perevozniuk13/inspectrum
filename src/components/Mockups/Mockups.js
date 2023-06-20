import { useNavigate } from "react-router-dom";
import Mockup1 from "../Mockup1/Mockup1";
import "./Mockups.scss";
import { useEffect } from "react";

export default function Mockups() {
  const navigate = useNavigate();

  return (
    <section className="mockups-section">
      <div className="mockups-section__mockup1-container">
        <iframe
          className="mockups-section__mockup1"
          src="http://localhost:3000/mockup1"
        ></iframe>
        <button
          onClick={() => navigate("/mockup1")}
          className="mockups-section__button"
        >
          fullscreen
        </button>
      </div>
      <div className="mockups-section__mockup1-container">
        <iframe
          className="mockups-section__mockup1"
          src="http://localhost:3000/mockup1"
        ></iframe>
        <button
          onClick={() => navigate("/mockup1")}
          className="mockups-section__button"
        >
          fullscreen
        </button>
      </div>
    </section>
  );
}
