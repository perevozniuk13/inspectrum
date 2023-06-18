import { useNavigate } from "react-router-dom";
import "./ExplorePalette.scss";

export default function ExplorePalette({
  colour1,
  colour2,
  colour3,
  colour4,
  id,
}) {
  const navigate = useNavigate();

  return (
    <>
      <section className="explore-palette">
        <div className="explore-palette__colours-container">
          <div
            style={{ backgroundColor: colour1 }}
            className="explore-palette__colour-card"
          >
            <p className="explore-palette__colour">{colour1}</p>
          </div>
          <div
            style={{ backgroundColor: colour2 }}
            className="explore-palette__colour-card"
          >
            <p className="explore-palette__colour">{colour2}</p>
          </div>
          <div
            style={{ backgroundColor: colour3 }}
            className="explore-palette__colour-card"
          >
            <p className="explore-palette__colour">{colour3}</p>
          </div>
          <div
            style={{ backgroundColor: colour4 }}
            className="explore-palette__colour-card"
          >
            <p className="explore-palette__colour">{colour4}</p>
          </div>
        </div>

        <button
          onClick={() => navigate(`/palettes/${id}`)}
          className="explore-palette__view-button"
        >
          View
        </button>
      </section>
    </>
  );
}
