import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { jwtDecode } from "jwt-decode";
import Theme from "../components/Theme";
import { FaChevronDown } from "react-icons/fa6";
import LoadingPage from "../components/LoadingScreen";
import InboxHeader from "../components/InboxHeader";
import InboxSearchBar from "../components/InboxSearchBar";
import InboxEmailCard from "../components/InboxEmailCard";
import { deleteMailResponse, getMailList, getMailMessages } from "../hooks/hooks";
import LeadAndActivity from "../components/LeadAndActivity";
import OneboxReply from "../components/OneboxReply";
import { DeleteModal } from "../components/DeleteModal";

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface Email {
  id: number;
  threadId: number;
}

const Onebox = () => {
  const [currColor, setCurrColor] = useState<boolean>(true);
  const [data, setData] = useState<Email[]>([]);
  const [singleMail, setSingleMail] = useState<any>({});
  const [showEmailDesktop, setShowEmailDesktop] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [render , setRender]= useState<Boolean>(false)
  let token: string = localStorage.getItem("reachinbox-auth") || "null";

  useEffect(() => {
    token = location.search.split("?token=")?.join("");
    if (token) {
      let ParseData = jwtDecode<User>(token);
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
    fetchData();
  }, [token]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if(event.key === "d" || event.key === "D")
      {
        openModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  let firstName = localStorage.getItem("reachinbox-auth-firstname");
  firstName = firstName ? JSON.parse(firstName) : "";
  let lastName = localStorage.getItem("reachinbox-auth-lastname");
  lastName = lastName ? JSON.parse(lastName) : "";
  const username = firstName
    ? firstName[0] + (lastName ? lastName[0] : "")
    : "";
  const handleChange = (index: number) => setShowEmailDesktop(index);
  const handleChangeEmail = (id: number) => {
    getMailMessages(id)
      .then((messages) => {
        setSingleMail(messages);
      })
      .catch((error) => console.error("Error:", error));
  };
  const fetchData = () => {
    getMailList(token)
      .then((res) => {
        setData(res);
        if (res?.length > 0) {
          setSingleMail(res[0]);
          const id: number = res[0]?.threadId;
          if (id !== undefined) return getMailMessages(id);
          else console.log("error id not found");
        } else console.log("Email not Found");
      })
      .then((messages) => setSingleMail(messages))
      .catch((error) => console.error("Error:", error));
  };
  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };
  const deleteEmail =()=>{
    const id:number = singleMail[0].threadId
    deleteMailResponse(id).then(()=>{
        alert(`The ${id} has been Deleted Successful`);
        setRender(!render)
        closeModal()
    }).catch(() => alert("Error Please try again"))
    
}
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
                <p className="w-[91px] h-[20px] text-[14px] font-semibold leading-[20px] text-left">
                  New Replies
                </p>
              </div>
              <div className=" w-[79px] h-[20px] gap-[16px] opacity-[0px] flex items-center">
                <p className="w-[53px] h-[20px] gap-[0px] opacity-[0px] text-[14px] font-semibold leading-[20px] text-left">
                  Newest
                </p>
                <FaChevronDown />
              </div>
            </div>
            <hr className="mt-[10px]" />
            <div className=" text-left">
              {data?.length > 0 &&
                data.map((item: any) => {
                  return (
                    <div key={item.id}>
                      <InboxEmailCard
                        currColor={currColor}
                        {...item}
                        handleChangeEmail={handleChangeEmail}
                      />
                      <hr />
                    </div>
                  );
                })}
            </div>
          </div>
          <OneboxReply currColor={currColor} singleMail = {singleMail}/>
          <LeadAndActivity currColor={currColor}/>
        </div>
      )}
      <div>
                <DeleteModal isOpen={isModalOpen} onClose={closeModal}>
                    <div className='w-[440px] h-[240px] text-white '>
                        <div className=' h-full '>
                            <h1 className='text-[24px] font-bold mt-8 text-center'>Are you Sure ?</h1>
                            <p className='mt-8 text-[#E8E8E8] text-center'>Your selected email will be deleted.</p>
                            <div className='mt-8 flex justify-center gap-5 '>
                                <button className='w-[120px] h-12 bg-[#25262B] rounded-sm' onClick={closeModal}>Cancel</button>
                                <button className='w-[140px] h-12 rounded-sm' onClick={deleteEmail} style={{
    background: 'linear-gradient(91.73deg, #FA5252 -2.99%, #A91919 95.8%)'
  }}>Delete</button>
                            </div>
                        </div>
                    </div>
                </DeleteModal>

            </div>
    </div>
    
  );
};

export default Onebox;
