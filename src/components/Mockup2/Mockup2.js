import { useParams } from "react-router-dom";
import "./Mockup2.scss";

export default function Mockup2({ iframe }) {
  const { color } = useParams();
  console.log("color", color);
  return (
    <>
      <div
        className="mockup2"
        // style={{ backgroundColor: color && `#${color}` }}
      >
        <nav className="mockup2-nav">
          <p className="mockup2-nav__logo">ACME</p>

          <ul className="mockup2-nav__list">
            <li className="mockup2-nav__link">PRODUCT</li>
            <li className="mockup2-nav__link">ABOUT</li>
            <li className="mockup2-nav__link">PORTFOLIO</li>
            <li className="mockup2-nav__link">TEAM</li>
            <li className="mockup2-nav__link">CONTACT</li>
          </ul>
        </nav>

        <section className="mockup2-hero">
          <h1 className="mockup2-hero__title">Lorem ipsum dolor sit</h1>
          <p className="mockup2-hero__subtitle">
            Lorem ipsum dolor, sit amet. consectetur adipisicing elit.
          </p>
          <button className="mockup2-hero__button">button</button>
        </section>

        <section className="mockup2-circles">
          <div className="mockup2-circles__circle-container">
            <div className="mockup2-circles__circle"></div>
            <h3 className="mockup2-circles__circle-title">Lorem ipsum</h3>
            <p className="mockup2-circles__circle-description">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="mockup2-circles__circle-container">
            <div className="mockup2-circles__circle"></div>
            <h3 className="mockup2-circles__circle-title">Lorem ipsum</h3>
            <p className="mockup2-circles__circle-description">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="mockup2-circles__circle-container">
            <div className="mockup2-circles__circle"></div>
            <h3 className="mockup2-circles__circle-title">Lorem ipsum</h3>
            <p className="mockup2-circles__circle-description">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </section>

        <h2 className="mockup2-title">Lorem ipsum dolor</h2>

        <section className="mockup2-squares">
          <div className="mockup2-squares__square-container">
            <div className="mockup2-squares__square"></div>
            <h3 className="mockup2-squares__square-title">Lorem ipsum</h3>
            <p className="mockup2-squares__square-description">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="mockup2-squares__square-container">
            <div className="mockup2-squares__square"></div>
            <h3 className="mockup2-squares__square-title">Lorem ipsum</h3>
            <p className="mockup2-squares__square-description">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="mockup2-squares__square-container">
            <div className="mockup2-squares__square"></div>
            <h3 className="mockup2-squares__square-title">Lorem ipsum</h3>
            <p className="mockup2-squares__square-description">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="mockup2-squares__square-container">
            <div className="mockup2-squares__square"></div>
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
