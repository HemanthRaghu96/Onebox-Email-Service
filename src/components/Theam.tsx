import React, { MouseEventHandler } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { RiMoonLine } from "react-icons/ri";
import { WiMoonFull } from "react-icons/wi";

interface themeProps {
  currColor: Boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Theme: React.FC<themeProps> = ({ currColor, onClick }) => {
  return (
    <div
      className={`w-[51px] h-[24px] border-[1px] px-[3px] py-[5px] gap-[7px] cursor-pointer 
        ${currColor ? "border-[#343A40]" : "border-[#DADEE1]"} 
        rounded-3xl flex justify-center items-center 
        ${currColor ? "bg-[#222426]" : "bg-[#E9EAEC]"} 
        transition-all duration-500 ease-[cubic-bezier(0.65, 0, 0.35, 1)]`}
      onClick={onClick}
    >
      {!currColor ? (
        <>
          <RiMoonLine className="text-[#E8C364] transition-all duration-500 ease-[cubic-bezier(0.65, 0, 0.35, 1)]" />
          <WiMoonFull className="text-[#FFFFFF] transition-all duration-500 ease-[cubic-bezier(0.65, 0, 0.35, 1)]" />
        </>
      ) : (
        <>
          <WiMoonFull className="text-[#888686] transition-all duration-500 ease-[cubic-bezier(0.65, 0, 0.35, 1)]" />
          <IoSunnyOutline className="text-[#E8C364] transition-all duration-500 ease-[cubic-bezier(0.65, 0, 0.35, 1)]" />
        </>
      )}
    </div>
  );
};

export default Theme;
