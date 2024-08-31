import React from "react";

interface SingleProps {
  currColor: Boolean;
  subject: string;
  createdAt: string;
  sentAt: string;
  fromEmail: string;
  toEmail: string;
  body: string;
}
const SelectedMail: React.FC<SingleProps> = ({
  currColor,
  subject,
  createdAt,
  sentAt,
  fromEmail,
  toEmail,
  body,
}) => {
  const createdDate = new Date(createdAt);
  const sentDate = new Date(sentAt);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedCreatedDate = `${createdDate.getDate()} ${
    monthNames[createdDate.getMonth()]
  } ${createdDate.getFullYear()} : ${createdDate.toLocaleTimeString()}`;
  const formattedsentdDate = `${sentDate.getDate()} ${
    monthNames[sentDate.getMonth()]
  } `;
  return (
    <div className="flex flex-col mx-auto mt-4">
      <div className="relative">
        <hr className="w-[95%] " />
        <div className="w-[50.36px] h-[22px] absolute top-[-14px] left-[50%] pt-[4px] gap-[4px] opacity-[0px] ">
          <p
            className={`text-[10px] font-semibold leading-[13.62px] text-center rounded-sm p-1 ${
              currColor ? "bg-[#171819]" : "bg-white"
            } `}
          >
            {formattedsentdDate}
          </p>
        </div>
      </div>
      <div
        className={` mt-6 w-[95%] border border-gray-700 p-3 text-[14px] flex flex-col gap-2.5 text-left mb-3 rounded-md  ${
          currColor ? "bg-[#141517]" : "bg-[#F9F9F9]"
        }`}
      >
        <div className="flex justify-between">
          <p>{subject}</p>
          <p className="text-[#AEAEAE]">{formattedCreatedDate}</p>
        </div>
        <p className="text-[#AEAEAE]">from : {fromEmail} </p>
        <p className="text-[#AEAEAE]">to : {toEmail}</p>
        <p
          className={`text-[14px] font-normal leading-[19.07px] text-left ${
            currColor ? "text-[#E1E0E0]" : "text-[#2a2626]"
          } w-[500px]`}
        >
          {
            body.replace(/<\/?[^>]+(>|$)/g, '').replace(/\n+/g, ' ').trim()
          }{" "}
          ,
        </p>
        
      </div>
    </div>
  );
};

export default SelectedMail;
