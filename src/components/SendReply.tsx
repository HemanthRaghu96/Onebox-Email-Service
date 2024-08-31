import { IoChevronDown } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { postMailMessages } from "../hooks/hooks";
import { HiDotsVertical } from "react-icons/hi";
import { MdLink } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface sendReplyProps {
  handleCancel: MouseEventHandler<HTMLDivElement>;
  currColor: Boolean;
  singleMail: any;
}

interface initalstateType {
  toName: string;
  to: string;
  from: string;
  fromName: string;
  subject: string;
  body: string;
}

const initalState: initalstateType = {
  toName: "",
  to: "",
  from: "",
  fromName: "",
  subject: "",
  body: "",
};
const SendReply: React.FC<sendReplyProps> = ({
  currColor,
  handleCancel,
  singleMail,
}) => {
  const [formData, setFormData] = useState(initalState);
  let token: string | null;

  useEffect(() => {
    token = localStorage.getItem("reachinbox-auth");
    token = token ? JSON.parse(token) : "";
    console.log("token :-", token);

    setFormData({
      ...formData,
      toName: singleMail.toName,
      fromName: singleMail.fromEmail,
      to: singleMail.toEmail,
      from: singleMail.fromEmail,
    });
  }, []);

  const handlesubmit = () => {
    console.log(formData, "data");
    postMailMessages(singleMail.threadId, formData)
      .then(() => {
        alert("Reply has been Sended");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col w-full h-full ">
      <div>
        <div
          className={`h-10 flex justify-between px-4 py-2 text-[16px]  ${
            currColor ? "bg-[#23272C]" : "bg-white"
          }`}
        >
          <p>Reply</p>
          <p onClick={handleCancel} className="cursor-pointer">
            <IoCloseOutline className="w-[20px] h-[20px] " />
          </p>
        </div>
        <hr className="border-t border-gray-700" />
        <div
          className={`text-[12px]  flex pt-2 px-8 py-2 h-7   items-center gap-2`}
        >
          <p className="text-gray-400">To : </p>
          <input
            type="text"
            placeholder=""
            value={formData.to}
            className={`w-[400px] ${
              currColor ? "bg-[#141517]" : "bg-white"
            } outline-none`}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
          />
        </div>
        <hr className="border-t border-gray-700" />
        <div
          className={`text-[12px] flex pt-2 px-8 py-2   h-7  items-center gap-2`}
        >
          <p className="text-gray-400">From : </p>
          <input
            type="text"
            placeholder=""
            value={formData.from}
            className={` w-[400px] ${
              currColor ? "bg-[#141517]" : "bg-white"
            } outline-none`}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          />
        </div>
        <hr className="border-t border-gray-700" />
        <div
          className={`text-[12px]  flex pt-2 px-8 py-2  h-7 items-center gap-2`}
        >
          <p className="text-gray-400">Subject : </p>
          <input
            type="text"
            placeholder=""
            value={formData.subject}
            className={`w-[400px] ${
              currColor ? "bg-[#141517]" : "bg-white"
            } outline-none`}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>
        <hr className="border-t border-gray-700" />
        <div className={`text-[12px] p-2 text-left`}>
          <textarea
            placeholder="Hello ,"
            value={formData.body}
            className={`ml-6   h-[250px] w-full outline-none ${
              currColor ? "bg-[#141517]" : "bg-white"
            }`}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
        </div>
      </div>
      <div className="h-[54px]  w-full ">
        <hr className="border-t border-gray-700 mb-2" />
        <div className="flex text-[12px] gap-1">
          <div className="w-[100px] h-8 bg-gradient-to-r from-[#4B63DD] via-[#0524BF] to-[#0524BF]  ml-4 mb-3 rounded  flex justify-center gap-2 cursor-pointer items-center">
            <button className="text-white" onClick={handlesubmit}>
              Send
            </button>
            <IoChevronDown color={"white"} />
          </div>
          <div className="w-[100px] h-8 flex items-center  mb-3 rounded gap-1  justify-center  cursor-pointer ">
            <AiFillThunderbolt className="h-[20px] w-[20px]" />
            <button>Variables</button>
          </div>
          <div className="w-[100px] h-8  flex items-center  mb-3 rounded gap-1  justify-center  cursor-pointer ">
            <LuEye className="h-[20px] w-[20px]" />
            <button>Preview Email</button>
          </div>
          <div className=" flex items-center  mb-3 cursor-pointer ">
            <HiDotsVertical className="h-[20px] w-[20px]" />
          </div>
          <div className=" flex items-center  mb-3 cursor-pointer ">
            <MdLink className="h-[20px] w-[20px]" />
          </div>
          <div className=" flex items-center  mb-3 cursor-pointer ">
            <MdOutlineImage className="h-[20px] w-[20px]" />
          </div>
          <div className=" flex items-center  mb-3 cursor-pointer ">
            <FaRegSmile className="h-[20px] w-[20px]" />
          </div>
          <div className=" flex items-center  mb-3 cursor-pointer ">
            <MdOutlinePersonRemoveAlt1 className="h-[20px] w-[20px]" />
          </div>
          <div className=" flex items-center  mb-3 cursor-pointer ">
            <IoIosArrowBack className="h-[20px] w-[20px]" />
            <IoIosArrowForward className="h-[20px] w-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendReply;
