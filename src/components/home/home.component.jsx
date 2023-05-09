import { useState } from "react";
import BingoCard from "../bingo-card/bingo-card.component";
import GenerateButton from "../save-image-button/save-image-button.component";
import "./home.style.css";

const Home = (props) => {
  const {backgroundImage} = props;
  const [score, setScore] = useState();

  const calculateScore = (items) => {
    // const value = String.format("{0}/{1}", items.length, 25);
    setScore("value");
  };

  return (
    <>
      <div className="body">
        <div
          className="hero min-vh-100 align-items-center overlay-soft-dark"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            marginTop: "-25px",
          }}
        >
          <div className="container text-center">
            <div>
              {/*<h3 className="container">Score: {score}/25</h3>*/}
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
