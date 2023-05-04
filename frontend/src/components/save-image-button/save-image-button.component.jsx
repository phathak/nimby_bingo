import React, { useState } from "react";
import exportAsImage from "../../utils/exportAsImage";
import "./save-image-button.style.css";
const GenerateButton = () => {
  const [image, setImage] = useState();

  const takeScreenShot = () => {
    const element = document.querySelector("#bingoCard");
    exportAsImage(element, "test");
  };

  return (
    <button className=" btn-primary btn-generate" onClick={takeScreenShot}>
      Save Image
    </button>
  );
};

export default GenerateButton;
