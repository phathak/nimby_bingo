import { createContext, ReactNode, useState } from "react";

export const ScoreContext = createContext({
  selectedItems: [],
  setSelectedItems: () => {},
  currentScore: 0,
});

export const ScoreProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const value = { currentScore, selectedItems, setSelectedItems };

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
};
