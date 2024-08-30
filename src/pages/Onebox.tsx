import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { jwtDecode } from "jwt-decode";
const Onebox = () => {
  const [currColor, setCurrColor] = useState<boolean>(false);
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
      className={`w-full h-full   ${currColor ? "bg-black" : "bg-white"} ${
        currColor ? "text-white" : "text-black"
      } `}
    >
      <Sidebar
        currColor={currColor}
        username={username}
        showEmailDesktop={showEmailDesktop}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Onebox;
