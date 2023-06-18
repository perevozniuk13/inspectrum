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

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isMockup, setIsMockup] = useState(false);
  const [palettesData, setPalettesData] = useState(null);

  const getPalettesData = async () => {
    try {
      const receivedPalettesData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/palettes`
      );
      setPalettesData(receivedPalettesData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPalettesData();
    if (sessionStorage.getItem("authToken")) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!palettesData) {
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
              />
            }
          />
          <Route
            path="/palettes/:paletteId"
            element={
              <PaletteInfoPage
                isLoggedIn={isLoggedIn}
                palettesData={palettesData}
              />
            }
          />
          <Route
            path="/create"
            element={<CreatePalettePage isLoggedIn={isLoggedIn} />}
          />
          <Route path="/imagePalette" element={<ImagePalettePage />} />
          <Route
            path="/profile/:userId"
            element={<UserPage isLoggedIn={isLoggedIn} />}
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
          {console.log(palettesData)}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
