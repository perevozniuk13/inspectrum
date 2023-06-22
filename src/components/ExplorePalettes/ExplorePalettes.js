import { useEffect, useState } from "react";
import axios from "axios";
import ExplorePalette from "../ExplorePalette/ExplorePalette";
import "./ExplorePalettes.scss";

export default function ExplorePalettes({
  palettesData,
  userFavouritesData,
  getPalettesData,
  getUserFavourites,
}) {
  // axios call to get palettes list data
  return (
    <>
      <section className="explore-palettes">
        {palettesData.map((palette) => {
          return (
            <ExplorePalette
              userFavouritesData={userFavouritesData}
              key={palette.id}
              id={palette.id}
              colour1={palette.colour1}
              colour2={palette.colour2}
              colour3={palette.colour3}
              colour4={palette.colour4}
              likes={palette.likes}
              createdAt={palette.created_at}
              getPalettesData={getPalettesData}
              getUserFavourites={getUserFavourites}
            />
          );
        })}
      </section>
    </>
  );
}
