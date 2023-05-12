import { useContext, useState } from "react";
import BingoCard from "../components/bingo-card";
import GenerateButton from "../components/save-image-button";
import "../styles/home.style.css";
import { ScoreContext } from "../contexts/score";

const Home = (props) => {
  const { backgroundImage } = props;
  const { currentScore } = useContext(ScoreContext);

  const heroStyle = {
    // backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <>
      <div className="body" id="bodyContainer">
        <div className="hero" style={heroStyle}>
          <div className="container text-center">
            <div
              id="titleScore"
              className="align-items-center justify-content-start py-3 mb-4"
              style={{ display: "none" }}
            >
              <h1>Nimbyngo</h1>
              <h3 className="container">Score: {currentScore}/25</h3>
            </div>
            <div
              id="scoreOnly"
              className="align-items-center justify-content-start py-3 mb-4"
            >
              <h3 className="container">Score: {currentScore}/25</h3>
            </div>
            <BingoCard />
            <GenerateButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
