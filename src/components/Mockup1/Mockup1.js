import "./Mockup1.scss";
import tinycolor from "tinycolor2";

export default function Mockup1({ iframe }) {
  let color1;
  let color2;
  let color3;
  let color4;
  color1 = localStorage.getItem("col1-1");
  color2 = localStorage.getItem("col2-1");
  color3 = localStorage.getItem("col3-1");
  color4 = localStorage.getItem("col4-1");

  return (
    <>
      <div
        className="mockup1"
        style={{
          backgroundColor: color1,
          color: tinycolor(color1).isDark() ? "white" : "black",
        }}
      >
        <nav className="mockup1-nav">
          <p
            className="mockup1-nav__logo"
            style={{
              backgroundColor: color2,
              color: tinycolor(color2).isDark() ? "white" : "black",
            }}
          >
            LOGO
          </p>

          <ul className="mockup1-nav__list">
            <li className="mockup1-nav__link">PRODUCT</li>
            <li className="mockup1-nav__link">ABOUT</li>
            <li className="mockup1-nav__link">PORTFOLIO</li>
            <li className="mockup1-nav__link">TEAM</li>
            <li className="mockup1-nav__link">CONTACT</li>
          </ul>
        </nav>

        <section className="mockup1-hero">
          <h1 className="mockup1-hero__title">Lorem ipsum dolor</h1>
          <p className="mockup1-hero__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            corrupti veniam ad culpa ducimus.
          </p>
          <button
            className="mockup1-hero__button"
            style={{
              backgroundColor: color2,
              color: tinycolor(color2).isDark() ? "white" : "black",
            }}
          >
            button
          </button>
        </section>

        <section
          className="mockup1-banner"
          style={{
            backgroundColor: color3,
            color: tinycolor(color3).isDark() ? "white" : "black",
          }}
        >
          <p className="mockup1-banner__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            ducimus saepe sequi soluta pariatur blanditiis optio minima cumque
            ad iusto, accusamus quae repellat, qui repudiandae beatae officia
            molestiae provident dicta.
          </p>
          <button
            style={{
              backgroundColor: color2,
              color: tinycolor(color2).isDark() ? "white" : "black",
            }}
            className="mockup1-banner__button"
          >
            button
          </button>
        </section>

        <h2 className="mockup1-title">Lorem ipsum dolor</h2>

        <section className="mockup1-cards">
          <div
            className="mockup1-cards__card"
            style={{
              backgroundColor: color3,
              color: tinycolor(color3).isDark() ? "white" : "black",
            }}
          >
            <div
              className="mockup1-cards__circle"
              style={{
                backgroundColor: color2,
                color: tinycolor(color2).isDark() ? "white" : "black",
              }}
            ></div>
            <h3 className="mockup1-cards__title">Lorem ipsum</h3>
            <p className="mockup1-cards__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              suscipit mollitia hic quas obcaecati ratione magnam, ipsa, nemo
              blanditiis cumque in! Ipsa expedita pariatur sed hic repudiandae
              numquam, et quod?
            </p>
          </div>

          <div
            style={{
              backgroundColor: color3,
              color: tinycolor(color3).isDark() ? "white" : "black",
            }}
            className="mockup1-cards__card mockup1-cards__card--center"
          >
            <div
              style={{
                backgroundColor: color2,
                color: tinycolor(color2).isDark() ? "white" : "black",
              }}
              className="mockup1-cards__circle mockup1-cards__circle--center"
            ></div>
            <h3 className="mockup1-cards__title">Lorem ipsum</h3>
            <p className="mockup1-cards__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              suscipit mollitia hic quas obcaecati ratione magnam, ipsa, nemo
              blanditiis cumque in! Ipsa expedita pariatur sed hic repudiandae
              numquam, et quod?
            </p>
          </div>
          <div
            style={{
              backgroundColor: color3,
              color: tinycolor(color3).isDark() ? "white" : "black",
            }}
            className="mockup1-cards__card"
          >
            <div
              className="mockup1-cards__circle"
              style={{
                backgroundColor: color2,
                color: tinycolor(color2).isDark() ? "white" : "black",
              }}
            ></div>
            <h3 className="mockup1-cards__title">Lorem ipsum</h3>
            <p className="mockup1-cards__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              suscipit mollitia hic quas obcaecati ratione magnam, ipsa, nemo
              blanditiis cumque in! Ipsa expedita pariatur sed hic repudiandae
              numquam, et quod?
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
