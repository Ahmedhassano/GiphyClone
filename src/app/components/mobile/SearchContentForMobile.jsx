"use client"
import { useState } from "react"
import NavigationTabs from "../NavigationTabs"
import GifCardForMobile from "./GifCardForMobile"
import StikersCard from "../desktop/StikersCard"
import SliderForMobile from "./SliderForMobile"
import Gallary from "../Gallary"
import { GetGifsBysearch ,GetStikersBysearch } from "../desktop/SearchContent"
export default function SearchContentForMobile({searchValue}) {
  let[Tab,setTab]=useState(1) 
  return (
    <div className=" px-2 flex flex-col items-center gap-2 ">
       <NavigationTabs tabCurrentNumber={Tab} >
          <div onClick={()=>setTab(1)} className="tab">gifs</div>
          <div onClick={()=>setTab(2)} className="tab">Stikers</div>
       </NavigationTabs>
       
     
         <h3 className="w-full text-white font-medium text-lg">GIPHY Clips</h3>
         <SliderForMobile height={"100px"} fetchData={(offset)=>GetGifsBysearch(searchValue,offset)}>
            <GifCardForMobile fixed_height={true} />  
         </SliderForMobile> 
      
       <h3 className="w-full text-white font-medium text-lg">All the {Tab==1?"Gifs":"stikers"}</h3>
       {Tab==1&&<Gallary customClass={" space-y-3 columns-2"} fetchData={(offset)=>GetGifsBysearch(searchValue,offset)}>
                     <GifCardForMobile fixed_width={true}/>
                 </Gallary>}
      {Tab==2&&<Gallary customClass={"space-y-3 columns-2"} fetchData={(offset)=>GetStikersBysearch(searchValue,offset)}>
         <StikersCard fixedWidth={true}/>
      </Gallary>}          
    </div>
  )
}
