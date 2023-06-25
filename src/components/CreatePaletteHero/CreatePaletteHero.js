import "./CreatePaletteHero.scss";
import { useNavigate } from "react-router-dom";

export default function CreatePaletteHero() {
  const navigate = useNavigate();

  return (
    <>
      <section className="create-hero">
        <h1 className="create-hero__title">
          Design your own stunning palettes that inspire and captivate.
        </h1>
        {/* <button onClick={() => navigate("/imagePalette")} className="create-hero__image-palette-button">get image palette</button> */}
      </section>
    </>
  );
}
