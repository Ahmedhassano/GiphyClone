import Link from "next/link"
import Image from "next/image"
export default function Logo() {
  return (
    <Link 
     href={"/"}
     className="flex gap-2 items-center  "
     >
       <Image 
         src={"giphy-logo.svg"}
         width={35}
         height={40}
         alt="logo"
      />
      <h1 className=" text-white font-bold text-4xl">GIPHY</h1>
    </Link>
  )
}
