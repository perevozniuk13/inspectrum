import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import PaletteInfoPage from "./pages/PaletteInfoPage/PaletteInfoPage";
import CreatePalettePage from "./pages/CreatePalettePage/CreatePalettePage";
import ImagePalettePage from "./pages/ImagePalettePage/ImagePalettePage";
import UserPage from "./pages/UserPage/UserPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import LoginSignUpPage from "./pages/LoginSignUpPage/LoginSignUpPage";
import { useEffect, useState } from "react";

import "./App.scss";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      setIsLoggedIn(true);
    }
  }, [])

  return <>
  <BrowserRouter>
  <Header isLoggedIn={isLoggedIn} />
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/explore" element={<ExplorePage />}/>
    <Route path="/palettes/:paletteId" element={<PaletteInfoPage />}/>
    <Route path="/create" element={<CreatePalettePage />}/>
    <Route path="/imagePalette" element={<ImagePalettePage />}/>
    <Route path="/users" element={<UserPage />}/>
    <Route path="/signup" element={<LoginSignUpPage page="signup"/>} />
    <Route path="/login" element={<LoginSignUpPage page="login" setIsLoggedIn={setIsLoggedIn}/>} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  </>;
};

export default App;
