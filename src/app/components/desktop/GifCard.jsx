"use client"
import Link from "next/link"
import Image from "next/image"
import {AiFillHeart} from "react-icons/ai"
import {BsFillShareFill} from "react-icons/bs"
export default function GifCard({info,fixedWidth,fixedHeight,customClass}){
    let colors=["#ff0756","#47eb47","#ffdb0e","#b10eab","#00b7ff"]    
    let RandomColor=Math.floor(Math.random()*colors.length)
    let {user,title,images}=info; 
    let img;
    fixedWidth?img=images.fixed_width:img=images.fixed_height;
    let {url,width,height}=img
    return (
    <div style={{minWidth:fixedHeight&&img.width+"px", minHeight:fixedWidth&&img.height+"px",backgroundColor:colors[RandomColor]}}
        className={` relative group/card  ` } >
      <div className=" absolute top-3 right-3 flex gap-3  text-lg text-white  opacity-0 group-hover/card:opacity-100 z-30 ">
         <BsFillShareFill/>
         <AiFillHeart/>
      </div>
      <Link className={`${customClass} absolute inset-0 `} href={`/gifs/${info.id}`}>
         <Image
           src={img.url}
           fill
           alt={title}
          />
      </Link>
      {user&& <div className=" w-7 h-7 absolute left-3 bottom-3 rounded-sm  opacity-0 group-hover/card:opacity-100 overflow-hidden">
              <Image
              src={user.avatar_url||""}
              fill
              />
      </div> }
    </div>
  )
}
