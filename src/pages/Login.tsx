import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className="bg-black  h-screen m-auto text-white  flex flex-col justify-between">
      <div className=" flex justify-center items-center w-full h-[64px] border-b-[1px] border-[#25262B] pt-[10px] pr-[100px] pb-[10px] pl-[100px] gap-[0px] opacity-[0px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ak8ed-A0oC2xQPtxNjBlss6riMVn70av2vFMjQ~rEdTiaCd70Z80aI6ye7fn-9nQ87E9A8ba0KzcSKRj-8gascEYAIfikQ1idnVCrrDih0B0xmA5Do61CgslWc30M3iL8oXQi6GiT29TGRRmqT4SRrUbVVmCRLkypQ4FGqQggbNjCmP-oO8vPiMXwgZTo0vr3Je6y~JHUj-phU2LArRBmvrz4kZxhzHzKR1zVDYv10MV31p3WuJML7Jt6WRNdU-PrGEn-1XxDRm-ksA1~IXuxnupxt4pO1Q4OEAclP~dGAgtx3sDj9Y539juQ6utY0rRlaZhKlSri1YXJ12yMKqa~A__"
          alt="reachinboxLogo"
          className="w-[156.77px] h-[24px] gap-[0px] opacity-[0px] object-contain"
        />
      </div>
      <div className="w-full h-[663px] pt-[59px] pr-[29px] pb-[59px] pl-[29px] gap-[150px] flex justify-center items-center ">
        <div
          className="w-[460px] h-auto md:h-[312px] pt-[24px] pr-[40px] pb-[40px] pl-[40px] bg-gradient-to-br from-[#111214] to-[#121212]  border-[#343A40] border-[1px]  "
          style={{ borderRadius: "17px" }}
        >
          <div className=" w-[380px] h-[103px] gap[24px] opacity-[0px]">
            <div className="w-[380px] h-[31px] gap-[0px] opacity-[0px]">
              <p className="font-sans text-[20px] font-semibold leading-[31px] text-center">
                Create new account
              </p>
            </div>
            <Link
              to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/onebox"
              className="text-sm text-gray-400 cursor-pointer"
            >
              <div
                className="w-[380px] h-[48px] p-[8px] px-[16px] flex justify-center items-center gap-[10px]  border-[1px] border-[#707172] mt-[20px]  hover:opacity-100 hover:scale-105 hover:shadow-l  "
                style={{ borderRadius: "4px" }}
              >
                <div className="w-[180.5px] h-[32px] flex items-center gap-[12px] opacity-[0px]">
                  <FcGoogle className="w-[23.5px] h-[32px] p-[5px] pt-[5px] pr-[0px] pb-[6px] pl-[7.75px] gap-[0px] opacity-[0px] g " />

                  <span
                    className="w-[145px] h-[27px] gap-[0px] opacity-[0px] text-center text-[#CCCCCC] font-sans
             text-[16px]  leading-[26.1px] tracking-[-0.3px]"
                  >
                    Sign Up with Google
                  </span>
                </div>
              </div>
            </Link>
            <div className="w-[380px] h-[97px] gap-[24px] opacity-[0px] mt-[40px]  flex flex-col justify-center items-center">
              <button
                className="w-[195px] h-[48px] p-[13px] px-[35px] gap-[10px]  opacity-[0px] bg-gradient-to-r from-[#4B63DD] to-[rgba(5,36,191,0.99)]  cursor-pointer  hover:opacity-100 hover:scale-105 hover:shadow-l"
                style={{ borderRadius: "4px" }}
              >
                <span className="w-[125px] h-[22px] gap-[0px] opacity-[0px] text-left text-[14px] font-sans leading-[21.7px]">
                  {" "}
                  Create an Account
                </span>
              </button>
              <div className="w-[380px] h-[25px] gap-[13px] opacity-[0px] flex justify-center">
                <p className="w-[190px] h-[25px] gap-[0px] opacity-[0px] text-center text-[16px] font-normal leading-[24.8px] text-[#909296] ">
                  Already have an account?
                </p>
                <span className="w-[50px] h-[25px] gap-[0px]  text-[16px] font-normal leading-[24.8px] text-[#C1C2C5] ml-[-15px] cursor-pointer  hover:opacity-100 hover:scale-105 hover:shadow-l">
                  Sign In
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-[32px] p-[20px] px-[100px] gap-[10px] flex justify-center items-center border-[1px] border-[#25262B]  opacity-[0px]">
        <p className="w-[220px] h-[19px] gap-[0px] opacity-[0px] text-left text-[12px] font-sans leading-[18.6px] text-[#5C5F66]">
          ©️ 2024 Reachinbox. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
