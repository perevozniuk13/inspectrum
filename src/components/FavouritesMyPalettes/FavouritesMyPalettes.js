import ReducedPalette from "../ReducedPalette/ReducedPalette";
import deleteIcon from "../../assets/images/delete-icon.svg";
import axios from "axios";

export default function FavouritesMyPalettes({
  data,
  librarySection,
  getData,
}) {
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
      {" "}
      <section className="user-library__palettes">
        {data.map((palette) => {
          return (
            <>
              <ReducedPalette
                key={palette.id}
                colour1={palette.colour1}
                colour2={palette.colour2}
                colour3={palette.colour3}
                colour4={palette.colour4}
              />
              <img
                className="user-library__delete-button"
                src={deleteIcon}
                alt="delete icon"
                onClick={() => deleteFunction(palette.id)}
              />
            </>
          );
        })}
      </section>
    </>
  );
}
