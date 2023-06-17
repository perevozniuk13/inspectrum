import { useNavigate } from "react-router-dom";
import "./CreateColourPalette.scss";

export default function CreateColourPalette({
  colour1,
  colour2,
  colour3,
  colour4,
  setSelectedCard,
  selectedCard,
}) {
  const navigate = useNavigate();

  const addBorder1 =
    selectedCard === "colour1" ? "2px solid red" : "1px solid black";
  const addBorder2 =
    selectedCard === "colour2" ? "2px solid red" : "1px solid black";
  const addBorder3 =
    selectedCard === "colour3" ? "2px solid red" : "1px solid black";
  const addBorder4 =
    selectedCard === "colour4" ? "2px solid red" : "1px solid black";

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

        <button
          onClick={() => navigate("/palettes/:paletteId")}
          className="create-palette__view-button"
        >
          View
        </button>
      </section>
    </>
  );
}
