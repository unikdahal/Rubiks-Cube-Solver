import React from "react";
import Button from "./Button";
import { useRubiksCube } from "./RubiksCubeProvider";

const ButtonContainer = () => {
  const buttons = [
    { content: "F", height: "11", width: "11" },
    { content: "R", height: "11", width: "11" },
    { content: "U", height: "11", width: "11" },
    { content: "B", height: "11", width: "11" },
    { content: "L", height: "11", width: "11" },
    { content: "D", height: "11", width: "11" },
    { content: "F'", height: "11", width: "11" },
    { content: "R'", height: "11", width: "11" },
    { content: "U'", height: "11", width: "11" },
    { content: "B'", height: "11", width: "11" },
    { content: "L'", height: "11", width: "11" },
    { content: "D'", height: "11", width: "11" },
  ];

  const { rubiksCube, setRubiksCube } = useRubiksCube();

  const button2 = [
    {
      content: "Reset",
      height: "44",
      weight: "14",
    },
    {
      content: "Random",
      height: "44",
      weight: "14",
    },
    {
      content: "Solve",
      height: "44",
      weight: "14",
    },
  ];

  return (
    <div className="button-container">
      <div className="w-1/3 small-button-container grid grid-cols-6 gap-2 justify-center mx-auto mt-5">
        {buttons.map((button, index) => (
          <Button
            key={index}
            content={button.content}
            height={button.height}
            width={button.width}
          />
        ))}
      </div>
      <div>
        <div className="w-full h-full justify-center flex items-center gap-16 mt-6">
          {button2.map((button, index) => (
            <Button
              key={index}
              content={button.content}
              height={button.height}
              width={button.width}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;
