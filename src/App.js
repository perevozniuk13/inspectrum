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
import Mockup1 from "./components/Mockup1/Mockup1";
import Mockup2 from "./components/Mockup2/Mockup2";
import Mockup3 from "./components/Mockup3/Mockup3";
import "./App.scss";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [iframe, setIframe] = useState({
    iframe_key: 0,
    iframe_url: null,
  });

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/explore"
            element={
              <ExplorePage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/palettes/:paletteId"
            element={
              <PaletteInfoPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                iframe={iframe}
                setIframe={setIframe}
              />
            }
          />
          <Route
            path="/create"
            element={
              <CreatePalettePage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                iframe={iframe}
                setIframe={setIframe}
              />
            }
          />
          <Route
            path="/imagePalette"
            element={
              <ImagePalettePage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                iframe={iframe}
                setIframe={setIframe}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <UserPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
          <Route path="/mockup1/:query" element={<Mockup1 iframe={iframe} />} />
          <Route path="/mockup2/:query" element={<Mockup2 iframe={iframe} />} />
          <Route path="/mockup3/:query" element={<Mockup3 iframe={iframe} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
