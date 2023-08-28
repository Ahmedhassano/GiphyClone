import {UserInfo} from "../lib/data"
import Image from "next/image"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
export default function UserContainer() {

  return (
    <div 
      className=" relative group/user flex gap-2 items-center bg-zinc-700 pr-3 rounded-sm cursor-pointer">
       <Image
        width={30}
        height={30}
        src={"/defulte_img.gif"}         
       />
        <div className=" px-2 text-white">{UserInfo.name}</div>
          <MdOutlineKeyboardArrowDown className={`group-hover/user:rotate-180 text-white text-2xl duration-200`}/>
          
    </div>
  )
}
