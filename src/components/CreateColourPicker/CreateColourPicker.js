import { useEffect, useState } from "react";
import { SliderPicker } from "react-color";
import "./CreateColourPicker.scss";

export default function CreateColourPicker() {
  const [pickerColor, setPickerColor] = useState("#37d67a");

  return (
    <>
      <section>
        <div className="slider-picker">
          <h6>Color Picker</h6>
          {/* Div to display the color  */}
          <div
            className="slider-picker__result"
            style={{
              backgroundColor: `${pickerColor}`,
            }}
          ></div>
          {/* slider Picker from react-color and handling color on onChange event */}
          <SliderPicker
            className="picker"
            color={pickerColor}
            onChange={(color) => {
              setPickerColor(color.hex);
            }}
          />
        </div>
      </section>
    </>
  );
}
