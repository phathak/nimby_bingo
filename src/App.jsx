import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/home";
import Admin from "./views/admin";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import { getRandomImage, loadImages } from "./images/image-utils";

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState();

  useEffect(() => {
    async function fetchImages() {
      const images = await loadImages();
      setBackgroundImage(getRandomImage(images));
    }
    setTimeout(() => {
      fetchImages();
    }, 50);
  }, []);

  return (
    <Routes>
      <Route path="/nimby_bingo" element={<Navbar />}>
        <Route index element={<Home backgroundImage={backgroundImage} />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
