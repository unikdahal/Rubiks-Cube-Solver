import React from "react";
import HandleClick from "../controls/handleClick";
import HandleClickComponent from "../controls/HandleClickComponent";
import { useRubiksCube } from "./RubiksCubeProvider";

const Button = ({ content, height, width }) => {
  const { rubiksCube, setRubiksCube } = useRubiksCube();
  const buttonStyle = `w-${width} h-${height} opacity-95 bg-white bg-opacity-5 rounded-2xl border border-white backdrop-blur-3xl`;
  const handleButtonClick = () => {
    HandleClickComponent(content, rubiksCube, setRubiksCube);
  };

  return (
    <button className={buttonStyle} onClick={handleButtonClick}>
      <div className="text-white text-2xl font-semibold font-['Poppins'] flex items-center justify-center pt-1 px-3">
        {content}
      </div>
    </button>
  );
};

export default Button;
