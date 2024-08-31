import { IoChevronDown } from "react-icons/io5";
import { FiRotateCw } from "react-icons/fi";
import React, { useEffect } from "react";
import { resetMail } from "../hooks/hooks";
import { useNavigate } from "react-router";

interface headerProps {
  currColor: Boolean;
}

const InboxHeader: React.FC<headerProps> = ({ currColor }) => {
  const navigate = useNavigate();
  let token: string | null;

  useEffect(() => {
    token = localStorage.getItem("reachinbox-auth");
    token = token ? JSON.parse(token) : "";
  }, []);

  const handleReset = () => {
    resetMail(token).then(() => navigate("/"));
  };
  return (
    <>
      <div className="flex flex-col">
      <div  className="w-[160px] h-[47px] absolute top-[7px] left-[2px] p-[10px] pt-0 pr-0 pb-0 pl-0 gap-[4px] opacity-[0px] flex justify-center items-center">
        <h1 className="h-[27px] w-[112px] text-[#4285F4] text-[20px] font-bold leading-[27.24px] text-left font-sans">All Inbox(s)</h1>
        <IoChevronDown color="#4285F4" className="w-[16px] h-[17px]  gap-[0px] opacity-[px0] cursor-pointer" />
      </div>
      <p className='text-left  text-[14px] absolute top-[45px] left-[14px]'>25/25 <span className=' text-[#7F7F7F]'>Inboxes selected</span></p>
      </div>
      <div
        className={`w-[32px] h-[32px] p-[8px] pt-0 pr-0 pb-0 pl-0 gap-[8px]  opacity-[0px] absolute top-[17px] left-[220px]
            ${
          currColor ? "bg-[#25262B]" : "bg-[#e1e7ee]"
        } rounded flex justify-center items-center`}
      >
        <FiRotateCw
          className="w-[16px] h-[16px]  cursor-pointer"
          onClick={handleReset}
        />
      </div>
    </>
  );
};

export default InboxHeader;
