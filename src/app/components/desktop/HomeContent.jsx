import Banner from "../banner"
import SliderHead from "../sliderHead"
import Slider from "./slider"
import GifCard from "./GifCard"
import StikersCard from "./StikersCard"
import {HiMiniArrowTrendingUp} from "react-icons/hi2"
import {AiOutlineThunderbolt,AiOutlineSound} from "react-icons/ai"
import {MdWebStories} from "react-icons/md"
import StoriesGallery from "../StoriesGallery"
import { Base_url } from "@/app"
import Image from "next/image"
export  function GetTrendingGifs(offset=1){
  return fetch(`${Base_url}gifs/trending?offset=${offset}&key=${process.env.key_api}`,{caches:"no-store"})
  
} 
export  function GetTrendingStikers(offset=1){
  return fetch(`${Base_url}stickers/trending?offset=${offset}&key=${process.env.key_api}`,{caches:"no-store"})
 
} 
export default async function HomeContent() {
  let trendingGifs=await GetTrendingGifs()
  let Gifs=await trendingGifs.json()
  let trendingStikers=await GetTrendingStikers()
  let Stikers=await trendingStikers.json()
  return (
    <div className="w-full flex gap-3 flex-col">
       <Banner img={"/Home_img.gif"}/>
        <div className=" space-y-3">
            <SliderHead 
              title='Trending'
              icon={<HiMiniArrowTrendingUp className=" text-sky-500 text-3xl"/>}
              LinkTitle="All The GIFs "
              linkUrl={"/trending-Gifs"}
            />
            <Slider className={"h-36"} >
              {Gifs.data.map(el=><GifCard fixedHeight={true} info={el}/>)}
           </Slider> 
        </div>
        <div className=" space-y-3">
          <SliderHead 
              title='Stikers'
              icon={<AiOutlineThunderbolt className=" text-pink-600  text-3xl"/>}
              LinkTitle="All The Stikers "
              linkUrl={"/trending-Stikers"}
            />
            <Slider className={"h-56"} >
              {Stikers.data.map(el=><StikersCard fixedHeight={true} info={el}/>)}
           </Slider> 
        </div>
        <div className=" space-y-3">
          <SliderHead 
              title='clips'
              icon={<AiOutlineSound className=" text-green-500 text-3xl"/>}
              LinkTitle="All Clips "
              linkUrl={"/"}
            />
            <div className="w-full h-96 grid gap-1 grid-rows-2 grid-cols-[2fr_1fr] ">
              <div className=" relative row-span-2 grid place-content-stretch">
                <Image
                fill
                src={Gifs.data[0].images.original.url}
                />
              </div>
              <div className=" relative  grid place-content-stretch">
              <Image
               fill
               src={Gifs.data[1].images.original.url}
              />
            </div>
            <div className=" relative grid place-content-stretch">
              <Image
               fill
               src={Gifs.data[2].images.original.url}
              />
            </div>
         </div>
        </div>
        <div className="">
            <SliderHead 
             title="stories"
             icon={<MdWebStories className=" text-indigo-600  text-3xl"/>}
            />
            <StoriesGallery/>
        </div>
    </div>
  )
}
