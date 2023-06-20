import { useNavigate } from "react-router-dom";
import "./ExplorePalette.scss";
import likeIconURL from "../../assets/images/like-icon.png";
import likedIconURL from "../../assets/images/liked-icon.png";
import { useState } from "react";

export default function ExplorePalette({
  colour1,
  colour2,
  colour3,
  colour4,
  id,
}) {
  const navigate = useNavigate();
  const [paletteLiked, setPaletteLiked] = useState(false);

  const handleLike = async () => {
    return;
  };

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
          onClick={() => navigate(`/palettes/${id}`, { state: "explore" })}
          className="explore-palette__view-button"
        >
          View
        </button>

        {/* {!paletteLiked ? (
          <img
            className="explore-palette__like-button"
            src={likeIconURL}
            alt="like icon"
            onClick={handleLike}
          />
        ) : (
          <img
            className="explore-palette__like-button"
            src={likedIconURL}
            alt="liked icon"
          />
        )} */}
      </section>
    </>
  );
}
