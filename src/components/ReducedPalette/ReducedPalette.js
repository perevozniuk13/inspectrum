import "./ReducedPalette.scss";

export default function ReducedPalette({ colour1, colour2, colour3, colour4 }) {
  return (
    <div className="reduced-palette">
      <div
        className="reduced-palette__colour"
        style={{ backgroundColor: colour1 }}
      ></div>
      <div
        className="reduced-palette__colour"
        style={{ backgroundColor: colour2 }}
      ></div>
      <div
        className="reduced-palette__colour"
        style={{ backgroundColor: colour3 }}
      ></div>
      <div
        className="reduced-palette__colour"
        style={{ backgroundColor: colour4 }}
      ></div>
    </div>
  );
}
