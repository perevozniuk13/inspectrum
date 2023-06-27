import { useNavigate } from "react-router-dom";
import "./Mockups.scss";
import refreshIconURL from "../../assets/images/icons--refresh-50.png";

export default function Mockups({
  iframe,
  setIframe,
  colour1,
  colour2,
  colour3,
  colour4,
}) {
  const navigate = useNavigate();
  let key;
  if (iframe) {
    key = iframe.iframe_key;
  } else {
    key = 0;
  }

  const handleUpdateMockup = async (mockup) => {
    if (localStorage.getItem(`update${mockup}`) >= 3) {
      localStorage.setItem(`update${mockup}`, 0);
      localStorage.setItem(`col1-${mockup}`, colour1);
      localStorage.setItem(`col2-${mockup}`, colour2);
      localStorage.setItem(`col3-${mockup}`, colour3);
      localStorage.setItem(`col4-${mockup}`, colour4);
    } else if (localStorage.getItem(`update${mockup}`) == 1) {
      localStorage.setItem(
        `update${mockup}`,
        Number(localStorage.getItem(`update${mockup}`)) + 1
      );
      localStorage.setItem(`col1-${mockup}`, colour3);
      localStorage.setItem(`col2-${mockup}`, colour4);
      localStorage.setItem(`col3-${mockup}`, colour1);
      localStorage.setItem(`col4-${mockup}`, colour2);
    } else if (localStorage.getItem(`update${mockup}`) == 2) {
      localStorage.setItem(
        `update${mockup}`,
        Number(localStorage.getItem(`update${mockup}`)) + 1
      );
      localStorage.setItem(`col1-${mockup}`, colour4);
      localStorage.setItem(`col2-${mockup}`, colour1);
      localStorage.setItem(`col3-${mockup}`, colour2);
      localStorage.setItem(`col4-${mockup}`, colour3);
    } else {
      localStorage.setItem(`update${mockup}`, 1);
      localStorage.setItem(`col1-${mockup}`, colour2);
      localStorage.setItem(`col2-${mockup}`, colour3);
      localStorage.setItem(`col3-${mockup}`, colour4);
      localStorage.setItem(`col4-${mockup}`, colour1);
    }

    setIframe({
      iframe_url: `http://localhost:3000/mockup`,
      iframe_key: iframe.iframe_key + 1,
    });
  };

  return (
    <section className="mockups-section">
      <div className="mockups-section__mockup-container">
        <iframe
          className="mockups-section__mockup"
          src={`${process.env.REACT_APP_SITE_URL}/mockup3/${key}`}
        ></iframe>
        <img
          src={refreshIconURL}
          alt="refresh icon"
          onClick={() => handleUpdateMockup(3)}
          className="mockups-section__refresh-icon"
        />
        <button
          onClick={() => {
            navigate(`/mockup3/3`);
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
          src={`${process.env.REACT_APP_SITE_URL}/mockup2/${key}`}
        ></iframe>
        <img
          src={refreshIconURL}
          alt="refresh icon"
          onClick={() => handleUpdateMockup(2)}
          className="mockups-section__refresh-icon"
        />
        <button
          onClick={() => {
            navigate(`/mockup2/2`);
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
          src={`${process.env.REACT_APP_SITE_URL}/mockup1/${key}&&`}
        ></iframe>
        <img
          src={refreshIconURL}
          alt="refresh icon"
          onClick={() => handleUpdateMockup(1)}
          className="mockups-section__refresh-icon"
        />
        <button
          onClick={() => {
            navigate(`/mockup1/1`);
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
