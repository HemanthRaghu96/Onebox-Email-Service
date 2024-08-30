import React from "react";
import LoadingImage from "./LoadingImage";

const LoadingPage: React.FC = () => {
  return (
    <div className=" w-[832.3px] h-[392.4px] absolute  top-[209px] left-[331.66px] gap-48px] flex  flex-col justify-center items-center ">
      <LoadingImage />
      <div className="w-[533px] h-[115px] gap-[24px] opacity-[0px] mt-[40px] flex flex-col items-center">
        <p className="w-[533px] h-[37px] text-[24px] font-bold leading-[36.53px] text-center font-sans" >
          It’s the beginning of a legendary sales pipeline
        </p>
        <p className="w-[289px] h-[54px] text-[#9E9E9E] text-[18px] font-[500] text-center font-sans">
          When you have inbound E-mails <br /> you’ll see them here
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
