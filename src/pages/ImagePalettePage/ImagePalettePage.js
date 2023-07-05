import "./ImagePalettePage.scss";
import { Palette } from "color-thief-react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../pages/CreatePalettePage/CreatePalettePage.scss";
import "../../components/ExplorePalette/ExplorePalette.scss";
import Mockups from "../../components/Mockups/Mockups";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import convert from "color-convert";
import copyIconDark from "../../assets/images/icons8-copy-dark.png";
import copyIconURL from "../../assets/images/icons8-copy-50.png";
import tinycolor from "tinycolor2";

export default function ImagePalettePage({
  isLoggedIn,
  iframe,
  setIframe,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState("");
  const [collectionsData, setCollectionsData] = useState(null);
  const authToken = sessionStorage.getItem("authToken");

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

  const handleAddToCollection = async (
    e,
    colour1,
    colour2,
    colour3,
    colour4
  ) => {
    e.preventDefault();

    if (!authToken) {
      return navigate("/login");
    }

    try {
      const addedPletteId = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/palettes/`,
        {
          colour1: colour1,
          colour2: colour2,
          colour3: colour3,
          colour4: colour4,
          hue1: convert.hex.hsv(colour1)[0],
          hue2: convert.hex.hsv(colour2)[0],
          hue3: convert.hex.hsv(colour3)[0],
          hue4: convert.hex.hsv(colour4)[0],
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/collections/${
          collectionsData.find(
            (c) => c.collection_name === e.target.collections.value
          ).id
        }`,
        {
          palette_id: addedPletteId.data,
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

  const handleAddToPalettes = async (colour1, colour2, colour3, colour4) => {
    if (!authToken) {
      return navigate("/login");
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/palettes`,
        {
          colour1: colour1,
          colour2: colour2,
          colour3: colour3,
          colour4: colour4,
          hue1: convert.hex.hsv(colour1)[0],
          hue2: convert.hex.hsv(colour2)[0],
          hue3: convert.hex.hsv(colour3)[0],
          hue4: convert.hex.hsv(colour4)[0],
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
    if (authToken) {
      getCollectionsData();
    }
  }, []);

  if (authToken && !collectionsData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <form className="image-palette-form">
        <label className="image-palette-form__label" htmlFor="paletteImage">
          Upload your favorite images to generate beautiful color palettes.
        </label>

        <input
          className="image-palette-form__input"
          type="file"
          name="paletteImage"
          id="paletteImage"
          onChange={(event) => {
            setUploadedImage(event.target.files[0]);
            localStorage.setItem(
              "placeholderImg",
              URL.createObjectURL(event.target.files[0])
            );
          }}
        />
        {uploadedImage && (
          <img
            className="image-palette-form__image"
            src={URL.createObjectURL(uploadedImage)}
            alt="upload image"
          />
        )}
      </form>

      {localStorage.getItem("placeholderImg") && (
        <Palette
          src={localStorage.getItem("placeholderImg")}
          crossOrigin="anonymous"
          format="hex"
          colorCount={4}
        >
          {({ data, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (!localStorage.getItem("col1-1")) {
              for (let i = 1; i <= 4; i++) {
                localStorage.setItem(`col1-${i}`, data[0]);
                localStorage.setItem(`col2-${i}`, data[1]);
                localStorage.setItem(`col3-${i}`, data[2]);
                localStorage.setItem(`col4-${i}`, data[3]);
              }
            }
            return (
              <div>
                <section className="image-mobile-tablet-palette">
                  <div
                    className="image-mobile-tablet-palette__colour"
                    style={{ backgroundColor: data[0] }}
                  >
                    <p
                      className="image-mobile-tablet-palette__hex"
                      style={{
                        color: tinycolor(data[0]).isDark() ? "white" : "black",
                      }}
                    >
                      {data[0]}
                    </p>
                    <img
                      className="image-mobile-tablet-palette__copy-icon"
                      onClick={() => {
                        navigator.clipboard.writeText(data[0]);
                      }}
                      src={
                        tinycolor(data[0]).isDark() ? copyIconURL : copyIconDark
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="image-mobile-tablet-palette__colour"
                    style={{ backgroundColor: data[1] }}
                  >
                    <p
                      className="image-mobile-tablet-palette__hex"
                      style={{
                        color: tinycolor(data[1]).isDark() ? "white" : "black",
                      }}
                    >
                      {data[1]}
                    </p>
                    <img
                      className="image-mobile-tablet-palette__copy-icon"
                      onClick={() => {
                        navigator.clipboard.writeText(data[1]);
                      }}
                      src={
                        tinycolor(data[1]).isDark() ? copyIconURL : copyIconDark
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="image-mobile-tablet-palette__colour"
                    style={{ backgroundColor: data[2] }}
                  >
                    <p
                      className="image-mobile-tablet-palette__hex"
                      style={{
                        color: tinycolor(data[2]).isDark() ? "white" : "black",
                      }}
                    >
                      {data[2]}
                    </p>
                    <img
                      className="image-mobile-tablet-palette__copy-icon"
                      onClick={() => {
                        navigator.clipboard.writeText(data[2]);
                      }}
                      src={
                        tinycolor(data[2]).isDark() ? copyIconURL : copyIconDark
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="image-mobile-tablet-palette__colour"
                    style={{ backgroundColor: data[3] }}
                  >
                    <p
                      className="image-mobile-tablet-palette__hex"
                      style={{
                        color: tinycolor(data[3]).isDark() ? "white" : "black",
                      }}
                    >
                      {data[3]}
                    </p>
                    <img
                      className="image-mobile-tablet-palette__copy-icon"
                      onClick={() => {
                        navigator.clipboard.writeText(data[3]);
                      }}
                      src={
                        tinycolor(data[3]).isDark() ? copyIconURL : copyIconDark
                      }
                      alt=""
                    />
                  </div>
                </section>

                <section className="image-palette">
                  <div className="image-palette__colours-container">
                    <section className="image-palette__card-container">
                      <div
                        style={{ backgroundColor: data[0] }}
                        className="image-palette__colour-card image-palette__colour-card--left"
                      ></div>
                      <div className="image-palette__copy-text-container">
                        <p className="image-palette__colour">{data[0]}</p>
                        <img
                          className="image-palette__copy-icon"
                          onClick={() => {
                            navigator.clipboard.writeText(data[0]);
                          }}
                          src={copyIconURL}
                          alt=""
                        />
                      </div>
                    </section>

                    <section className="image-palette__card-container">
                      <div
                        style={{ backgroundColor: data[1] }}
                        className="image-palette__colour-card"
                      ></div>
                      <div className="image-palette__copy-text-container">
                        <p className="image-palette__colour">{data[1]}</p>
                        <img
                          className="image-palette__copy-icon"
                          onClick={() => {
                            navigator.clipboard.writeText(data[1]);
                          }}
                          src={copyIconURL}
                          alt=""
                        />
                      </div>
                    </section>

                    <section className="image-palette__card-container">
                      <div
                        style={{ backgroundColor: data[2] }}
                        className="image-palette__colour-card"
                      ></div>
                      <div className="image-palette__copy-text-container">
                        <p className="image-palette__colour">{data[2]}</p>
                        <img
                          className="image-palette__copy-icon"
                          onClick={() => {
                            navigator.clipboard.writeText(data[2]);
                          }}
                          src={copyIconURL}
                          alt=""
                        />
                      </div>
                    </section>

                    <section className="image-palette__card-container">
                      <div
                        style={{ backgroundColor: data[3] }}
                        className="image-palette__colour-card  image-palette__colour-card--right"
                      ></div>
                      <div className="image-palette__copy-text-container">
                        <p className="image-palette__colour">{data[3]}</p>
                        <img
                          className="image-palette__copy-icon"
                          onClick={() => {
                            navigator.clipboard.writeText(data[3]);
                          }}
                          src={copyIconURL}
                          alt=""
                        />
                      </div>
                    </section>
                  </div>
                </section>
                {localStorage.setItem("colour1", data[0])}
                {localStorage.setItem("colour2", data[1])}
                {localStorage.setItem("colour3", data[2])}
                {localStorage.setItem("colour4", data[3])}

                <Mockups
                  iframe={iframe}
                  setIframe={setIframe}
                  colour1={data[0]}
                  colour2={data[1]}
                  colour3={data[2]}
                  colour4={data[3]}
                />

                <section className="image-palette-buttons">
                  <button
                    className="image-palette-buttons__button"
                    onClick={() =>
                      handleAddToPalettes(data[0], data[1], data[2], data[3])
                    }
                  >
                    add to my palettes
                  </button>

                  <form
                    className="image-palette-buttons__form"
                    onSubmit={(e) =>
                      handleAddToCollection(
                        e,
                        data[0],
                        data[1],
                        data[2],
                        data[3]
                      )
                    }
                  >
                    {authToken && (
                      <select
                        className="image-palette-buttons__select"
                        name="collections"
                        id="collections"
                      >
                        {collectionsData.map((col) => {
                          return (
                            <option key={uuidv4()} value={col.collection_name}>
                              {col.collection_name}
                            </option>
                          );
                        })}
                      </select>
                    )}
                    <button className="image-palette-buttons__add-collection-button">
                      add to collection
                    </button>
                  </form>
                </section>
              </div>
            );
          }}
        </Palette>
      )}

      <Footer />
    </>
  );
}
