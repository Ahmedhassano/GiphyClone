"use client"
import Link from "next/link";
import { useState,useEffect } from "react";
import {BiSearch} from "react-icons/bi"
export default function SearchBar() {
  let [inputValue,setInputValue]=useState("")
  return (
    <div 
     className="flex row-start-2 col-start-1 col-span-3  ">
       <input
        onChange={(e)=>setInputValue(e.target.value)}
        type="text" 
        className="flex-1  text-2xl px-2 rounded-sm"
        />
      
         <Link 
           className={` ${!inputValue.length&&"pointer-events-none"} relative h-full w-10 text-white text-xl font-bold  bg-orange-400 rounded-sm
             grid place-content-center`} 
           href={`/search/${inputValue}`}>
           <BiSearch/>
         </Link>
      
    </div>
  )
}
