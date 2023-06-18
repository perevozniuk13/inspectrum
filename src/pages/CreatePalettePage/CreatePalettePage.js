import CreateColourPicker from "../../components/CreateColourPicker/CreateColourPicker";
import CreatePaletteHero from "../../components/CreatePaletteHero/CreatePaletteHero";
import CreateColourPicker2 from "../../components/CreateColourPicker2/CreateColourPicker2";
import CreateColourPalette from "../../components/CreateColourPalette/CreateColourPalette";
import Mockups from "../../components/Mockups/Mockups";
import "./CreatePalettePage.scss";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";

export default function CreatePalettePage({ isLoggedIn }) {
  const [selectedCard, setSelectedCard] = useState("");
  const [pickedColour, setPickedColour] = useState("");
  const [colour1, setColour1] = useState("");
  const [colour2, setColour2] = useState("");
  const [colour3, setColour3] = useState("");
  const [colour4, setColour4] = useState("");

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
      console.log(response.data, "a");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToPalettes = async (e) => {
    e.preventDefault();
    const authToken = sessionStorage.getItem("authToken");

    let collectionId = null;
    if (e.target.collections) {
      collectionId = collectionsData.find(
        (c) => c.collection_name === e.target.collections.value
      ).id;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/palettes`,
        {
          colour1: colour1,
          colour2: colour2,
          colour3: colour3,
          colour4: colour4,
          collection_id: collectionId,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
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
    getCollectionsData();
  }, []);

  useEffect(() => {
    setColourToCard();
  }, [pickedColour]);

  if (!collectionsData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <CreatePaletteHero />
      {/* <CreateColourPicker /> */}
      <CreateColourPicker2 setPickedColour={setPickedColour} />

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
      />

      <Mockups />

      <section className="create-palette-buttons">
        <button
          // onClick={handleAddToFavourites}
          className="create-palette-buttons__button"
          onClick={(e) => handleAddToPalettes(e)}
        >
          add to my palettes
        </button>
        <form className="add" onSubmit={(e) => handleAddToPalettes(e)}>
          add to collection
          <select className="add-c" name="collections" id="collections">
            {collectionsData.map((col) => {
              return (
                <option value={col.collection_name}>
                  {col.collection_name}
                </option>
              );
            })}
          </select>
          <button className="create-palette-buttons__button">
            add to collection
          </button>
        </form>
      </section>
    </>
  );
}
