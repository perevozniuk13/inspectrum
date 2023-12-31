import CreatePaletteHero from "../../components/CreatePaletteHero/CreatePaletteHero";
import CreateColourPicker2 from "../../components/CreateColourPicker2/CreateColourPicker2";
import CreateColourPalette from "../../components/CreateColourPalette/CreateColourPalette";
import Mockups from "../../components/Mockups/Mockups";
import "./CreatePalettePage.scss";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import convert from "color-convert";
import Footer from "../../components/Footer/Footer";

export default function CreatePalettePage({
  isLoggedIn,
  iframe,
  setIframe,
  setIsLoggedIn,
}) {
  const [selectedCard, setSelectedCard] = useState("colour1");
  const [pickedColour, setPickedColour] = useState("");
  const [colour1, setColour1] = useState("");
  const [colour2, setColour2] = useState("");
  const [colour3, setColour3] = useState("");
  const [colour4, setColour4] = useState("");
  const [collectionsData, setCollectionsData] = useState(null);

  const navigate = useNavigate();
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

  const handleAddToCollection = async (e) => {
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

  const handleAddToPalettes = async () => {
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

  const setColourToCard = async () => {
    if (selectedCard === "colour1") {
      await setColour1(pickedColour);
    }
    if (selectedCard === "colour2") {
      await setColour2(pickedColour);
    }
    if (selectedCard === "colour3") {
      await setColour3(pickedColour);
    }
    if (selectedCard === "colour4") {
      await setColour4(pickedColour);
    }
  };

  useEffect(() => {
    if (authToken) {
      getCollectionsData();
    }
  }, []);

  useEffect(() => {
    setColourToCard();
  }, [pickedColour]);

  if (authToken && !collectionsData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <CreatePaletteHero />
      <CreateColourPicker2
        setPickedColour={setPickedColour}
        setSelectedCard={setSelectedCard}
        selectedCard={selectedCard}
      />

      <CreateColourPalette
        colour1={colour1}
        colour2={colour2}
        colour3={colour3}
        colour4={colour4}
        setColour1={setColour1}
        setColour2={setColour2}
        setColour3={setColour3}
        setColour4={setColour4}
        setSelectedCard={setSelectedCard}
        selectedCard={selectedCard}
        setIframe={setIframe}
        iframe={iframe}
      />

      {localStorage.getItem("col4-1") && (
        <Mockups
          iframe={iframe}
          setIframe={setIframe}
          colour1={colour1}
          colour2={colour2}
          colour3={colour3}
          colour4={colour4}
        />
      )}

      <section className="create-palette-buttons">
        <button
          className="create-palette-buttons__button"
          onClick={handleAddToPalettes}
        >
          add to my palettes
        </button>
        <form
          className="create-palette-buttons__form"
          onSubmit={(e) => handleAddToCollection(e)}
        >
          <select
            className="create-palette-buttons__select"
            name="collections"
            id="collections"
          >
            <option value="">-- Select collection --</option>
            {authToken &&
              collectionsData.map((col) => {
                return (
                  <option key={col.id} value={col.collection_name}>
                    {col.collection_name}
                  </option>
                );
              })}
          </select>

          <button className="create-palette-buttons__add-collection-button">
            add to collection
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}
