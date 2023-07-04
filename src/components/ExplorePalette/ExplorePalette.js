import { useNavigate } from "react-router-dom";
import "./ExplorePalette.scss";
import likeIconURL from "../../assets/images/like-icon.png";
import likedIconURL from "../../assets/images/liked-icon.png";
import axios from "axios";

export default function ExplorePalette({
  colour1,
  colour2,
  colour3,
  colour4,
  id,
  likes,
  createdAt,
  userFavouritesData,
  getPalettesData,
  getUserFavourites,
}) {
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("authToken");
  const date = new Date(createdAt);

  const handleAddToFavourites = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/favourites`,
        { palette_id: id },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      getPalettesData();
      getUserFavourites();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteFavourite = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/users/favourites/${
          userFavouritesData.find((f) => f.palette_id === id).id
        }`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      getPalettesData();
      getUserFavourites();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="explore-palette">
        <div
          onClick={() => navigate(`/palettes/${id}`, { state: "explore" })}
          className="explore-palette__colours-container"
        >
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

        <div className="explore-palette__buttons-container">
          <div className="explore-palette__likes-container">
            <p className="explore-palette__likes-count">{likes}</p>

            {sessionStorage.getItem("authToken") ? (
              <section>
                {!userFavouritesData.find(
                  (favourite) => favourite.palette_id === id
                ) ? (
                  <img
                    className="explore-palette__like-button"
                    src={likeIconURL}
                    alt="like icon"
                    onClick={handleAddToFavourites}
                  />
                ) : (
                  <img
                    className="explore-palette__like-button"
                    src={likedIconURL}
                    alt="liked icon"
                    onClick={handleDeleteFavourite}
                  />
                )}{" "}
              </section>
            ) : (
              <section>
                <img
                  className="explore-palette__like-button"
                  src={likedIconURL}
                  alt="liked icon"
                  onClick={() => navigate("/login")}
                />
              </section>
            )}
          </div>

          <p className="date">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
        </div>
      </section>
    </>
  );
}
