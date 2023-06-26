import { useParams } from "react-router-dom";
import "./Mockup3.scss";
import tinycolor from "tinycolor2";

export default function Mockup3({ iframe }) {
  const { color } = useParams();

  let color1;
  let color2;
  let color3;
  let color4;
  color1 = localStorage.getItem("col1-3");
  color2 = localStorage.getItem("col2-3");
  color3 = localStorage.getItem("col3-3");
  color4 = localStorage.getItem("col4-3");
  return (
    <>
      <div
        className="mockup3"
        style={{
          backgroundColor: color3,
          color: tinycolor(color3).isDark() ? "white" : "black",
        }}
      >
        <nav className="mockup3-nav">
          <p className="mockup3-nav__logo">LOGO</p>

          <ul className="mockup3-nav__list">
            <li className="mockup3-nav__link">PRODUCT</li>
            <li className="mockup3-nav__link">ABOUT</li>
            <li className="mockup3-nav__link">PORTFOLIO</li>
            <li className="mockup3-nav__link">TEAM</li>
            <li className="mockup3-nav__link">CONTACT</li>
          </ul>
        </nav>

        <section className="mockup3-hero">
          <h1
            className="mockup3-hero__title"
            style={{
              color: color1,
            }}
          >
            Lorem ipsum dolor
          </h1>
          <p className="mockup3-hero__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            corrupti veniam ad culpa ducimus.
          </p>
          <button
            style={{
              backgroundColor: color1,
              color: tinycolor(color1).isDark() ? "white" : "black",
            }}
            className="mockup3-hero__button"
          >
            button
          </button>
        </section>

        <section className="mockup3-main">
          <div
            className="mockup3-main__card mockup3-main__card--coloured"
            style={{
              backgroundColor: color2,
              color: tinycolor(color2).isDark() ? "white" : "black",
            }}
          >
            <h2 className="mockup3-main__card-title">Lorem</h2>
          </div>

          <div className="mockup3-main__card">
            <h2 className="mockup3-main__card-title">Lorem ipsum dolor sit</h2>
            <p className="mockup3-main__card-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              nihil, molestiae, illo maxime blanditiis sint aliquam molestias
              facilis perspiciatis, dignissimos quasi eaque. Iusto soluta
              voluptatem sequi vitae, aperiam cum adipisci.
            </p>
          </div>

          <div className="mockup3-main__card">
            <h2 className="mockup3-main__card-title">Lorem ipsum dolor sit</h2>
            <p className="mockup3-main__card-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              nihil, molestiae, illo maxime blanditiis sint aliquam molestias
              facilis perspiciatis, dignissimos quasi eaque. Iusto soluta
              voluptatem sequi vitae, aperiam cum adipisci.
            </p>
          </div>

          <div
            className="mockup3-main__card mockup3-main__card--coloured"
            style={{
              backgroundColor: color2,
              color: tinycolor(color2).isDark() ? "white" : "black",
            }}
          >
            <h2 className="mockup3-main__card-title">Lorem</h2>
          </div>

          <div
            className="mockup3-main__card mockup3-main__card--coloured"
            style={{
              backgroundColor: color2,
              color: tinycolor(color2).isDark() ? "white" : "black",
            }}
          >
            <h2 className="mockup3-main__card-title">Lorem</h2>
          </div>

          <div className="mockup3-main__card">
            <h2 className="mockup3-main__card-title">Lorem ipsum dolor sit</h2>
            <p className="mockup3-main__card-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              nihil, molestiae, illo maxime blanditiis sint aliquam molestias
              facilis perspiciatis, dignissimos quasi eaque. Iusto soluta
              voluptatem sequi vitae, aperiam cum adipisci.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
