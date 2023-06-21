import React, { useState, useLayoutEffect } from "react";
import "slider-color-picker";
import "./CreateColourPicker2.scss";
import convert from "color-convert";

export default function CreateColourPicker2({ setPickedColour }) {
  const ref = React.useRef();
  const [color, setColor] = useState("#ff0000");
  const [inputHex, setInputHex] = useState("");

  const arr = ["#8B0000", "#1E90FF", "#FF8C00", "#800080"];

  arr.forEach((col) => {
    console.log(convert.hex.hsv(col)[0]);
  });

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
