import ReducedPalette from "../ReducedPalette/ReducedPalette";

export default function FavouritesMyPalettes({ data }) {
  return (
    <>
      {" "}
      <section className="user-library__palettes">
        {data.map((palette) => {
          return (
            <ReducedPalette
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
