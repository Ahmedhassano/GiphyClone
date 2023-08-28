"use client"
import { useState ,useEffect } from "react"
import NavigationTabs from "@/app/components/NavigationTabs"
import Gallary from "@/app/components/Gallary"
import GifCard from "@/app/components/desktop/GifCard"
import StikersCard from "@/app/components/desktop/StikersCard"
import { GetTrendingGifs,GetTrendingStikers } from "@/app/components/desktop/HomeContent"

export function GetGifsBysearch(search,offset){
     return fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&offset=${offset}&api_key=${process.env.key_api}`) 
}
export function GetStikersBysearch(search,offset){
  return fetch(`https://api.giphy.com/v1/stickers/search?q=${search}&offset=${offset}&api_key=${process.env.key_api}`) 
}
export default function SearchContent({searchValue}) {

  let [Tab,setTab]=useState(1)
  return (
  <div className=" space-y-3">
    
       <h1 className=" text-4xl text-white font-extrabold ">{searchValue}</h1>
       <NavigationTabs tabCurrentNumber={Tab}>
          <div
           className="text-gray-200 font-medium text-lg grid place-items-center cursor-pointer"
           onClick={()=>setTab(1)}
           >GIFS</div>
          <div
           onClick={()=>setTab(2)}
           className="text-gray-200 font-medium text-lg grid place-items-center cursor-pointer">Stikers</div>
       </NavigationTabs>  
       
       {Tab==1&&<Gallary customClass={"space-y-3 columns-4 "} fetchData={(offset)=>GetGifsBysearch(searchValue,offset)}>
                  <GifCard fixedWidth={true}/>
               </Gallary>}
       {Tab==2&&<Gallary customClass={" space-y-3 columns-4 "} fetchData={(offset)=>GetStikersBysearch(searchValue,offset)}>
                 <StikersCard fixedWidth={true}/>
              </Gallary>}
    </div>
  )
}
