"use client"
import Link from "next/link";
import Image from "next/image";
export default function StikersCardForMobile({info,fixedWidth,fixedHeight}) {
    let {user,images}=info; 
    let img;
    fixedWidth?img=images.fixed_width:img=images.fixed_height;
    let {url,width,height}=img
    return (
     <div style={{minWidth:fixedHeight&&width+"px",minHeight:fixedWidth&&height+"px"}} 
             className={`relative grid grid-rows-[2fr_1fr]` } >
            <Link className=" w-full relative bg-gradient-to-l  bg-[20px,20px] from-zinc-600 to-50% to-zinc-950 from-50% " href={"/"}>
              <Image
               src={url}
               fill
               alt=""
              />
            </Link>
            {user&&<div className=" relative w-full bg-black ">
                 <div className=" absolute -top-6 w-full flex items-center flex-col">
                   <div className=" relative w-11 h-11 overflow-hidden">
                    <Image
                     fill
                     src={user.avatar_url}
                   /> 
                   </div>  
                   <p  className=" text-white ">{user.username}</p>
                 </div> 
            </div> }
        </div>
      
  )
}
