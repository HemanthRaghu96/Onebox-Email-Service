import { LuMail } from "react-icons/lu";
import { IoIosSend } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";
import React from "react";

interface leadAndActivityProps {
  currColor: Boolean;
}
const LeadAndActivity: React.FC<leadAndActivityProps> = ({ currColor }) => {
  return (
    <div className="w-[278px] px-2 overflow-hidden mt-16">
      <div
        className={`w-[260px] h-[36px] p-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[16px] flex items-center mt-4 border border-gray-700 rounded ${
          currColor ? "bg-[#222426]" : "bg-[#fff]"
        }`}
      >
        <p className="w-[237px] h-[20px] gap-[16px] opacity-[0px] text-[14px] font-semibold leading-[20px] text-left">
          Lead Details
        </p>
      </div>
      <div className="w-[264px] h-[217px] p-[8px] pt-[8px] pr-[12px] pb-[16px] pl-[12px] gap-[20px] opacity-[0px] flex flex-col">
        <div className="w-[238px] h-[17px] gap-0 flex justify-between opacity-[0px]  mt-2">
          <p className=" h-[15px] gap-[0px] opacity-[0px] text-[12px] font-normal leading-[14.52px] text-left">
            Name
          </p>
          <p className=" h-[17px] gap-[0px] opacity-[0px] text-[14px] font-normal leading-[16.94px] text-left">
            Orlando
          </p>
        </div>
        <div className="w-[238px] h-[17px] gap-0 flex justify-between opacity-[0px]  mt-2">
          <p className=" h-[15px] gap-[0px] opacity-[0px] text-[12px] font-normal leading-[14.52px] text-left">
            Contact No
          </p>
          <p className=" h-[17px] gap-[0px] opacity-[0px] text-[14px] font-normal leading-[16.94px] text-left">
            +53 4245252354
          </p>
        </div>
        <div className="w-[238px] h-[17px] gap-0 flex justify-between opacity-[0px]  mt-2">
          <p className=" h-[15px] gap-[0px] opacity-[0px] text-[12px] font-normal leading-[14.52px] text-left">
            Email ID
          </p>
          <p className=" h-[17px] gap-[0px] opacity-[0px] text-[14px] font-normal leading-[16.94px] text-left">
            orladom@gmail.com
          </p>
        </div>
        <div className="w-[238px] h-[17px] gap-0 flex justify-between opacity-[0px]  mt-2">
          <p className=" h-[15px] gap-[0px] opacity-[0px] text-[12px] font-normal leading-[14.52px] text-left">
            Linkedin
          </p>
          <p className=" h-[17px] gap-[0px] opacity-[0px] text-[14px] font-normal leading-[16.94px] text-left">
            linkedin.com/in/timvadde/
          </p>
        </div>
        <div className="w-[238px] h-[17px] gap-0 flex justify-between opacity-[0px]  mt-2">
          <p className=" h-[15px] gap-[0px] opacity-[0px] text-[12px] font-normal leading-[14.52px] text-left">
            Company Name
          </p>
          <p className=" h-[17px] gap-[0px] opacity-[0px] text-[14px] font-normal leading-[16.94px] text-left">
            Reachinbox
          </p>
        </div>
      </div>

      <div
        className={`w-[260px] h-[36px] p-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[16px] flex flex-col items-center mt-7 border border-gray-700 rounded ${
          currColor ? "bg-[#222426]" : "bg-[#fff]"
        }`}
      >
        <p className="w-[237px] h-[20px] gap-[16px] opacity-[0px] text-[14px] font-semibold leading-[20px] text-left">
          Activities
        </p>
        <div className=" font-sans font-semibold mt-4">
          <div
            className={`text-[15px] font-semibold leading-[20.43px] text-left ${
              currColor ? "text-white" : "text-black"
            } text-left text-lg `}
          >
            Campaign Name
          </div>
          <div className="text-xs flex gap-2 mt-3">
            <div
              className={`${
                currColor ? "border-gray-300" : "border-gray-700"
              } border-r pr-2`}
            >
              <span className="font-normal">3</span> Steps
            </div>
            <div>
              <span className="font-normal">8</span> Days in Sequence
            </div>
          </div>

          <div className="w-full space-y-6 mt-3">
            <div className="flex gap-4">
              <div
                className={`${
                  currColor ? "bg-[#58595b]" : "bg-[#dbe4ef]"
                }  rounded-3xl h-8 w-8 flex justify-center items-center`}
              >
                <LuMail color={currColor ? "white" : "black"} className="w-4" />
              </div>
              <div>
                <div
                  className={`text-[13px] font-semibold leading-[17.7px] text-left ${
                    currColor ? "text-white" : "text-black"
                  } text-sm mb-1`}
                >
                  Step 1: Email
                </div>
                <div className="flex items-center gap-2">
                  <IoIosSend
                    color={currColor ? "white" : "black"}
                    className="w-3"
                  />
                  <div
                    className={`text-[13px] font-semibold leading-[17.7px] text-left ${
                      currColor ? "text-gray-400" : "text-black"
                    }`}
                  >
                    Sent{" "}
                    <span className="text-[10px] font-semibold leading-[18px] text-left">
                      3rd, Feb
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className={`${
                  currColor ? "bg-[#58595b]" : "bg-[#dbe4ef]"
                }  rounded-3xl h-8 w-8 flex justify-center items-center`}
              >
                <LuMail color={currColor ? "white" : "black"} className="w-4" />
              </div>

              <div>
                <div
                  className={`text-[13px] font-semibold leading-[17.7px] text-left ${
                    currColor ? "text-white" : "text-black"
                  } text-sm mb-1`}
                >
                  Step 2: Email
                </div>
                <div className="flex items-center gap-2">
                  <LuMailOpen
                    color= "#ECBF21"
                    className="w-3"
                  />
                  <div
                    className={`text-[13px] font-semibold leading-[17.7px] text-left ${
                      currColor ? "text-gray-400" : "text-black"
                    } font-inter font-normal text-xs`}
                  >
                    Opened{" "}
                    <span className="text-[10px] font-semibold leading-[18px] text-left">
                    5th, Feb
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className={`${
                  currColor ? "bg-[#58595b]" : "bg-[#dbe4ef]"
                } rounded-3xl md h-8 w-8 flex justify-center items-center`}
              >
                <LuMail color={currColor ? "white" : "black"} className="w-4" />
              </div>

              <div>
                <div
                  className={`text-[13px] font-semibold leading-[17.7px] text-left ${
                    currColor ? "text-white" : "text-black"
                  } text-sm mb-1`}
                >
                  Step 3: Email
                </div>
                <div className="flex items-center gap-2">
                  <LuMailOpen
                     color= "#ECBF21"
                    className="w-3"
                  />
                  <div
                    className={`text-[13px] font-semibold leading-[17.7px] text-left ${
                      currColor ? "text-gray-400" : "text-black"
                    } font-inter font-normal text-xs`}
                  >
                    Opened{" "}
                     <span className="text-[10px] font-semibold leading-[18px] text-left">
                       5th, Feb
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadAndActivity;
