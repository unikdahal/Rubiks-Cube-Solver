import React from "react";
import Header from "./Header";
import ButtonContainer from "./ButtonContainer";
import RubiksCube from "./RubiksCube";
import { RubiksCubeProvider } from "./RubiksCubeProvider";

const App = () => {
  return (
    <RubiksCubeProvider>
      <div className="w-[900px] mx-auto">
        <Header />
        <RubiksCube />
        <ButtonContainer />
      </div>
    </RubiksCubeProvider>
  );
};

export default App;
