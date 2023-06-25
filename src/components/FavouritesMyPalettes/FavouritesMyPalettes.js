import ReducedPalette from "../ReducedPalette/ReducedPalette";
import deleteIcon from "../../assets/images/delete-30.png";
import viewIconURL from "../../assets/images/eye.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FavouritesMyPalettes.scss";

export default function FavouritesMyPalettes({
  data,
  librarySection,
  getData,
}) {
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("authToken");

  const handleDeletePalette = async (favouriteId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/users/palettes/${favouriteId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteFavourite = async (paletteId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/users/favourites/${paletteId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFunction =
    librarySection === "palettes" ? handleDeletePalette : handleDeleteFavourite;

  return (
    <>
      <section className="user-library__palettes">
        {!data.length && <p>You don't have any {librarySection} yet...</p>}
        {data.map((palette) => {
          return (
            <div className="user-library__palette-container" key={palette.id}>
              <ReducedPalette
                colour1={palette.colour1}
                colour2={palette.colour2}
                colour3={palette.colour3}
                colour4={palette.colour4}
              />
              <div className="user-library__icon-container">
                <img
                  className="user-library__delete-button"
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={() => deleteFunction(palette.id)}
                />
                <img
                  className="library-collection__delete-button"
                  src={viewIconURL}
                  alt="view icon"
                  onClick={() => {
                    librarySection === "favourites"
                      ? navigate(`/palettes/${palette.palette_id}`, {
                          state: "user",
                        })
                      : navigate(`/palettes/${palette.id}`, { state: "user" });
                  }}
                />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
