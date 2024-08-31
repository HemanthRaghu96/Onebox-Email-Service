import { IoIosSend } from "react-icons/io";

type inboxProps ={
    currColor:Boolean;
    fromEmail:string;
    subject:string;
    sentAt: string;
    handleChangeEmail:any,
    threadId:number
}
const InboxEmailCard:React.FC<inboxProps> = ({currColor,threadId,fromEmail,subject,sentAt,handleChangeEmail}) => {
    const date = new Date(sentAt);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = ` ${monthNames[date.getMonth()]} ${date.getDate()}`;
  return (
    <div className='"w-[255px] h-[100px] p-[12px] pt-[12px] pr-[8px] pb-[12px] pl-[8px] gap-[8px]' onClick={()=> handleChangeEmail(threadId)}>
        <div className='flex gap-1 justify-between text-[12px]'>
            <p className="w-[200px] h-[20px] text-[14px] font-medium leading-[20px] text-left">{fromEmail}</p>
            <p className="w-[38px] h-[18px] gap-[0px] opacity-[0px] text-[12px] font-normal leading-[18px] text-left"> {formattedDate}</p>
        </div>
        <p  className="w-[200px] h-[18px] gap-[0px] opacity-[0px] text-[12px] font-normal leading-[18px] text-left">{subject.slice(0,27)} ...</p>
        <div className='e-[202.99px] h-[20px] flex text-[10px] gap-[8px] mt-2'>
            <div className={`w-[83px] h-[20px] p-[3px] pt-[3px] pr-[8px] pb-[3px] pl-[8px] gap-[8px] flex justify-between items-center border border-gray-700 rounded-lg ${ currColor? 'bg-[#222426]':'bg-[#e1e7ee]' }`} >
                <p className= 'w-2 h-2 rounded-3xl bg-[#57E0A6] mt-0.5'></p>
                <p className={`w-[51px] h-[14px] gap-[0px] opacity-[0px] text-[10px] font-semibold leading-[13.62px] text-left ${ currColor? 'text-[#57E0A6]':'text-blue-700' }`}>Interested</p>
            </div>
            <div className={`w-[111.99px] h-[20px] p-[3px] pt-[3px] pr-[8px] pb-[3px] pl-[8px] gap-[8px] flex  items-center border border-gray-700  rounded-lg ${ currColor? 'bg-[#25262B]':'bg-[#e1e7ee]' }`} >
                <IoIosSend color={currColor? "white":"black"} className='h-[12px]  w-[11.99px] ' />
                <p  className="w-[80px] h-[14px] gap-[0px] opacity-[0px] text-[10px]  leading-[13.62px] text-left">Campaign Name</p>
            </div>

        </div>
    </div>
  )
}

export default InboxEmailCard