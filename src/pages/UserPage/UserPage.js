import "./UserPage.scss";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Collections from "../../components/Collections/Collections";
import ReducedPalette from "../../components/ReducedPalette/ReducedPalette";
import axios from "axios";
import { useParams } from "react-router-dom";
import FavouritesMyPalettes from "../../components/FavouritesMyPalettes/FavouritesMyPalettes";
import Footer from "../../components/Footer/Footer";

export default function UserPage({
  isLoggedIn,
  userFavouritesData,
  getUserFavourites,
  setIsLoggedIn,
  userData,
}) {
  const [librarySection, setLibrarySection] = useState("collections");
  const [userPalettesData, setUserPalettesData] = useState(null);
  const [collectionsData, setCollectionsData] = useState(null);
  const [favouritesData, setFavouritesData] = useState(null);

  const authToken = sessionStorage.getItem("authToken");
  const getFavourites = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/favourites`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setFavouritesData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

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

  const getCollectionsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/collections`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setCollectionsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollectionsData();
    getUserPalettes();
    getFavourites();
  }, []);

  if (!userPalettesData || !favouritesData || !collectionsData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        userData={userData}
        setIsLoggedIn={setIsLoggedIn}
      />

      <section className="user-info">
        <p className="user-info__username">User: {userData.username}</p>
        <p className="user-info__name">
          Name: {userData.first_name} {userData.last_name}
        </p>
        <p className="user-info__collections">
          Collections: {collectionsData.length}
        </p>
        <p className="user-info__favourites">
          Favourites: {userFavouritesData.length}
        </p>
        <p className="user-info__favourites">
          Created palettes: {userPalettesData.length}
        </p>
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

        {librarySection === "collections" && (
          <Collections
            collectionsData={collectionsData}
            setCollectionsData={setCollectionsData}
            getCollectionsData={getCollectionsData}
          />
        )}
        {librarySection === "palettes" && (
          <FavouritesMyPalettes
            data={userPalettesData}
            librarySection={librarySection}
            getData={getUserPalettes}
          />
        )}
        {librarySection === "favourites" && (
          <FavouritesMyPalettes
            data={favouritesData}
            librarySection={librarySection}
            getData={getFavourites}
          />
        )}
      </section>

      <Footer />
    </>
  );
}
