import { useNavigate } from "react-router-dom";
import "./Mockups.scss";
import { useEffect, useState } from "react";
import refreshIconURL from "../../assets/images/icons8-refresh-50.png";

export default function Mockups({
  iframe,
  setIframe,
  // setChangedColours,
  // changedColours,
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
      // await setChangedColours({ col1: 1, col2: 2, col3: 3, col4: 4 });
      localStorage.setItem(`col1-${mockup}`, colour1);
      localStorage.setItem(`col2-${mockup}`, colour2);
      localStorage.setItem(`col3-${mockup}`, colour3);
      localStorage.setItem(`col4-${mockup}`, colour4);
      console.log("11", mockup);
      // console.log("1");
    } else if (localStorage.getItem(`update${mockup}`) == 1) {
      localStorage.setItem(
        `update${mockup}`,
        Number(localStorage.getItem(`update${mockup}`)) + 1
      );
      localStorage.setItem(`col1-${mockup}`, colour3);
      localStorage.setItem(`col2-${mockup}`, colour4);
      localStorage.setItem(`col3-${mockup}`, colour1);
      localStorage.setItem(`col4-${mockup}`, colour2);
      console.log("22", mockup);
      // await setChangedColours({ col1: 3, col2: 4, col3: 1, col4: 2 });
    } else if (localStorage.getItem(`update${mockup}`) == 2) {
      localStorage.setItem(
        `update${mockup}`,
        Number(localStorage.getItem(`update${mockup}`)) + 1
      );
      localStorage.setItem(`col1-${mockup}`, colour4);
      localStorage.setItem(`col2-${mockup}`, colour1);
      localStorage.setItem(`col3-${mockup}`, colour2);
      localStorage.setItem(`col4-${mockup}`, colour3);
      console.log("33", mockup);
      // await setChangedColours({ col1: 4, col2: 1, col3: 2, col4: 3 });
    } else {
      localStorage.setItem(`update${mockup}`, 1);
      // await setChangedColours({ col1: 2, col2: 3, col3: 4, col4: 1 });
      localStorage.setItem(`col1-${mockup}`, colour2);
      localStorage.setItem(`col2-${mockup}`, colour3);
      localStorage.setItem(`col3-${mockup}`, colour4);
      localStorage.setItem(`col4-${mockup}`, colour1);
      console.log("44", mockup);
    }

    setIframe({
      iframe_url: `http://localhost:3000/mockup`,
      iframe_key: iframe.iframe_key + 1,
    });
  };

  // console.log(coloursChanged);
  return (
    <section className="mockups-section">
      <div className="mockups-section__mockup-container">
        <iframe
          className="mockups-section__mockup"
          src={`http://localhost:3000/mockup1/${key}`}
          // src={`http://localhost:3000/mockup1?${colours[1].substring(
          //   1
          // )}&&${colours[2].substring(1)}&&c${colours[3].substring(
          //   1
          // )}&&${colours[4].substring(1)}`}
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
      <div className="mockups-section__mockup-container">
        <iframe
          className="mockups-section__mockup"
          src={`http://localhost:3000/mockup2/${key}`}
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
          src={`http://localhost:3000/mockup3/${key}&&`}
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
    </section>
  );
}
