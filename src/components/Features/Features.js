import "./Features.scss";
import exploreIcon from "../../assets/images/icons8-search-50.png";
import createIcon from "../../assets/images/icons8-paint-50.png";
import collectionIcon from "../../assets/images/icons8-collection-64.png";
import imageIcon from "../../assets/images/icons8-image-30.png";
import mockupIcon from "../../assets/images/icons8-mockup-50.png";
import viewIcon from "../../assets/images/view-icon.png";

export default function Features() {
  return (
    <>
      <section className="features">
        <h2 className="features__title">Features</h2>

        <article className="features__container">
          <div className="feature">
            <img src={exploreIcon} alt="explore icon" />
            <h3 className="feature__title">
              {" "}
              Discover Inspiring Color Combinations
            </h3>
            <p className="feature__description">
              Immerse yourself in a world of creativity and inspiration. From
              bold and vibrant to subtle and elegant, find the perfect color
              combinations that ignite your imagination.
            </p>
          </div>

          <div className="feature">
            <img src={createIcon} alt="create icon" />
            <h3 className="feature__title">Unleash Your Inner Artist</h3>
            <p className="feature__description">
              Embrace your artistic side and bring your vision to life. With our
              intuitive palette builder, you have the power to create unique
              color combinations that reflect your style.
            </p>
          </div>

          <div className="feature">
            <img src={collectionIcon} alt="collection icon" />
            <h3 className="feature__title">Organise Your Color Collections</h3>
            <p className="feature__description">
              Inspecrum lets you create collections and save your most cherished
              combinations for quick and easy access. Whether it's for personal
              projects or professional design work, create a library of colors
              that inspire you.
            </p>
          </div>

          <div className="feature">
            <img src={imageIcon} alt="image icon" />
            <h3 className="feature__title">
              Transform Images into Color Palettes
            </h3>
            <p className="feature__description">
              Witness the magic of color extraction. Capture the essence of a
              photograph, artwork, or any visual masterpiece and transform it
              into a vibrant source of inspiration.
            </p>
          </div>

          <div className="feature">
            <img src={mockupIcon} alt="mockup icon" />
            <h3 className="feature__title"> See Colors Come to Life</h3>
            <p className="feature__description">
              Experience the power of color in context. See how different
              combinations harmonize and make informed decisions to create
              visually stunning web pages.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
