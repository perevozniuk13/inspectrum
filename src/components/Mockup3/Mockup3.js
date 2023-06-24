import { useParams } from "react-router-dom";
import "./Mockup3.scss";

export default function Mockup3({ iframe }) {
  const { color } = useParams();
  console.log("color", color);
  return (
    <>
      <div className="mockup3">
        {/* // style={{ backgroundColor: color && `#${color}` }}></> */}

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
          <h1 className="mockup3-hero__title">Lorem ipsum dolor</h1>
          <p className="mockup3-hero__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            corrupti veniam ad culpa ducimus.
          </p>
          <button className="mockup3-hero__button">button</button>
        </section>

        <section className="mockup3-main">
          <div className="mockup3-main__card mockup3-main__card--coloured">
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

          <div className="mockup3-main__card mockup3-main__card--coloured">
            <h2 className="mockup3-main__card-title">Lorem</h2>
          </div>

          <div className="mockup3-main__card mockup3-main__card--coloured">
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
