import "./UserPage.scss";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Collections from "../../components/Collections/Collections";
import ReducedPalette from "../../components/ReducedPalette/ReducedPalette";
import axios from "axios";
import { useParams } from "react-router-dom";
import FavouritesMyPalettes from "../../components/FavouritesMyPalettes/FavouritesMyPalettes";

export default function UserPage({ isLoggedIn }) {
  const [librarySection, setLibrarySection] = useState("collections");
  const [userPalettesData, setUserPalettesData] = useState(null);
  const [userFavouritesData, setUserFavouritesData] = useState(null);
  const authToken = sessionStorage.getItem("authToken");

  const getUserPalettes = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/palettes`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setUserPalettesData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserFavourites = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/favourites`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setUserFavouritesData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserPalettes();
    getUserFavourites();
  }, []);

  if (!userPalettesData || !userFavouritesData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <section className="user-info">
        <p className="user-info__username">User: user123</p>
        <p className="user-info__name">Name: Sasha</p>
        <p className="user-info__collections">Collections: 0</p>
        <p className="user-info__favourites">Favourites: 5</p>
        <p className="user-info__favourites">Created palettes: 5</p>
      </section>

      <section className="user-library">
        <ul className="user-library__nav">
          <li
            className={`user-library__nav-link user-library__nav-link${
              librarySection === "collections" ? "--selected" : ""
            }`}
            onClick={() => {
              setLibrarySection("collections");
            }}
          >
            Collections
          </li>
          <li
            className={`user-library__nav-link user-library__nav-link${
              librarySection === "palettes" ? "--selected" : ""
            }`}
            onClick={() => {
              setLibrarySection("palettes");
            }}
          >
            My Palettes
          </li>
          <li
            className={`user-library__nav-link user-library__nav-link${
              librarySection === "favourites" ? "--selected" : ""
            }`}
            onClick={() => {
              setLibrarySection("favourites");
            }}
          >
            Favourites
          </li>
        </ul>

        {librarySection === "collections" && <Collections />}
        {librarySection === "palettes" && (
          <FavouritesMyPalettes
            data={userPalettesData}
            librarySection={librarySection}
            getData={getUserPalettes}
          />
        )}
        {librarySection === "favourites" && (
          <FavouritesMyPalettes
            data={userFavouritesData}
            librarySection={librarySection}
            getData={getUserFavourites}
          />
        )}
      </section>
    </>
  );
}
