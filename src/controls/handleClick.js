// import initialCubeState from "../constants/initialState";
// import solveCube from "./solveCube";

// export const rightClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   modifiedCube[0][0][2] = rubiksCube[2][0][2];
//   modifiedCube[0][1][2] = rubiksCube[2][1][2];
//   modifiedCube[0][2][2] = rubiksCube[2][2][2];

//   modifiedCube[2][0][2] = rubiksCube[5][0][2];
//   modifiedCube[2][1][2] = rubiksCube[5][1][2];
//   modifiedCube[2][2][2] = rubiksCube[5][2][2];

//   modifiedCube[5][0][2] = rubiksCube[4][2][0];
//   modifiedCube[5][1][2] = rubiksCube[4][1][0];
//   modifiedCube[5][2][2] = rubiksCube[4][0][0];

//   modifiedCube[4][2][0] = rubiksCube[0][0][2];
//   modifiedCube[4][1][0] = rubiksCube[0][1][2];
//   modifiedCube[4][0][0] = rubiksCube[0][2][2];

//   // Set the modified Rubik's Cube state
//   setRubiksCube(modifiedCube);
// };

// export const rightCounterClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   modifiedCube[0][0][2] = rubiksCube[4][2][0];
//   modifiedCube[0][1][2] = rubiksCube[4][1][0];
//   modifiedCube[0][2][2] = rubiksCube[4][0][0];

//   modifiedCube[2][0][2] = rubiksCube[0][0][2];
//   modifiedCube[2][1][2] = rubiksCube[0][1][2];
//   modifiedCube[2][2][2] = rubiksCube[0][2][2];

//   modifiedCube[5][0][2] = rubiksCube[2][0][2];
//   modifiedCube[5][1][2] = rubiksCube[2][1][2];
//   modifiedCube[5][2][2] = rubiksCube[2][2][2];

//   modifiedCube[4][2][0] = rubiksCube[5][0][2];
//   modifiedCube[4][1][0] = rubiksCube[5][1][2];
//   modifiedCube[4][0][0] = rubiksCube[5][2][2];

//   // Set the modified Rubik's Cube state
//   setRubiksCube(modifiedCube);
// };

// export const leftClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   modifiedCube[0][0][0] = rubiksCube[4][2][2];
//   modifiedCube[0][1][0] = rubiksCube[4][1][2];
//   modifiedCube[0][2][0] = rubiksCube[4][0][2];

//   modifiedCube[2][0][0] = rubiksCube[0][0][0];
//   modifiedCube[2][1][0] = rubiksCube[0][1][0];
//   modifiedCube[2][2][0] = rubiksCube[0][2][0];

//   modifiedCube[5][0][0] = rubiksCube[2][0][0];
//   modifiedCube[5][1][0] = rubiksCube[2][1][0];
//   modifiedCube[5][2][0] = rubiksCube[2][2][0];

//   modifiedCube[4][2][2] = rubiksCube[5][0][0];
//   modifiedCube[4][1][2] = rubiksCube[5][1][0];
//   modifiedCube[4][0][2] = rubiksCube[5][2][0];

//   // Set the modified Rubik's Cube state
//   setRubiksCube(modifiedCube);
// };

// export const leftCounterClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   modifiedCube[0][0][0] = rubiksCube[2][0][0];
//   modifiedCube[0][1][0] = rubiksCube[2][1][0];
//   modifiedCube[0][2][0] = rubiksCube[2][2][0];

//   modifiedCube[2][0][0] = rubiksCube[5][0][0];
//   modifiedCube[2][1][0] = rubiksCube[5][1][0];
//   modifiedCube[2][2][0] = rubiksCube[5][2][0];

//   modifiedCube[5][0][0] = rubiksCube[4][2][2];
//   modifiedCube[5][1][0] = rubiksCube[4][1][2];
//   modifiedCube[5][2][0] = rubiksCube[4][0][2];

//   modifiedCube[4][2][2] = rubiksCube[0][0][0];
//   modifiedCube[4][1][2] = rubiksCube[0][1][0];
//   modifiedCube[4][0][2] = rubiksCube[0][2][0];

//   // Set the modified Rubik's Cube state
//   setRubiksCube(modifiedCube);
// };

// export const upClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   // Rotate the top side clockwise
//   modifiedCube[1][0] = [
//     rubiksCube[2][0][0],
//     rubiksCube[2][0][1],
//     rubiksCube[2][0][2],
//   ];
//   modifiedCube[2][0] = [
//     rubiksCube[3][0][0],
//     rubiksCube[3][0][1],
//     rubiksCube[3][0][2],
//   ];
//   modifiedCube[3][0] = [
//     rubiksCube[4][0][0],
//     rubiksCube[4][0][1],
//     rubiksCube[4][0][2],
//   ];
//   modifiedCube[4][0] = [
//     rubiksCube[1][0][0],
//     rubiksCube[1][0][1],
//     rubiksCube[1][0][2],
//   ];

//   // Set the modified Rubik's Cube state
//   setRubiksCube(modifiedCube);
// };

// export const upCounterClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   // Rotate the top side counter-clockwise
//   modifiedCube[1][0] = [
//     rubiksCube[4][0][0],
//     rubiksCube[4][0][1],
//     rubiksCube[4][0][2],
//   ];
//   modifiedCube[2][0] = [
//     rubiksCube[1][0][0],
//     rubiksCube[1][0][1],
//     rubiksCube[1][0][2],
//   ];
//   modifiedCube[3][0] = [
//     rubiksCube[2][0][0],
//     rubiksCube[2][0][1],
//     rubiksCube[2][0][2],
//   ];
//   modifiedCube[4][0] = [
//     rubiksCube[3][0][0],
//     rubiksCube[3][0][1],
//     rubiksCube[3][0][2],
//   ];

//   // Set the modified Rubik's Cube state
//   setRubiksCube(modifiedCube);
// };

// export const downClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   // Rotate the bottom side clockwise
//   modifiedCube[1][2] = [
//     rubiksCube[4][2][0],
//     rubiksCube[4][2][1],
//     rubiksCube[4][2][2],
//   ];
//   modifiedCube[2][2] = [
//     rubiksCube[1][2][0],
//     rubiksCube[1][2][1],
//     rubiksCube[1][2][2],
//   ];
//   modifiedCube[3][2] = [
//     rubiksCube[2][2][0],
//     rubiksCube[2][2][1],
//     rubiksCube[2][2][2],
//   ];
//   modifiedCube[4][2] = [
//     rubiksCube[3][2][0],
//     rubiksCube[3][2][1],
//     rubiksCube[3][2][2],
//   ];

//   // Set the modified Rubik's Cube state
//   setRubiksCube(modifiedCube);
// };

// export const downCounterClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   // Rotate the bottom side counter-clockwise
//   modifiedCube[1][2] = [
//     rubiksCube[2][2][0],
//     rubiksCube[2][2][1],
//     rubiksCube[2][2][2],
//   ];
//   modifiedCube[2][2] = [
//     rubiksCube[3][2][0],
//     rubiksCube[3][2][1],
//     rubiksCube[3][2][2],
//   ];
//   modifiedCube[3][2] = [
//     rubiksCube[4][2][0],
//     rubiksCube[4][2][1],
//     rubiksCube[4][2][2],
//   ];
//   modifiedCube[4][2] = [
//     rubiksCube[1][2][0],
//     rubiksCube[1][2][1],
//     rubiksCube[1][2][2],
//   ];

//   // Set the modified Rubik's Cube state
//   setRubiksCube(modifiedCube);
// };

// export const frontClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   modifiedCube[1][0][2] = rubiksCube[5][0][0];
//   modifiedCube[1][1][2] = rubiksCube[5][0][1];
//   modifiedCube[1][2][2] = rubiksCube[5][0][2];

//   modifiedCube[0][2][0] = rubiksCube[1][2][2];
//   modifiedCube[0][2][1] = rubiksCube[1][1][2];
//   modifiedCube[0][2][2] = rubiksCube[1][0][2];

//   modifiedCube[5][0][0] = rubiksCube[3][2][0];
//   modifiedCube[5][0][1] = rubiksCube[3][1][0];
//   modifiedCube[5][0][2] = rubiksCube[3][0][0];

//   modifiedCube[3][2][0] = rubiksCube[0][2][2];
//   modifiedCube[3][1][0] = rubiksCube[0][2][1];
//   modifiedCube[3][0][0] = rubiksCube[0][2][0];

//   modifiedCube[2][0][0] = rubiksCube[2][2][0];
//   modifiedCube[2][0][1] = rubiksCube[2][1][0];
//   modifiedCube[2][0][2] = rubiksCube[2][0][0];

//   modifiedCube[2][1][0] = rubiksCube[2][2][1];
//   modifiedCube[2][1][2] = rubiksCube[2][0][1];

//   modifiedCube[2][2][0] = rubiksCube[2][2][2];
//   modifiedCube[2][2][1] = rubiksCube[2][1][2];
//   modifiedCube[2][2][2] = rubiksCube[2][0][2];

//   // Set the modified Rubik's Cube state
//   setRubiksCube(modifiedCube);
// };

// export const frontCounterClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   modifiedCube[1][0][2] = rubiksCube[0][2][2];
//   modifiedCube[1][1][2] = rubiksCube[0][2][1];
//   modifiedCube[1][2][2] = rubiksCube[0][2][0];

//   modifiedCube[0][2][0] = rubiksCube[3][0][0];
//   modifiedCube[0][2][1] = rubiksCube[3][1][0];
//   modifiedCube[0][2][2] = rubiksCube[3][2][0];

//   modifiedCube[5][0][0] = rubiksCube[1][0][2];
//   modifiedCube[5][0][1] = rubiksCube[1][1][2];
//   modifiedCube[5][0][2] = rubiksCube[1][2][2];

//   modifiedCube[3][2][0] = rubiksCube[5][0][0];
//   modifiedCube[3][1][0] = rubiksCube[5][0][1];
//   modifiedCube[3][0][0] = rubiksCube[5][0][2];

//   modifiedCube[2][0][0] = rubiksCube[2][0][2];
//   modifiedCube[2][0][1] = rubiksCube[2][1][2];
//   modifiedCube[2][0][2] = rubiksCube[2][2][2];

//   modifiedCube[2][1][0] = rubiksCube[2][0][1];
//   modifiedCube[2][1][2] = rubiksCube[2][2][1];

//   modifiedCube[2][2][0] = rubiksCube[2][0][0];
//   modifiedCube[2][2][1] = rubiksCube[2][1][0];
//   modifiedCube[2][2][2] = rubiksCube[2][2][0];

//   setRubiksCube(modifiedCube);
// };

// export const backClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   modifiedCube[1][0][0] = rubiksCube[0][0][2];
//   modifiedCube[1][1][0] = rubiksCube[0][0][1];
//   modifiedCube[1][2][0] = rubiksCube[0][0][0];

//   modifiedCube[0][0][0] = rubiksCube[3][0][2];
//   modifiedCube[0][0][1] = rubiksCube[3][1][2];
//   modifiedCube[0][0][2] = rubiksCube[3][2][2];

//   modifiedCube[5][2][0] = rubiksCube[1][0][0];
//   modifiedCube[5][2][1] = rubiksCube[1][1][0];
//   modifiedCube[5][2][2] = rubiksCube[1][2][0];

//   modifiedCube[3][2][2] = rubiksCube[5][2][0];
//   modifiedCube[3][1][2] = rubiksCube[5][2][1];
//   modifiedCube[3][0][2] = rubiksCube[5][2][2];

//   modifiedCube[4][0][0] = rubiksCube[4][2][0];
//   modifiedCube[4][0][1] = rubiksCube[4][1][0];
//   modifiedCube[4][0][2] = rubiksCube[4][0][0];

//   modifiedCube[4][1][0] = rubiksCube[4][2][1];
//   modifiedCube[4][1][2] = rubiksCube[4][0][1];

//   modifiedCube[4][2][0] = rubiksCube[4][2][2];
//   modifiedCube[4][2][1] = rubiksCube[4][1][2];
//   modifiedCube[4][2][2] = rubiksCube[4][0][2];

//   setRubiksCube(modifiedCube);
// };

// export const backCounterClockwise = (rubiksCube, setRubiksCube) => {
//   const modifiedCube = JSON.parse(JSON.stringify(rubiksCube));

//   modifiedCube[1][0][0] = rubiksCube[5][2][0];
//   modifiedCube[1][1][0] = rubiksCube[5][2][1];
//   modifiedCube[1][2][0] = rubiksCube[5][2][2];

//   modifiedCube[0][0][0] = rubiksCube[1][2][0];
//   modifiedCube[0][0][1] = rubiksCube[1][1][0];
//   modifiedCube[0][0][2] = rubiksCube[1][0][0];

//   modifiedCube[5][2][0] = rubiksCube[3][2][2];
//   modifiedCube[5][2][1] = rubiksCube[3][1][2];
//   modifiedCube[5][2][2] = rubiksCube[3][0][2];

//   modifiedCube[3][2][2] = rubiksCube[0][0][2];
//   modifiedCube[3][1][2] = rubiksCube[0][0][1];
//   modifiedCube[3][0][2] = rubiksCube[0][0][0];

//   modifiedCube[4][0][0] = rubiksCube[4][0][2];
//   modifiedCube[4][0][1] = rubiksCube[4][1][2];
//   modifiedCube[4][0][2] = rubiksCube[4][2][2];

//   modifiedCube[4][1][0] = rubiksCube[4][0][1];
//   modifiedCube[4][1][2] = rubiksCube[4][2][1];

//   modifiedCube[4][2][0] = rubiksCube[4][0][0];
//   modifiedCube[4][2][1] = rubiksCube[4][1][0];
//   modifiedCube[4][2][2] = rubiksCube[4][2][0];

//   setRubiksCube(modifiedCube);
// };

// // all functions here above this

// const handleClick = (content, rubiksCube, setRubiksCube) => {
//   if (content === "Reset") {
//     setRubiksCube(initialCubeState);
//   } else if (content === "Random") {
//     RandomizeCube(rubiksCube, setRubiksCube);
//   } else if (content === "Solve") {
//     solveCube(rubiksCube, setRubiksCube);
//   } else if (content === "R") {
//     rightClockwise(rubiksCube, setRubiksCube);
//   } else if (content === "R'") {
//     rightCounterClockwise(rubiksCube, setRubiksCube);
//   } else if (content === "L") {
//     leftClockwise(rubiksCube, setRubiksCube);
//   } else if (content === "L'") {
//     leftCounterClockwise(rubiksCube, setRubiksCube);
//   } else if (content === "U") {
//     upClockwise(rubiksCube, setRubiksCube);
//   } else if (content === "U'") {
//     upCounterClockwise(rubiksCube, setRubiksCube);
//   } else if (content === "D") {
//     downClockwise(rubiksCube, setRubiksCube);
//   } else if (content === "D'") {
//     downCounterClockwise(rubiksCube, setRubiksCube);
//   } else if (content === "F") {
//     frontClockwise(rubiksCube, setRubiksCube);
//   } else if (content === "F'") {
//     frontCounterClockwise(rubiksCube, setRubiksCube);
//   } else if (content === "B") {
//     backClockwise(rubiksCube, setRubiksCube);
//   } else if (content === "B'") {
//     backCounterClockwise(rubiksCube, setRubiksCube);
//   }
// };

// export default handleClick;
