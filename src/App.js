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
import Mockup2 from "./components/Mockup2/Mockup2";
import Mockup3 from "./components/Mockup3/Mockup3";
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
  const [allUsers, setAllUsers] = useState(null);
  const authToken = sessionStorage.getItem("authToken");

  const [iframe, setIframe] = useState({
    iframe_key: 0,
    iframe_url: null, //Your URL here
  });

  // const [changedColours, setChangedColours] = useState({
  //   col1: 1,
  //   col2: 2,
  //   col3: 3,
  //   col4: 4,
  // });

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

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users`
      );
      setAllUsers(response.data);
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
    getAllUsers();
  }, []);

  if (!palettesData || !allUsers) {
    return <p>Loading...</p>;
  }

  if (sessionStorage.getItem("authToken") && !userData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isLoggedIn={isLoggedIn}
                userData={userData}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/explore"
            element={
              <ExplorePage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                userData={userData}
                palettesData={palettesData}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                sortMinHue={sortMinHue}
                sortMaxHue={sortMaxHue}
                setSortBy={setSortBy}
                setSortMinHue={setSortMinHue}
                setSortMaxHue={setSortMaxHue}
                userFavouritesData={userFavouritesData}
                getPalettesData={getPalettesData}
                getUserFavourites={getUserFavourites}
                setPalettesData={setPalettesData}
                getAllUsers={getAllUsers}
                allUsers={allUsers}
              />
            }
          />
          <Route
            path="/palettes/:paletteId"
            element={
              <PaletteInfoPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                palettesData={palettesData}
                userData={userData}
                iframe={iframe}
                setIframe={setIframe}
                allUsers={allUsers}
                getAllUsers={getAllUsers}
              />
            }
          />
          <Route
            path="/create"
            element={
              <CreatePalettePage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                userData={userData}
                iframe={iframe}
                setIframe={setIframe}
                // setChangedColours={setChangedColours}
                // changedColours={changedColours}
              />
            }
          />
          <Route
            path="/imagePalette"
            element={
              <ImagePalettePage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                userData={userData}
                iframe={iframe}
                setIframe={setIframe}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <UserPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
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
          <Route
            path="/mockup1/:query"
            element={
              <Mockup1 iframe={iframe} />
              // <Mockup1 iframe={iframe} changedColours={changedColours} />
            }
          />
          <Route path="/mockup2/:query" element={<Mockup2 iframe={iframe} />} />
          <Route path="/mockup3/:query" element={<Mockup3 iframe={iframe} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
