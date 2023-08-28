"use client"
import Image from "next/image"
import Link from "next/link"
export default function StikersCard({info,fixedWidth,fixedHeight}) {
  let {user,title,images}=info; 
    let img;
    fixedWidth?img=images.fixed_width:img=images.fixed_height;
    let {url,width,height}=img
    return (
    <div style={{minWidth:fixedHeight&&width+"px",minHeight:fixedWidth&&height+"px"}} 
    className={`relative  bg-gradient-to-l  bg-[20px,20px] from-zinc-600 to-50% to-zinc-950 from-50%` } >
      <Link className=" absolute inset-0 " href={"/"}>
         <Image
           src={url}
           fill
           alt={title}
          />
      </Link>
    </div>
  )
}
