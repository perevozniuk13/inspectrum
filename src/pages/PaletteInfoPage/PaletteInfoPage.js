import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "./PaletteInfoPage.scss";
import copyIconURL from "../../assets/images/copy-icon.svg";
import Mockups from "../../components/Mockups/Mockups";
import { useState, useEffect } from "react";

export default function PaletteInfoPage({ palettesData, isLoggedIn }) {
  const { paletteId } = useParams();
  const palette = palettesData.find((p) => p.id == paletteId);
  localStorage.setItem("colour1", palette.colour1);
  localStorage.setItem("colour2", palette.colour2);
  localStorage.setItem("colour3", palette.colour3);
  localStorage.setItem("colour4", palette.colour4);

  const [collectionsData, setCollectionsData] = useState(null);
  const authToken = sessionStorage.getItem("authToken");
  const navigate = useNavigate();
  const location = useLocation();

  const getCollectionsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/collections`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setCollectionsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToFavourites = async () => {
    if (!authToken) {
      return navigate("/login");
    }

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
      localStorage.clear();
      setTimeout(() => navigate("/profile"), 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCollection = async (e) => {
    e.preventDefault();

    if (!authToken) {
      return navigate("/login");
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/collections/${
          collectionsData.find(
            (c) => c.collection_name === e.target.collections.value
          ).id
        }`,
        {
          palette_id: palette.id,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      localStorage.clear();
      setTimeout(() => navigate("/profile"), 1000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getCollectionsData();
    }
  }, []);

  if (isLoggedIn && !collectionsData) {
    return <p>Loading...</p>;
  }

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
            ></div>
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
            ></div>
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
            ></div>
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
            ></div>
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
      {location.state === "explore" && (
        <section className="palette-info-buttons">
          <button
            onClick={handleAddToFavourites}
            className="palette-info-buttons__button"
          >
            add to favourites
          </button>
          <form className="add" onSubmit={(e) => handleAddToCollection(e)}>
            {isLoggedIn && (
              <select className="add-c" name="collections" id="collections">
                {collectionsData.map((col) => {
                  return (
                    <option value={col.collection_name}>
                      {col.collection_name}
                    </option>
                  );
                })}
              </select>
            )}
            <button className="palette-info-buttons__button">
              add to collection
            </button>
          </form>
        </section>
      )}
    </>
  );
}
