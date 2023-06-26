import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "./PaletteInfoPage.scss";
import copyIconURL from "../../assets/images/icons8-copy-30.png";
import Mockups from "../../components/Mockups/Mockups";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";

export default function PaletteInfoPage({
  palettesData,
  isLoggedIn,
  allUsers,
  userData,
  iframe,
  setIframe,
  setIsLoggedIn,
  getAllUsers,
}) {
  const { paletteId } = useParams();
  const [palette, setPalette] = useState(null);

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

  const getPalettes = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/palettes/all`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setPalette(response.data.find((p) => p.id == paletteId));
    } catch (err) {
      console.log(err);
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
    if (isLoggedIn && location.state === "explore") {
      setPalette(palettesData.find((p) => p.id == paletteId));
      getCollectionsData();
    } else if (location.state == "user") {
      getPalettes();
      getCollectionsData();
    } else {
      setPalette(palettesData.find((p) => p.id == paletteId));
    }
    getAllUsers();
  }, []);

  useEffect(() => {
    if (palette) {
      for (let i = 1; i <= 4; i++) {
        localStorage.setItem(`col1-${i}`, palette.colour1);
        localStorage.setItem(`col2-${i}`, palette.colour2);
        localStorage.setItem(`col3-${i}`, palette.colour3);
        localStorage.setItem(`col4-${i}`, palette.colour4);
      }
    }
  }, [palette]);

  if (!palette) {
    return <p>Loading...</p>;
  }

  if (isLoggedIn && !collectionsData) {
    return <p>Loading...</p>;
  }

  const date = new Date(palette.created_at);

  return (
    <section className="palette-info-page">
      <Header
        isLoggedIn={isLoggedIn}
        userData={userData}
        setIsLoggedIn={setIsLoggedIn}
      />

      <section className="palette-info">
        <div className="palette-info__colours-container">
          <section className="palette-info__card-container">
            <div
              style={{ backgroundColor: palette.colour1 }}
              className="palette-info__colour-card palette-info__colour-card--left"
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
              className="palette-info__colour-card  palette-info__colour-card--right"
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

      <section className="palette-about">
        <h1 className="palette-about__title"> Palette Info</h1>
        <p className="palette-about__text">
          <b>By: </b>{" "}
          {allUsers.find((user) => user.id === palette.user_id).username}
        </p>
        <p className="palette-about__text">
          <b>Created:</b>{" "}
          {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}   ${date.getHours()}:${date.getMinutes()}`}
        </p>
        <p className="palette-about__text">
          <b>Likes: </b> {palette.likes}
        </p>
      </section>

      <Mockups
        iframe={iframe}
        setIframe={setIframe}
        colour1={palette.colour1}
        colour2={palette.colour2}
        colour3={palette.colour3}
        colour4={palette.colour4}
      />
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
                <option value="">-- Select collection --</option>
                {collectionsData.map((col) => {
                  return (
                    <option key={col.id} value={col.collection_name}>
                      {col.collection_name}
                    </option>
                  );
                })}
              </select>
            )}
            <button className="palette-info-buttons__add-collection-button">
              add to collection
            </button>
          </form>
        </section>
      )}
      {location.state === "user" && (
        <section className="palette-info-buttons">
          <form
            className="add-button"
            onSubmit={(e) => handleAddToCollection(e)}
          >
            <select
              className="add-collection"
              name="collections"
              id="collections"
            >
              <option value="">-- Select collection --</option>
              {collectionsData.map((col) => {
                return (
                  <option key={col.id} value={col.collection_name}>
                    {col.collection_name}
                  </option>
                );
              })}
            </select>
            <button className="palette-info-buttons__add-collection-button">
              add to collection
            </button>
          </form>
        </section>
      )}

      <Footer />
    </section>
  );
}
