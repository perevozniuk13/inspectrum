import { useNavigate } from "react-router-dom";
import "./CreateColourPalette.scss";
import { useEffect, useState } from "react";

export default function CreateColourPalette({
  colour1,
  colour2,
  colour3,
  colour4,
  setColour1,
  setColour2,
  setColour3,
  setColour4,
  setSelectedCard,
  selectedCard,
}) {
  const [coloursError, setColoursError] = useState("");

  const handleSavingColours = () => {
    if (!colour1 || !colour2 || !colour3 || !colour4) {
      setColoursError("Please, provide all 4 colours to the palette!");
      return;
    }
    localStorage.setItem("colour1", colour1);
    localStorage.setItem("colour2", colour2);
    localStorage.setItem("colour3", colour3);
    localStorage.setItem("colour4", colour4);
    window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("colour1")) {
      setColour1(localStorage.getItem("colour1"));
    }
    if (localStorage.getItem("colour2")) {
      setColour2(localStorage.getItem("colour2"));
    }
    if (localStorage.getItem("colour3")) {
      setColour3(localStorage.getItem("colour3"));
    }
    if (localStorage.getItem("colour4")) {
      setColour4(localStorage.getItem("colour4"));
    }
  }, []);

  const addBorder1 = selectedCard === "colour1" ? "2px solid white" : "";
  const addBorder2 = selectedCard === "colour2" ? "2px solid white" : "";
  const addBorder3 = selectedCard === "colour3" ? "2px solid white" : "";
  const addBorder4 = selectedCard === "colour4" ? "2px solid white" : "";

  return (
    <>
      <section className="create-palette">
        <div className="create-palette__colours-container">
          <div
            onClick={async () => await setSelectedCard("colour1")}
            style={{ backgroundColor: colour1, border: addBorder1 }}
            className="create-palette__colour-card"
          >
            <p className="create-palette__colour">{colour1}</p>
          </div>
          <div
            onClick={() => setSelectedCard("colour2")}
            style={{ backgroundColor: colour2, border: addBorder2 }}
            className="create-palette__colour-card"
          >
            <p className="create-palette__colour">{colour2}</p>
          </div>
          <div
            onClick={() => setSelectedCard("colour3")}
            style={{ backgroundColor: colour3, border: addBorder3 }}
            className="create-palette__colour-card"
          >
            <p className="create-palette__colour">{colour3}</p>
          </div>
          <div
            onClick={() => setSelectedCard("colour4")}
            style={{ backgroundColor: colour4, border: addBorder4 }}
            className="create-palette__colour-card"
          >
            <p className="create-palette__colour">{colour4}</p>
          </div>
        </div>
        {coloursError && <p className="colours-error">{coloursError}</p>}
        <button
          onClick={handleSavingColours}
          className="create-palette__view-button"
        >
          Save changes
        </button>
      </section>
    </>
  );
}
