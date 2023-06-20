// import React, { useState } from 'react'

// import { HueSlider, SaturationSlider, LightnessSlider, AlphaSlider } from 'react-slider-color-picker';

// interface Color {
//   h: number
//   s: number
//   l: number
//   a: number
// }

// const App = () => {

//   const [color, setColor] = useState<Color>({h: 180, s: 100, l: 50, a: 1})

//   const handleChangeColor = (newColor: Color) => {
//     setColor(newColor)
//   }

//   return (
//     <>
//       <HueSlider handleChangeColor={handleChangeColor} color={color} />
//       <SaturationSlider handleChangeColor={handleChangeColor} color={color} />
//       <LightnessSlider handleChangeColor={handleChangeColor} color={color} />
//       <AlphaSlider handleChangeColor={handleChangeColor} color={color}/>
//     <>
//   )
// }
