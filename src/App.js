import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import PaletteInfoPage from "./pages/PaletteInfoPage/PaletteInfoPage";
import CreatePalettePage from "./pages/CreatePalettePage/CreatePalettePage";
import ImagePalettePage from "./pages/ImagePalettePage/ImagePalettePage";
import UserPage from "./pages/UserPage/UserPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/explore" element={<ExplorePage />}/>
    <Route path="/palettes/:paletteId" element={<PaletteInfoPage />}/>
    <Route path="/create" element={<CreatePalettePage />}/>
    <Route path="/imagePalette" element={<ImagePalettePage />}/>
    <Route path="/users/:userId" element={<UserPage />}/>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  </BrowserRouter>
  </>;
};

export default App;
