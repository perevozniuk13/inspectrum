import CreateColourPicker from "../../components/CreateColourPicker/CreateColourPicker";
import CreatePaletteHero from "../../components/CreatePaletteHero/CreatePaletteHero";
import CreateColourPicker2 from "../../components/CreateColourPicker2/CreateColourPicker2";
import CreateColourPalette from "../../components/CreateColourPalette/CreateColourPalette";
import Mockups from "../../components/Mockups/Mockups";
import "./CreatePalettePage.scss";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";

export default function CreatePalettePage({ isLoggedIn }) {
  const [selectedCard, setSelectedCard] = useState("");
  const [pickedColour, setPickedColour] = useState("");
  const [colour1, setColour1] = useState("");
  const [colour2, setColour2] = useState("");
  const [colour3, setColour3] = useState("");
  const [colour4, setColour4] = useState("");

  const setColourToCard = async () => {
    if (selectedCard === "colour1") {
      console.log(selectedCard, "w");
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
    setColourToCard();
  }, [pickedColour]);

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
    </>
  );
}
