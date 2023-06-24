import { useNavigate } from "react-router-dom";
import "./Mockups.scss";

export default function Mockups({ iframe }) {
  const navigate = useNavigate();
  // const colours = iframe.iframe_url.split("-");
  // console.log("aaa", colours);
  let key;
  if (iframe) {
    key = iframe.iframe_key;
  } else {
    key = 0;
  }

  // console.log(coloursChanged);
  return (
    <section className="mockups-section">
      <div className="mockups-section__mockup-container">
        <iframe
          className="mockups-section__mockup"
          src={`http://localhost:3000/mockup1?${key}`}
          // src={`http://localhost:3000/mockup1?${colours[1].substring(
          //   1
          // )}&&${colours[2].substring(1)}&&c${colours[3].substring(
          //   1
          // )}&&${colours[4].substring(1)}`}
        ></iframe>
        <button
          onClick={() => {
            navigate(`/mockup1`);
            window.scrollTo(0, 0);
          }}
          className="mockups-section__button"
        >
          fullscreen
        </button>
      </div>
      <div className="mockups-section__mockup-container">
        <iframe
          className="mockups-section__mockup"
          src={`http://localhost:3000/mockup2?${key}`}
        ></iframe>
        <button
          onClick={() => {
            navigate(`/mockup2`);
            window.scrollTo(0, 0);
          }}
          className="mockups-section__button"
        >
          fullscreen
        </button>
      </div>
      <div className="mockups-section__mockup-container">
        <iframe
          className="mockups-section__mockup"
          src={`http://localhost:3000/mockup3?${key}`}
        ></iframe>
        <button
          onClick={() => {
            navigate(`/mockup3`);
            window.scrollTo(0, 0);
          }}
          className="mockups-section__button"
        >
          fullscreen
        </button>
      </div>
    </section>
  );
}
