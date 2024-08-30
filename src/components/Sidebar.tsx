import React, { useState } from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { BsInboxFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { RiUserSearchFill } from "react-icons/ri";

interface SlidebarProps {
  currColor: boolean;
  username: string;
  showEmailDesktop: number;
  handleChange: (index: number) => void;
}

const Sidebar: React.FC<SlidebarProps> = ({
  currColor,
  username,
  handleChange,
}) => {
  const [activeIcon, setActiveIcon] = useState<number>(0);

  const handleIconClick = (index: number) => {
    setActiveIcon(index);
    handleChange(index);
  };

  return (
    <div
      className={`w-[52px] h-screen px-1 border-r-[1px]  ${
        currColor ? "border-[#343A40]" : "border-[#D8D8D8]"
      } : flex flex-col justify-between ${
        currColor ? "bg-[#101113]" : "bg-white"
      } `}
    >
      <div className="w-[48px] h-[70px] pt-[8px] pr-[12px] pb-[12px] pl-[12px] gap-[0px] opacity-[0px] ">
        {currColor ? (
          <img
            src="https://media.licdn.com/dms/image/D560BAQEmo1aZIhVtlQ/company-logo_200_200/0/1700158687336/reachinbox_ai_logo?e=2147483647&v=beta&t=2eGcwWsFtdBcUVJGGHkBxWHYFN86D-c5zfyr4s3DsNw"
            alt="logo"
            className="w-[26px] h-[24px] gap-[0px] opacity-[0px] rounded-sm mt-4 "
          />
        ) : (
          <img
            src="https://s3-alpha-sig.figma.com/img/ed94/738a/0d9ad817b731bfaf9a4a7d8bf7a8a637?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPYT~chaOOBiGWHuT19NE95ur~6l8~RiAy~VTojW1ELIvJZSM0YJJhCmCmhv0l3SEy51z~Lyx4di9iqXD0F17~5Nf8LWbqWYTIyqNkvIUxmRm5ngdmKTMSxNmXzm5x6~REFKA-8KBm7X~kNaf91dqPxmQVMT9m~LP2F6slt~Tpa09Lbb5JouQWTkOWvQ~2VyxhRaiVMSgzxZkpiFKUqhhYnkRtksLCGB9ZHvLmpAkdZhNRNu402AQKzfgH5s-PzDaOFqf3vjP8nkCBZ96selolKmjTihX2MVoMRjQkM8yT4zUicY0ZsSnKlszb31YOU2hfm9R7VsmLSIC~eblZWlEA__"
            alt="logo"
            className="w-[26px] h-[24px] gap-[0px] opacity-[0px] rounded-sm mt-4 "
          />
        )}
      </div>
      <div className="h-[645px] w-[48px] pt-12 px-2 flex flex-col items-center gap-8 ">
        {[
          BiHomeAlt,
          RiUserSearchFill,
          IoMail,
          IoIosSend,
          FaList,
          BsInboxFill,
          MdOutlineBarChart,
        ].map((Icon, index) => (
          <div
            key={index}
            className={`p-1 rounded cursor-pointer ${
              currColor && activeIcon === index ? "bg-[#2F3030]" : ""
            } ${
              !currColor && activeIcon === index ? "bg-gray-200" : ""
            } w-[24px] h-[24px]`}
            onClick={() => handleIconClick(index)}
          >
            <Icon color={currColor ? "white" : "black"} />
          </div>
        ))}
      </div>

      <div className="w-12 h-[70px] flex justify-center items-center">
        <p className="w-[32px] h-[32px] bg-green-800  rounded-full text-white font-light p-1 ">
          {username}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
