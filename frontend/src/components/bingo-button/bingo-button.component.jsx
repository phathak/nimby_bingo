import React from "react";
import { useState } from "react";
import "./bingo-button.style.css";


function BingoButton({ item, index, onSelectItem }) {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    // console.log(event.target.id);
    if (event.target.id !== (12).toString()) {
      setChecked(event.target.checked);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(event) => {
          handleCheckboxChange(event);
          item !== null && onSelectItem(item);
        }}
        id={index?.toString()}
      />
      <label
        htmlFor={index?.toString()}
        className={
          isChecked
            ? "button btn btn-outline-primary"
            : "button btn btn-outline-dark"
        }
      >
        {item}
      </label>
    </>
  );
}

export default BingoButton;
