import CreateColourPicker from "../../components/CreateColourPicker/CreateColourPicker";
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
  userData,
  iframe,
  setIframe,
  setIsLoggedIn,
  // setChangedColours,
  // changedColours,
}) {
  const [selectedCard, setSelectedCard] = useState("colour1");
  const [pickedColour, setPickedColour] = useState("");
  const [colour1, setColour1] = useState("");
  const [colour2, setColour2] = useState("");
  const [colour3, setColour3] = useState("");
  const [colour4, setColour4] = useState("");

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
    console.log("col1", colour1);
  };

  useEffect(() => {
    if (authToken) {
      getCollectionsData();
    }

    // setChangedColours({ col1: 1, col2: 2, col3: 3, col4: 4 });
  }, []);

  useEffect(() => {
    setColourToCard();
  }, [pickedColour]);

  if (authToken && !collectionsData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        userData={userData}
        setIsLoggedIn={setIsLoggedIn}
      />
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
          // setChangedColours={setChangedColours}
          // changedColours={changedColours}
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
        <form className="add" onSubmit={(e) => handleAddToCollection(e)}>
          {authToken && (
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
          <button className="create-palette-buttons__add-collection-button">
            add to collection
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}
