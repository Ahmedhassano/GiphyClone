"use client"
import StoriesGallery from "../StoriesGallery"
import SliderForMobile from "./SliderForMobile"
import GifCardForMobile from "./GifCardForMobile"
import StikersCardForMobile from "./StikersCardForMobile"
import SliderHead from "../sliderHead"
import Banner from "../banner"
import { GetTrendingGifs,GetTrendingStikers } from "../desktop/HomeContent"
import {HiMiniArrowTrendingUp} from "react-icons/hi2"
import {AiOutlineThunderbolt,AiOutlineSound} from "react-icons/ai"
import {MdWebStories} from "react-icons/md"
export default function HomeContentForMobile() {
  
  return (
    <div className="max-w-full space-y-3">
       <Banner img={"/Mobile_home_Img.gif"} />
       
       <SliderHead
        title="Trending"
        icon={<HiMiniArrowTrendingUp className=" text-sky-500 text-lg "  />}
        linkUrl={"/trending-Gifs"}
       /> 
       <SliderForMobile fetchData={GetTrendingGifs} height="100px">
         <GifCardForMobile fixed_height={true}/>
      </SliderForMobile> 

      <SliderHead
        title="Stikers"
        icon={<AiOutlineThunderbolt className=" text-pink-700 text-lg "  />}
        linkUrl={"/trending-Stikers"}
       /> 
       <SliderForMobile fetchData={GetTrendingStikers} height="150px">
         <StikersCardForMobile fixedHeight={true}/>
      </SliderForMobile> 
      
      <SliderHead
        title="clips"
        icon={<AiOutlineSound className=" text-green-500 text-lg "  />}
        linkUrl={"/trending-Stikers"}
       /> 
       <SliderForMobile fetchData={GetTrendingGifs} height="100px">
         <GifCardForMobile fixed_height={true}/>
      </SliderForMobile> 

      <SliderHead
        title="stories"
        icon={<MdWebStories className=" text-violet-700  text-lg "  />}
        linkUrl={"/trending-Stikers"}
       /> 
      <StoriesGallery/>
    </div>
  )
}
