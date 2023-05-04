import { useState, useEffect, useContext } from "react";
import IMAGES from "../../images/images";
import BingoCard from "../bingo-card/bingo-card.component";
import GenerateButton from "../save-image-button/save-image-button.component";

const Home = () => {
  const [score, setScore] = useState();

  // const getRandomImage = () => {
  //   const keys = Object.keys(images);
  //   const randomIndex = Math.floor(Math.random() * keys.length);
  //   return images[keys[randomIndex]];
  // };
  // const backgroundImage = getRandomImage();

  const calculateScore = (items) => {
    // const value = String.format("{0}/{1}", items.length, 25);
    setScore("value");
  };

  return (
    <div
      className="min-vh-100 align-items-center overlay-soft-dark"
      style={{
        // backgroundImage: `url(${IMAGES.image1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="container text-center">
        <div>
          <h3 className="container">Score: {score}/25</h3>
        </div>
        <BingoCard />
        <GenerateButton />
      </div>
    </div>
  );
};

export default Home;
