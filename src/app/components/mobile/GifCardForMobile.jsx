"use client"
import Image from "next/image"
import Link from "next/link"
export default function GifCardForMobile({info,fixed_width,fixed_height}) {
   let colors=["#ff0756","#47eb47","#ffdb0e","#b10eab","#00b7ff"]    
    let RandomColor=Math.floor(Math.random()*colors.length)
    let img;
    fixed_width?img=info.images.fixed_height_small:img=info.images.fixed_height_small;
    let {url,width,height}=img
  return (
    <div  style={{minWidth:fixed_height&&img.width+"px", minHeight:fixed_width&&img.height+"px",backgroundColor:colors[RandomColor]}} className=" relative">
        <Link href={`${info.id}`} className="absolute inset-0">
            <Image
             fill
              src={img.url}
            />
        </Link>
    </div>
  )
}

