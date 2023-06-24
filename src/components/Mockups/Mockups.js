import { useNavigate } from "react-router-dom";
import "./Mockups.scss";

export default function Mockups({ iframe }) {
  const navigate = useNavigate();
  const mockup_url = iframe.iframe_url.substring(21);
  console.log("aaa", mockup_url);

  // console.log(coloursChanged);
  return (
    <section className="mockups-section">
      <div className="mockups-section__mockup-container">
        <iframe
          className="mockups-section__mockup"
          src={iframe.iframe_url}
        ></iframe>
        <button
          onClick={() => navigate(`${mockup_url}`)}
          className="mockups-section__button"
        >
          fullscreen
        </button>
      </div>
      <div className="mockups-section__mockup-container">
        <iframe
          className="mockups-section__mockup"
          src={iframe.iframe_url}
        ></iframe>
        <button
          onClick={() => navigate(`${mockup_url}`)}
          className="mockups-section__button"
        >
          fullscreen
        </button>
      </div>
      <div className="mockups-section__mockup-container">
        <iframe
          className="mockups-section__mockup"
          src={iframe.iframe_url}
        ></iframe>
        <button
          onClick={() => navigate(`${mockup_url}`)}
          className="mockups-section__button"
        >
          fullscreen
        </button>
      </div>
    </section>
  );
}
