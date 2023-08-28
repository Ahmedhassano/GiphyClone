"use client"
import Gallary from "../components/Gallary"
import GifCard from "../components/desktop/GifCard"
import { GetTrendingGifs } from "../components/desktop/HomeContent"
export default  function trendingGifs() {
 
  return (
    <section className="">
      <h1 className="title2  ">Trending GIFs</h1>  
         <Gallary  customClass={" space-y-3 columns-4 [&>div]:break-inside-avoid"} fetchData={GetTrendingGifs}>
           <GifCard  fixedWidth={true}/>  
         </Gallary>
     
   </section>
  )
}
