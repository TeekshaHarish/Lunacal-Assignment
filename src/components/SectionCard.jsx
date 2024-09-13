import React from "react";
import HelpIcon from "../assets/HelpIcon.png";
import RectangleGrid from "../assets/RectangleGrid.png";
import SideRectangle from "../assets/SideRectangle.png";
import "../App.css";

const SectionCard = ({ children }) => {
  return (
    <div className="bg-[#363C43] w-[80%] h-[37%] rounded-2xl flex shadow-box">
      <div className="w-[10%] h-full ml-2 grid ">
        <img src={HelpIcon} alt="Help" className="mt-5 h-8 w-8" />
        <img src={RectangleGrid} alt="" className="justify-self-center" />
      </div>
      <div className="w-[90%]  h-full">{children}</div>
      <div className="w-[5%]  grid flex-col items-center h-full">
        <img
          src={SideRectangle}
          alt=""
          className="justify-self-center h-20 w-5"
        />
      </div>
    </div>
  );
};

export default SectionCard;
