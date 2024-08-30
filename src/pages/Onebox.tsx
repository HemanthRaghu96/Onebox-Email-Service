import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { jwtDecode } from "jwt-decode";
import Theme from "../components/Theam";
import { FaChevronDown } from "react-icons/fa6";
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
      className={`w-full h-full flex  ${currColor ? "bg-black" : "bg-white"} ${
        currColor ? "text-white" : "text-black"
      } `}
    >
      <div className="h-screen ">
        <Sidebar
          currColor={currColor}
          username={username}
          showEmailDesktop={showEmailDesktop}
          handleChange={handleChange}
        />
      </div>
      <div className="w-full">
        <div
          className={` w-full h-[64px] absolute  p-[24px]  gap-[24px]  opacity-[0px] border-[1px] flex justify-between  ${
            currColor ? "bg-[#1F1F1F]" : "bg-white"
          } border ${
            currColor
              ? "border-[#343A40] shadow-[inset_0px_-186px_120px_0px_#2527381A]"
              : "border-[#DEDEDE]"
          } `}
        >
          <p
            className={`w-[127px] h-[22px] font-sans font-[700] text-[16px] gap-[32px] opacity-[0px] ${
              currColor ? "text-[#FFFFFF]" : "text-black-900"
            } `}
          >
            Onebox
          </p>
          <div className="w-[210px] h-[24px] gap-[22px] flex mr-[100px]">
            <Theme
              currColor={currColor}
              onClick={() => setCurrColor(!currColor)}
            />
            <div className="w-[137px] h-[22px] flex items-center gap-[8px]">
              <p className=" w-[113px] h-[22px] font-[600] text-[14px] font-sans">Tim's Workspace </p>
              <span>
               
                <FaChevronDown className="w-[16px] h-[16px]"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onebox;
