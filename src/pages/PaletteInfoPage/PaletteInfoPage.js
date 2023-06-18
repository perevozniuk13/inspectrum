import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "./PaletteInfoPage.scss";
import copyIconURL from "../../assets/images/copy-icon.svg";
import Mockups from "../../components/Mockups/Mockups";

export default function PaletteInfoPage({ palettesData, isLoggedIn }) {
  const { paletteId } = useParams();
  const palette = palettesData.find((p) => p.id == paletteId);
  localStorage.setItem("colour1", palette.colour1);

  const handleAddToFavourites = async () => {
    const authToken = sessionStorage.getItem("authToken");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/favourites`,
        { palette_id: palette.id },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCollection = () => {};

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <section className="palette-info">
        <h1>Palette Info</h1>
        <h2>By: {palette.user_id}</h2>
        <div className="palette-info__colours-container">
          <section className="palette-info__card-container">
            <div
              style={{ backgroundColor: palette.colour1 }}
              className="palette-info__colour-card"
            >
              {/* <p className="palette-info__colour">{palette.colour1}</p> */}
            </div>
            <div className="palette-info__copy-text-container">
              <p className="palette-info__colour">{palette.colour1}</p>
              <img
                className="palette-info__copy-icon"
                onClick={() => {
                  navigator.clipboard.writeText(palette.colour1);
                }}
                src={copyIconURL}
                alt=""
              />
            </div>
          </section>

          <section className="palette-info__card-container">
            <div
              style={{ backgroundColor: palette.colour2 }}
              className="palette-info__colour-card"
            >
              {/* <p className="palette-info__colour">{palette.colour2}</p> */}
            </div>
            <div className="palette-info__copy-text-container">
              <p className="palette-info__colour">{palette.colour2}</p>
              <img
                className="palette-info__copy-icon"
                onClick={() => {
                  navigator.clipboard.writeText(palette.colour2);
                }}
                src={copyIconURL}
                alt=""
              />
            </div>
          </section>

          <section className="palette-info__card-container">
            <div
              style={{ backgroundColor: palette.colour3 }}
              className="palette-info__colour-card"
            >
              {/* <p className="palette-info__colour">{palette.colour3}</p> */}
            </div>
            <div className="palette-info__copy-text-container">
              <p className="palette-info__colour">{palette.colour3}</p>
              <img
                className="palette-info__copy-icon"
                onClick={() => {
                  navigator.clipboard.writeText(palette.colour3);
                }}
                src={copyIconURL}
                alt=""
              />
            </div>
          </section>

          <section className="palette-info__card-container">
            <div
              style={{ backgroundColor: palette.colour4 }}
              className="palette-info__colour-card"
            >
              {/* <p className="palette-info__colour">{palette.colour4}</p> */}
            </div>
            <div className="palette-info__copy-text-container">
              <p className="palette-info__colour">{palette.colour4}</p>
              <img
                className="palette-info__copy-icon"
                onClick={() => {
                  navigator.clipboard.writeText(palette.colour4);
                }}
                src={copyIconURL}
                alt=""
              />
            </div>
          </section>
        </div>
      </section>

      <Mockups />

      <section className="palette-info-buttons">
        <button
          onClick={handleAddToFavourites}
          className="palette-info-buttons__button"
        >
          add to favourites
        </button>
        <button className="palette-info-buttons__button">
          add to collection
        </button>
      </section>
    </>
  );
}
