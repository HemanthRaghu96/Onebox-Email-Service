import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { jwtDecode } from "jwt-decode";
import Theme from "../components/Theme";
import { FaChevronDown } from "react-icons/fa6";
import LoadingPage from "../components/LoadingScreen";
import InboxHeader from "../components/InboxHeader";
import InboxSearchBar from "../components/InboxSearchBar";

const Onebox = () => {
  const [currColor, setCurrColor] = useState<boolean>(true);
  const [showEmailDesktop, setShowEmailDesktop] = useState(0);
  let token: string = localStorage.getItem("reachinbox-auth") || "null";

  useEffect(() => {
    token = location.search.split("?token=")?.join("");
    if (token) {
      let ParseData = jwtDecode(token);
      localStorage.setItem("reachinbox-auth", JSON.stringify(token));
      localStorage.setItem(
        "reachinbox-auth-firstname",
        JSON.stringify((ParseData as any).user.firstName)
      );
      localStorage.setItem(
        "reachinbox-auth-lastname",
        JSON.stringify((ParseData as any).user.lastName)
      );
      localStorage.setItem(
        "reachinbox-auth-email",
        JSON.stringify((ParseData as any).user.email)
      );
    }
  }, [token]);

  let firstName = localStorage.getItem("reachinbox-auth-firstname");
  firstName = firstName ? JSON.parse(firstName) : "";
  let lastName = localStorage.getItem("reachinbox-auth-lastname");
  lastName = lastName ? JSON.parse(lastName) : "";
  const username = firstName
    ? firstName[0] + (lastName ? lastName[0] : "")
    : "";
  const handleChange = (index: number) => setShowEmailDesktop(index);
  return (
    <div
      className={`w-full h-full flex ${currColor ? "bg-black" : "bg-white"} ${
        currColor ? "text-white" : "text-black"
      } `}
    >
      <div className="h-screen">
        <Sidebar
          currColor={currColor}
          username={username}
          showEmailDesktop={showEmailDesktop}
          handleChange={handleChange}
        />
      </div>
      <div className="w-full">
        <div
          className={`w-full h-[64px] p-[24px] gap-[24px] flex justify-between ${
            currColor ? "bg-[#1F1F1F]" : "bg-white"
          } border ${
            currColor
              ? "border-[#343A40] shadow-[inset_0px_-186px_120px_0px_#2527381A]"
              : "border-[#DEDEDE]"
          } fixed top-0`}
        >
          <p
            className={`w-[127px] h-[22px] font-sans font-[700] text-[16px] ${
              currColor ? "text-[#FFFFFF]" : "text-black-900"
            }`}
          >
            Onebox
          </p>
          <div className="w-[210px] h-[24px] flex items-center gap-[22px] mr-[100px]">
            <Theme
              currColor={currColor}
              onClick={() => setCurrColor(!currColor)}
            />
            <div className="w-[137px] h-[22px] flex items-center gap-[8px]">
              <p className="w-[113px] h-[22px] font-[600] text-[14px] font-sans">
                Tim's Workspace
              </p>
              <span>
                <FaChevronDown className="w-[16px] h-[16px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {showEmailDesktop != 5 ? (
        <LoadingPage />
      ) : (
        <div
          className={`flex border ${
            currColor ? "border-gray-700" : "border-gray-300"
          } `}
        >
          <div className="w-[278px]  absolute top-[67px] left-[71px] gap-[8px] opacity-[0px] ">
            <div className="flex justify-between mt-4 items-center">
              <InboxHeader currColor={currColor} />
            </div>
            <div className="ml-[14px] mt-7 h-11 ">
              <InboxSearchBar currColor={currColor} />
            </div>
            <div className="w-[275px] h-[32px]  p-[3px] pt-[3px] pr-[8px] pb-[3px] pl-[8px] gap-[16px] opacity-[0px] flex justify-between  text-[14px]">
              <div className=" w-[129px] h-[26px] flex  items-center gap-[16px] ">
                <p
                  className={`text-[#5C7CFA] w-[34px] h-[26px] gap-[8px] rounded-2xl text-center p-[1px] text-[14px] font-semibold leading-[20px] ${
                    currColor ? "bg-[#25262B]" : "bg-[#e1e7ee]"
                  }`}
                >
                  25
                </p>
                <p className="w-[91px] h-[20px] text-[14px] font-semibold leading-[20px] text-left">New Replies</p>
              </div>
              <div className=" w-[79px] h-[20px] gap-[16px] opacity-[0px] flex items-center">
                <p className="w-[53px] h-[20px] gap-[0px] opacity-[0px] text-[14px] font-semibold leading-[20px] text-left">Newest</p>
                <FaChevronDown />
              </div>
            </div>
            <hr className="mt-[10px]" />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Onebox;
