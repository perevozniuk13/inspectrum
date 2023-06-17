import { useEffect, useState } from "react";
import axios from "axios";
import ExplorePalette from "../ExplorePalette/ExplorePalette";
import "./ExplorePalettes.scss";

export default function ExplorePalettes() {
  const [palettesData, setPalettesData] = useState(null);

  const getPalettesData = async () => {
    try {
      const receivedPalettesData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/palettes`
      );
      setPalettesData(receivedPalettesData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPalettesData();
  }, []);

  if (!palettesData) {
    return <p>Loading...</p>;
  }

  // axios call to get palettes list data
  return (
    <>
      <section className="explore-palettes">
        {palettesData.map((palette) => {
          return (
            <ExplorePalette
              key={palette.id}
              colour1={palette.colour1}
              colour2={palette.colour2}
              colour3={palette.colour3}
              colour4={palette.colour4}
            />
          );
        })}
      </section>
    </>
  );
}
