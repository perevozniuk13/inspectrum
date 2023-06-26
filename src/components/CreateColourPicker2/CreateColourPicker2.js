import React, { useState, useLayoutEffect } from "react";
import "slider-color-picker";
import "./CreateColourPicker2.scss";

export default function CreateColourPicker2({
  setPickedColour,
  setSelectedCard,
  selectedCard,
}) {
  const ref = React.useRef();
  const [color, setColor] = useState("");
  const [inputHex, setInputHex] = useState("");

  const onColorChange = (event) => {
    setColor(event.target.value);
    setInputHex(event.target.value);
  };

  useLayoutEffect(() => {
    ref.current.addEventListener("change", onColorChange);
  }, [ref]);

  const handleAddColour = async () => {
    setInputHex("");
    await setPickedColour(color);
    localStorage.setItem(selectedCard, color);
    for (let i = 1; i <= 4; i++) {
      if (!localStorage.getItem(`colour${i}`)) {
        setSelectedCard(`colour${i}`);
        break;
      }
    }
  };

  return (
    <section>
      <div className="App">
        <section className="left-container">
          <slider-color-picker
            ref={ref}
            onChange={onColorChange}
          ></slider-color-picker>
          <div className="input-hex">
            Or paste your colour:
            <input
              className="input-hex__input"
              type="text"
              placeholder="#ffffff"
              onChange={onColorChange}
              value={inputHex}
            />
          </div>
        </section>
        <div className="container">
          <div className="preview" style={{ background: color }}></div>
          <button onClick={handleAddColour} className="button">
            add colour
          </button>
        </div>
      </div>
    </section>
  );
}
