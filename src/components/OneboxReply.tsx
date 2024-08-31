import { IoChevronDown } from "react-icons/io5";
import { MdOutlineReply } from "react-icons/md";
import React, { useEffect, useState } from "react";
import SelectedMail from "./SelectedMail";
import SendReply from "./SendReply";

interface replyProps {
  currColor: Boolean;
  singleMail: any;
}

const OneboxReply: React.FC<replyProps> = ({ currColor, singleMail }) => {
  const [showReply, setShowReply] = useState<Boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "r" || event.key === "R") {
        setShowReply(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showReply]);
console.log(singleMail)
  return (
    <div className="w-[900px] h-[600px] border border-gray-700 flex justify-between flex-col mt-16">
      <div className=" relative flex justify-between flex-col ">
        <div className="flex h-[70px] border border-gray-700 py-3 pl-4">
          <div className="text-left w-full">
            <h1 className="text-[14px]">
              {singleMail && singleMail[singleMail.length - 1]?.fromName}
            </h1>
            <p className="text-[12px] text-gray-400">
              {singleMail && singleMail[singleMail.length - 1]?.fromEmail}
            </p>
          </div>
          <div className="flex justify-end mr-6  gap-4 h-8 my-2 w-full text-right">
            <div
              className={`flex justify-center gap-2 p-2 items-center border border-gray-700 rounded ${
                currColor ? "bg-[#222426]" : "bg-[#fff]"
              }`}
            >
              <p className="w-3 h-3 rounded-3xl bg-[#E6D162]"></p>
              <p className="text-[12px]">Meeting Completed</p>
              <IoChevronDown />
            </div>
            <div
              className={` flex justify-center p-2 items-center border border-gray-700 rounded ${
                currColor ? "bg-[#222426]" : "bg-[#fff]"
              }`}
            >
              <p className="text-[12px] mr-1">Move</p>
              <IoChevronDown className="h-4" />
            </div>
            <div
              className={` flex justify-center gap-2 p-2 items-center border border-gray-700 rounded ${
                currColor ? "bg-[#222426]" : "bg-[#fff]"
              }`}
            >
              <p className="mb-2">...</p>
            </div>
          </div>
        </div>
        <div className="py-3 pl-4 ">
          {singleMail?.length > 0 &&
            singleMail?.map((item: any) => {
              return (
                <SelectedMail currColor={currColor} {...item} key={item.id} />
              );
            })}
         
        </div>
        {
                showReply &&  <div className={`absolute mt-[134px] w-[768px] ml-4 rounded-2xl  z-10  overflow-hidden  h-[450px] ${currColor ? 'bg-[#141517]': 'bg-white'}  border border-gray-700`}>
                    <SendReply currColor ={currColor} singleMail ={singleMail[0]} handleCancel ={()=>setShowReply(!showReply)}/>
                </div>
            }
      </div>

      <div
        className="w-[100px] h-10    ml-4 mb-3 rounded gap-1 flex justify-center items-center"
        style={{
          background:
            "linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
        }}
      >
        <MdOutlineReply color="white" />
        <button className="text-white" onClick={() => setShowReply(!showReply)}>
          Reply
        </button>
      </div>
    </div>
  );
};

export default OneboxReply;
