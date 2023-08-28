import {MdKeyboardArrowRight} from "react-icons/md"
import Link from "next/link"
export default function sliderHead({title,LinkTitle,icon,linkUrl}) {
  return (
      
     <div className="flex justify-between">
         <h1 className="flex items-center gap-1 ">
          {icon}
          <span className=" text-white title1 ">{title}</span>
         </h1>
         {LinkTitle&&<Link className="flex gap-2 items-center text-zinc-400" href={linkUrl}>
           <p>{LinkTitle} </p>
          <MdKeyboardArrowRight size={20}/>
          </Link>}
    </div>
  )
}
