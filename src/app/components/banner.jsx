import Image from "next/image"
export default function Banner({img}) {
  return (
    <div className="w-full relative overflow-hidden">
       <Image
         width={1024}
         height={500} 
         src={img}
         alt="banner"
       />
    </div>
  )
}
