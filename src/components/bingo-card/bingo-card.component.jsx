import BingoButton from "../bingo-button/bingo-button.component";
import { useContext, useState } from "react";
import { SubjectContext } from "../../contexts/subject_context";
import { getSubjectItems } from "../../data";
import "./bingo-card.style.css";
import {ScoreContext} from "../../contexts/score_context";

function BingoCard() {
  const [selectedItems, setSelectedItems] = useState([]);
  const { currentSubject } = useContext(SubjectContext);
  const { setCurrentScore } = useContext(ScoreContext);

  const items = getSubjectItems(currentSubject);

  const handleSelectItem = (item) => {
    if (item.toLocaleLowerCase() === "NIMBY") {
      return;
    }

    const index = selectedItems.indexOf(item);
    let newItems = selectedItems;

    if (index === -1) {
      newItems.push(item);
    } else {
      newItems.splice(index, 1);
    }
    setSelectedItems(newItems);
    setCurrentScore(newItems.length);
  };

  return (
    <>
      <div id="bingoCard" className="card-grid-container">
        {items.map((item, index) => (
          <BingoButton
            key={index}
            item={item}
            index={index}
            onSelectItem={(i) => {
              handleSelectItem(i);
            }}
          />
        ))}
      </div>
    </>
  );
}

export default BingoCard;
