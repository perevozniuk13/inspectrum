import { useParams } from "react-router-dom";
import "./Mockup1.scss";

export default function Mockup1({ iframe }) {
  const { color } = useParams();

  return (
    <>
      <div
        className="mockup1"
        // style={{ backgroundColor: color && `#${color}` }}
      >
        <nav className="mockup1-nav">
          <p className="mockup1-nav__logo">LOGO</p>

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
          <button className="mockup1-hero__button">button</button>
        </section>

        <section className="mockup1-banner">
          <p className="mockup1-banner__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            ducimus saepe sequi soluta pariatur blanditiis optio minima cumque
            ad iusto, accusamus quae repellat, qui repudiandae beatae officia
            molestiae provident dicta.
          </p>
          <button className="mockup1-banner__button">button</button>
        </section>

        <h2 className="mockup1-title">Lorem ipsum dolor</h2>

        <section className="mockup1-cards">
          <div className="mockup1-cards__card">
            <div className="mockup1-cards__circle"></div>
            <h3 className="mockup1-cards__title">Lorem ipsum</h3>
            <p className="mockup1-cards__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              suscipit mollitia hic quas obcaecati ratione magnam, ipsa, nemo
              blanditiis cumque in! Ipsa expedita pariatur sed hic repudiandae
              numquam, et quod?
            </p>
          </div>

          <div className="mockup1-cards__card mockup1-cards__card--center">
            <div className="mockup1-cards__circle"></div>
            <h3 className="mockup1-cards__title">Lorem ipsum</h3>
            <p className="mockup1-cards__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              suscipit mollitia hic quas obcaecati ratione magnam, ipsa, nemo
              blanditiis cumque in! Ipsa expedita pariatur sed hic repudiandae
              numquam, et quod?
            </p>
          </div>
          <div className="mockup1-cards__card">
            <div className="mockup1-cards__circle"></div>
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
