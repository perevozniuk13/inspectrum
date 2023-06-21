import "./ImagePalettePage.scss";
import IMAGE_URL from "../../assets/images/Upload-video-preview.jpg";
import { usePalette } from "color-thief-react";
import { Palette } from "color-thief-react";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../pages/CreatePalettePage/CreatePalettePage.scss";
import "../../components/ExplorePalette/ExplorePalette.scss";
import Mockups from "../../components/Mockups/Mockups";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import convert from "color-convert";

export default function ImagePalettePage({ isLoggedIn }) {
  const [uploadedImage, setUploadedImage] = useState("");
  const navigate = useNavigate();
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

  const placeholderImgURL = localStorage.getItem("placeholderImg")
    ? localStorage.getItem("placeholderImg")
    : "https://via.placeholder.com/600x300";

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <form className="image-palette-form">
        <label className="image-palette-form__label" htmlFor="paletteImage">
          Upload your image to get a palette
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
        {uploadedImage ? (
          <img
            className="image-palette-form__image"
            src={URL.createObjectURL(uploadedImage)}
            alt="upload image"
          />
        ) : (
          <img
            className="image-palette-form__image"
            src={placeholderImgURL}
            alt="placeholder image"
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
            return (
              <div>
                <section>
                  <div className="explore-palette__colours-container">
                    <div
                      style={{ backgroundColor: data[0] }}
                      className="explore-palette__colour-card"
                    >
                      <p className="explore-palette__colour">{data[0]}</p>
                    </div>
                    <div
                      style={{ backgroundColor: data[1] }}
                      className="explore-palette__colour-card"
                    >
                      <p className="explore-palette__colour">{data[1]}</p>
                    </div>
                    <div
                      style={{ backgroundColor: data[2] }}
                      className="explore-palette__colour-card"
                    >
                      <p className="explore-palette__colour">{data[2]}</p>
                    </div>
                    <div
                      style={{ backgroundColor: data[3] }}
                      className="explore-palette__colour-card"
                    >
                      <p className="explore-palette__colour">{data[3]}</p>
                    </div>
                  </div>
                </section>
                {localStorage.setItem("colour1", data[0])}
                {localStorage.setItem("colour2", data[1])}
                {localStorage.setItem("colour3", data[2])}
                {localStorage.setItem("colour4", data[3])}
                <Mockups />
                <section className="create-palette-buttons">
                  <button
                    className="create-palette-buttons__button"
                    onClick={() =>
                      handleAddToPalettes(data[0], data[1], data[2], data[3])
                    }
                  >
                    add to my palettes
                  </button>
                  <form
                    className="add"
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
                        className="add-c"
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
                    <button className="create-palette-buttons__add-collection-button">
                      add to collection
                    </button>
                  </form>
                </section>
              </div>
            );
          }}
        </Palette>
      )}
    </>
  );
}
