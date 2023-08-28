import Image from "next/image"
export default function ChannalCard({user}) {
   return (
    <div>
       <div className=" w-10 h-10 rounded-sm bg-white shadow-md">
         <Image
          src={user.avatar_url&&user.avatar_url}
         />
       </div>
       <div className=""></div>
    </div>
  )
}
