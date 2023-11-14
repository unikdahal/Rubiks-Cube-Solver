import React, { createContext, useState, useContext } from "react";
import initialCubeState from "../constants/initialState";

const RubiksCubeContext = createContext();

const RubiksCubeProvider = ({ children }) => {
  const [rubiksCube, setRubiksCube] = useState(initialCubeState);

  return (
    <RubiksCubeContext.Provider value={{ rubiksCube, setRubiksCube }}>
      {children}
    </RubiksCubeContext.Provider>
  );
};

const useRubiksCube = () => {
  const context = useContext(RubiksCubeContext);
  if (context === undefined) {
    throw new Error("useRubiksCube must be used within a RubiksCubeProvider");
  }
  return context;
};

export { RubiksCubeProvider, useRubiksCube };
