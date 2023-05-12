import exportAsImage from "../utils/exportAsImage";
import "../styles/save-image-button.style.css";

const GenerateButton = () => {
  const takeScreenShot = () => {
    const scoreOnly = document.querySelector("#scoreOnly");
    const titleScore = document.querySelector("#titleScore");
    const saveButton = document.querySelector("#saveButton");

    saveButton.style.display = "none";
    scoreOnly.style.display = "none";
    titleScore.style.display = "block";

    const element = document.querySelector("#bodyContainer");
    exportAsImage(element, "nimbyngo");

    saveButton.style.display = "";
    scoreOnly.style.display = "block";
    titleScore.style.display = "none";
  };

  return (
    <button
      id="saveButton"
      className=" btn-primary btn-generate"
      onClick={takeScreenShot}
    >
      Save Image
    </button>
  );
};

export default GenerateButton;
