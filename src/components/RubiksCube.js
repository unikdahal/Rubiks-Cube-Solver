import React, { useEffect } from "react";
import { useRubiksCube } from "./RubiksCubeProvider"; // Adjust the path accordingly

const Box = ({ color }) => {
  const getColorCode = (color) => {
    const colorMap = {
      R: "bg-red-600",
      O: "bg-orange-400",
      W: "bg-white",
      Y: "bg-yellow-400",
      B: "bg-blue-600",
      G: "bg-green-400",
    };
    return colorMap[color];
  };

  const colorCode = getColorCode(color);
  const bgStyle = `w-11 h-11 opacity-95 ${colorCode} rounded-sm border border-white backdrop-blur-3xl m-[1px]`;

  return <div className={bgStyle}></div>;
};

const CubeSide = ({ colors }) => {
  return (
    <div className="cube-side">
      {colors.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row">
          {row.map((color, colIndex) => (
            <Box key={colIndex} color={color} />
          ))}
        </div>
      ))}
    </div>
  );
};

const RubiksCube = () => {
  const { rubiksCube } = useRubiksCube();

  return (
    <div className="wrapper flex flex-col gap-1 mt-20 mb-20">
      <div className="top flex items-center ml-[308px]">
        <CubeSide colors={rubiksCube[0]} />
      </div>
      <div className="flex gap-1 items-center justify-center ">
        <CubeSide colors={rubiksCube[1]} />
        <CubeSide colors={rubiksCube[2]} />
        <CubeSide colors={rubiksCube[3]} />
        <CubeSide colors={rubiksCube[4]} />
      </div>
      <div className="bottom flex gap-1 items-center ml-[308px] ">
        <CubeSide colors={rubiksCube[5]} />
      </div>
    </div>
  );
};

export default RubiksCube;
