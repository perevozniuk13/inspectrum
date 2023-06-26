import { useParams } from "react-router-dom";
import "./Mockup2.scss";
import tinycolor from "tinycolor2";

export default function Mockup2({ iframe }) {
  let color1;
  let color2;
  let color3;
  let color4;
  color1 = localStorage.getItem("col1-2");
  color2 = localStorage.getItem("col2-2");
  color3 = localStorage.getItem("col3-2");
  color4 = localStorage.getItem("col4-2");

  return (
    <>
      <div
        className="mockup2"
        style={{
          backgroundColor: color2,
          color: tinycolor(color2).isDark() ? "white" : "black",
        }}
      >
        <nav
          className="mockup2-nav"
          style={{
            backgroundColor: color4,
            color: tinycolor(color4).isDark() ? "white" : "black",
          }}
        >
          <p className="mockup2-nav__logo">LOGO</p>

          <ul className="mockup2-nav__list">
            <li className="mockup2-nav__link">PRODUCT</li>
            <li className="mockup2-nav__link">ABOUT</li>
            <li className="mockup2-nav__link">PORTFOLIO</li>
            <li className="mockup2-nav__link">TEAM</li>
            <li className="mockup2-nav__link">CONTACT</li>
          </ul>
        </nav>

        <section
          className="mockup2-hero"
          style={{
            backgroundColor: color4,
            color: tinycolor(color4).isDark() ? "white" : "black",
          }}
        >
          <h1 className="mockup2-hero__title">Lorem ipsum dolor sit</h1>
          <p className="mockup2-hero__subtitle">
            Lorem ipsum dolor, sit amet. consectetur adipisicing elit.
          </p>
          <button
            style={{
              backgroundColor: color1,
              color: tinycolor(color1).isDark() ? "white" : "black",
            }}
            className="mockup2-hero__button"
          >
            button
          </button>
        </section>

        <section className="mockup2-circles">
          <div className="mockup2-circles__circle-container">
            <div
              className="mockup2-circles__circle"
              style={{
                backgroundColor: color1,
              }}
            ></div>
            <h3 className="mockup2-circles__circle-title">Lorem ipsum</h3>
            <p className="mockup2-circles__circle-description">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="mockup2-circles__circle-container">
            <div
              style={{
                backgroundColor: color1,
              }}
              className="mockup2-circles__circle"
            ></div>
            <h3 className="mockup2-circles__circle-title">Lorem ipsum</h3>
            <p className="mockup2-circles__circle-description">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="mockup2-circles__circle-container">
            <div
              style={{
                backgroundColor: color1,
              }}
              className="mockup2-circles__circle"
            ></div>
            <h3 className="mockup2-circles__circle-title">Lorem ipsum</h3>
            <p className="mockup2-circles__circle-description">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </section>

        <h2 className="mockup2-title">Lorem ipsum dolor</h2>

        <section className="mockup2-squares">
          <div className="mockup2-squares__square-container">
            <div
              className="mockup2-squares__square"
              style={{
                backgroundColor: color4,
              }}
            ></div>
            <h3 className="mockup2-squares__square-title">Lorem ipsum</h3>
            <p className="mockup2-squares__square-description">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="mockup2-squares__square-container">
            <div
              className="mockup2-squares__square"
              style={{
                backgroundColor: color4,
              }}
            ></div>
            <h3 className="mockup2-squares__square-title">Lorem ipsum</h3>
            <p className="mockup2-squares__square-description">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="mockup2-squares__square-container">
            <div
              className="mockup2-squares__square"
              style={{
                backgroundColor: color4,
              }}
            ></div>
            <h3 className="mockup2-squares__square-title">Lorem ipsum</h3>
            <p className="mockup2-squares__square-description">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="mockup2-squares__square-container">
            <div
              className="mockup2-squares__square"
              style={{
                backgroundColor: color4,
              }}
            ></div>
            <h3 className="mockup2-squares__square-title">Lorem ipsum</h3>
            <p className="mockup2-squares__square-description">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
