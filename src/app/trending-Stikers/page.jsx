"use client"
import Gallary from "../components/Gallary"
import StikersCard from "../components/desktop/StikersCard" 
import { GetTrendingStikers } from "../components/desktop/HomeContent"
export default function trendingStikers() {
  return (
    <section className="">
      <h1 className="title2 ">Stikers GIFs</h1>  
         <Gallary customClass={" space-y-3 columns-4 [&>div]:break-inside-avoid"}  fetchData={GetTrendingStikers}>
           <StikersCard  fixedWidth={true}/>  
         </Gallary>
     
   </section>
  )
}
