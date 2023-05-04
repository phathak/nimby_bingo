import BingoButton from "../bingo-button/bingo-button.component";
import { useContext, useState } from "react";
import { SubjectContext } from "../../contexts/subject_context";
import { getSubjectItems } from "../../data";
import "./bingo-card.style.css";

function BingoCard() {
  const [selectedItems, setSelectedItems] = useState([]);
  const { currentSubject } = useContext(SubjectContext);

  const items = getSubjectItems(currentSubject);

  const handleSelectItem = (item) => {
    if (item.toLocaleLowerCase() === "nimby") {
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
  };

  return (
    <>
      <div id="bingoCard" className="card-grid-container">
        {items.map((item, index) => (
          <BingoButton
            key={index}
            item={item}
            index={index}
            onSelectItem={() => {
              handleSelectItem;
            }}
          />
        ))}
      </div>
    </>
  );
}

export default BingoCard;
