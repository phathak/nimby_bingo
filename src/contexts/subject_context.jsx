import { createContext, ReactNode, useState } from "react";

export const SubjectContext = createContext({
  currentSubject: "",
  setCurrentSubject: () => null,
});

export const SubjectProvider = ({ children }) => {
  const [currentSubject, setCurrentSubject] = useState("Bicycle");
  const value = { currentSubject, setCurrentSubject };

  return (
    <SubjectContext.Provider value={value}>{children}</SubjectContext.Provider>
  );
};
