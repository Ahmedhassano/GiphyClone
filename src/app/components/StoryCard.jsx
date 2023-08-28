import Image from "next/image"
import Link from "next/link"
export default function StoryCard({info}) {
  let images=info.images
  let img=images.fixed_height
  return (
    <Link 
     href={"/"}
    
     className={` relative group/card h-80 bg-indigo-600  `}>
      <div className=" absolute inset-0 z-10">
         <span className={` absolute bg-indigo-800 inset-y-0 inset-x-4 translate-y-4`} ></span>
         <span className={`  absolute bg-indigo-700  inset-y-0  inset-x-2 translate-y-2 `}></span>
      </div>
      <div className="relative w-full h-full border-b-4 border-b-solid border-b-indigo-600 overflow-hidden z-20">
        <Image
         fill
         src={img.url}
         className="group-hover/card:scale-110  duration-200 "
          alt={info.title} 
        />
      </div>
      <div className=" absolute opacity-0 group-hover/card:opacity-100 duration-200 
      bg-gradient-to-t from-indigo-600 to-35% to-transparent inset-0 z-30">
      </div>
      <div className=" absolute top-3 left-3 z-40">
        {/* image channal */}
      </div>
    </Link>
  )
}
