import { useNavigate } from "react-router-dom";
import "./ExplorePalette.scss";

export default function ExplorePalette() {
const navigate = useNavigate();

  const colour1 = '#456373';
  const colour2 = '#786223';
  const colour3 = '#126373';
  const colour4 = '#bd6373';

  return <>
  <section className="explore-palette">
    <div className="explore-palette__colours-container">
        <div style={{'backgroundColor': colour1}} className="explore-palette__colour-card">
            <p className="explore-palette__colour">{colour1}</p>
        </div>
        <div style={{'backgroundColor': colour2}} className="explore-palette__colour-card">
        <p className="explore-palette__colour">{colour2}</p>
        </div>
        <div style={{'backgroundColor': colour3}} className="explore-palette__colour-card">
        <p className="explore-palette__colour">{colour3}</p>
        </div>
        <div style={{'backgroundColor': colour4}} className="explore-palette__colour-card">
        <p className="explore-palette__colour">{colour4}</p>
        </div>
    </div>

    <button onClick={() => navigate("/palettes/:paletteId")} className="explore-palette__view-button">View</button>
  </section>
  </>
}