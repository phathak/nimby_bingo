import {useContext, useState} from "react";
import BingoCard from "../bingo-card/bingo-card.component";
import GenerateButton from "../save-image-button/save-image-button.component";
import "./home.style.css";
import {ScoreContext} from "../../contexts/score_context";

const Home = (props) => {
  const {backgroundImage} = props;
  const { currentScore } = useContext(ScoreContext);


  return (
    <>
      <div className="body" id="bodyContainer">
        <div
          className="hero min-vh-100 align-items-center overlay-soft-dark"
          style={{
            // backgroundImage: `url(${backgroundImage})`,
            backgroundColor: "rgb(10,49,95)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            marginTop: "-25px",
          }}
        >
          <div className="container text-center">
            <div id="titleScore" className="align-items-center justify-content-start py-3 mb-4" style={{display: "none"}}>
              <h1 >Nimbyngo</h1>
              <h3 className="container">Score: {currentScore}/25</h3>
            </div>
            <div id="scoreOnly" className="align-items-center justify-content-start py-3 mb-4">
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
