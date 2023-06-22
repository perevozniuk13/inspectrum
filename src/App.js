import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import PaletteInfoPage from "./pages/PaletteInfoPage/PaletteInfoPage";
import CreatePalettePage from "./pages/CreatePalettePage/CreatePalettePage";
import ImagePalettePage from "./pages/ImagePalettePage/ImagePalettePage";
import UserPage from "./pages/UserPage/UserPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoginSignUpPage from "./pages/LoginSignUpPage/LoginSignUpPage";
import { useEffect, useState } from "react";

import "./App.scss";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import Mockup1 from "./components/Mockup1/Mockup1";
import FavouritesMyPalettes from "./components/FavouritesMyPalettes/FavouritesMyPalettes";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [palettesData, setPalettesData] = useState(null);
  const [userFavouritesData, setUserFavouritesData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [sortMinHue, setSortMinHue] = useState(null);
  const [sortMaxHue, setSortMaxHue] = useState(null);
  const [sortBy, setSortBy] = useState({ sort_by: null, order_by: null });

  const [userData, setUserData] = useState(null);
  const authToken = sessionStorage.getItem("authToken");

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/user`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setUserData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPalettesData = async () => {
    try {
      const receivedPalettesData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/palettes?page=${currentPage}&&min_hue=${sortMinHue}&&max_hue=${sortMaxHue}&&sort_by=${sortBy.sort_by}&&order_by=${sortBy.order_by}`
      );
      setPalettesData([...receivedPalettesData.data].slice(0, -1));
      setTotalPages(
        receivedPalettesData.data[receivedPalettesData.data.length - 1]
      );
    } catch (error) {
      console.log(error);
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
    getPalettesData();
  }, [currentPage, sortMinHue, sortBy]);

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      setIsLoggedIn(true);
      getUserFavourites();
      getUserData();
    }
  }, []);

  if (!palettesData) {
    return <p>Loading...</p>;
  }

  if (isLoggedIn && !userData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route
            path="/explore"
            element={
              <ExplorePage
                isLoggedIn={isLoggedIn}
                palettesData={palettesData}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                sortMinHue={sortMinHue}
                sortMaxHue={sortMaxHue}
                setSortBy={setSortBy}
                setSortMinHue={setSortMinHue}
                setSortMaxHue={setSortMaxHue}
                userFavouritesData={userFavouritesData}
                getPalettesData={getPalettesData}
                getUserFavourites={getUserFavourites}
              />
            }
          />
          <Route
            path="/palettes/:paletteId"
            element={
              <PaletteInfoPage
                isLoggedIn={isLoggedIn}
                palettesData={palettesData}
                username={userData.username}
              />
            }
          />
          <Route
            path="/create"
            element={<CreatePalettePage isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/imagePalette"
            element={<ImagePalettePage isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/profile"
            element={
              <UserPage
                isLoggedIn={isLoggedIn}
                userFavouritesData={userFavouritesData}
                getUserFavourites={getUserFavourites}
                userData={userData}
              />
            }
          />
          <Route
            path="/signup"
            element={<LoginSignUpPage page="signup" isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/login"
            element={
              <LoginSignUpPage page="login" setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/mockup1" element={<Mockup1 />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
