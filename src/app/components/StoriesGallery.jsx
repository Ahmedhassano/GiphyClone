"use client"
import { isMobile } from "react-device-detect"
import Gallary from "./Gallary"
import StoryCard from "./StoryCard"
import { GetTrendingGifs } from "./desktop/HomeContent"
export default function StoriesGallery() {
  return (
    <div className={`w-full `}>
       <Gallary 
             fetchData={GetTrendingGifs} 
             customClass={`${isMobile?" grid-cols-2  [&>:nth-child(1)]:col-span-2 [&>:nth-child(1)]":" [&>:nth-child(5n+0)]:col-span-2 grid-cols-4 "} grid gap-5`}>
           <StoryCard/>
       </Gallary>
      
    </div>
  )
}
