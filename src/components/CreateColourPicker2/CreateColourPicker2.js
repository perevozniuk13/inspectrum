import React, { useState, useLayoutEffect } from "react";
import "slider-color-picker";
import "./CreateColourPicker2.scss";

export default function CreateColourPicker2({ setPickedColour }) {
  const ref = React.useRef();
  const [color, setColor] = useState("#ff0000");

  const onColorChange = (event) => {
    setColor(event.target.value);
  };

  useLayoutEffect(() => {
    ref.current.addEventListener("change", onColorChange);
  }, [ref]);

  const handleAddColour = async () => {
    await setPickedColour(color);
  };

  return (
    <section>
      <div className="App">
        <slider-color-picker
          ref={ref}
          onChange={onColorChange}
        ></slider-color-picker>
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
