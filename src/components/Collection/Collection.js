import ReducedPalette from "../ReducedPalette/ReducedPalette";
import "./Collection.scss";

export default function Collection() {
  return (
    <section className="library-collection">
      <h3 className="library-collection__name">Collection Name</h3>
      <div className="library-collection__palettes-container">
        <ReducedPalette
          colour1={"black"}
          colour2={"white"}
          colour3={"blue"}
          colour4={"red"}
        />
        <ReducedPalette
          colour1={"black"}
          colour2={"white"}
          colour3={"blue"}
          colour4={"red"}
        />
        <ReducedPalette
          colour1={"black"}
          colour2={"white"}
          colour3={"blue"}
          colour4={"red"}
        />
      </div>
    </section>
  );
}
