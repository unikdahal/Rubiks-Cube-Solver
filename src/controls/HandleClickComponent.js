import initialCubeState from "../constants/initialState";
import solveCube from "./solveCube";
import React, { useEffect } from "react";
import {
  rightClockwise,
  rightCounterClockwise,
  leftClockwise,
  leftCounterClockwise,
  upClockwise,
  upCounterClockwise,
  downClockwise,
  downCounterClockwise,
  frontClockwise,
  frontCounterClockwise,
  backClockwise,
  backCounterClockwise,
} from "./rotateFunctions"; // Import your rotation functions
import { shuffledStates } from "../constants/shuffledState";

const HandleClickComponent = (content, rubiksCube, setRubiksCube) => {
  const randomize = () => {
    const randomState =
      shuffledStates[Math.floor(Math.random() * shuffledStates.length)];
    setRubiksCube(randomState);
  };
  if (content === "Reset") {
    setRubiksCube(initialCubeState);
  } else if (content === "Shuffle") {
    randomize();
  } else if (content === "Solve") {
    solveCube(rubiksCube, setRubiksCube);
  } else if (content === "R") {
    rightClockwise(rubiksCube, setRubiksCube);
  } else if (content === "R'") {
    rightCounterClockwise(rubiksCube, setRubiksCube);
  } else if (content === "L") {
    leftClockwise(rubiksCube, setRubiksCube);
  } else if (content === "L'") {
    leftCounterClockwise(rubiksCube, setRubiksCube);
  } else if (content === "U") {
    upClockwise(rubiksCube, setRubiksCube);
  } else if (content === "U'") {
    upCounterClockwise(rubiksCube, setRubiksCube);
  } else if (content === "D") {
    downClockwise(rubiksCube, setRubiksCube);
  } else if (content === "D'") {
    downCounterClockwise(rubiksCube, setRubiksCube);
  } else if (content === "F") {
    frontClockwise(rubiksCube, setRubiksCube);
  } else if (content === "F'") {
    frontCounterClockwise(rubiksCube, setRubiksCube);
  } else if (content === "B") {
    backClockwise(rubiksCube, setRubiksCube);
  } else if (content === "B'") {
    backCounterClockwise(rubiksCube, setRubiksCube);
  }

  return <>{console.log(rubiksCube)}</>;
};

export default HandleClickComponent;
