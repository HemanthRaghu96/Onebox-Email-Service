import { CiSearch } from "react-icons/ci";
import React from "react";

interface searchProps {
  currColor: Boolean;
}

const InboxSearchBar: React.FC<searchProps> = ({ currColor }) => {
  return (
    <div
      className={`w-[259px] h-[28px] border border-gray-400 rounded  ${
        currColor && "bg-[#23272C] "
      } flex  items-center gap-2`}
    >
      <CiSearch color="gray" className="w-5 h-5 ml-1" />
      <input
        type="text"
        placeholder="Search"
        className={`${currColor ? "bg-[#23272C]" : "bg-white"} outline-none`}
      />
    </div>
  );
};

export default InboxSearchBar;
