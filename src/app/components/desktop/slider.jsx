"use client"
import {MdArrowForwardIos,MdArrowBackIosNew}from "react-icons/md"
import { useState,useEffect,useRef } from "react"

export default function slider({children,className}) {
let [clientWidth,setClientWidth]=useState()
let [scrollLeft,setscrollLeft]=useState()  
let slider=useRef()
let handleResize=()=>{
    setClientWidth(slider.current.clientWidth||slider.current.getBoundingClientRect().width)
}
let ForWord=()=>{    
 
    slider.current.scrollLeft+=clientWidth
}
let BackWord=()=>{

    slider.current.scrollLeft-=clientWidth
}
useEffect(()=>{
   setClientWidth(slider.current.clientWidth||slider.current.getBoundingClientRect().width)
   window.addEventListener("resize",handleResize) 
   return ()=>{
   window.removeEventListener("resize",handleResize) 
   }
},[])
 
    return (
    <div className={` relative flex ${className} `}>
        <div className={" absolute cursor-pointer flex items-center h-full left-0 text-white text-3xl z-10"} onClick={BackWord}>
          <MdArrowBackIosNew/>
        </div> 
        <div ref={slider} className="relative flex  gap-2 overflow-x-auto ">
           {children}
        </div>
        <div className={" absolute cursor-pointer  flex items-center h-full right-0 text-white text-3xl z-10"} onClick={ForWord}>
         <MdArrowForwardIos/>
       </div> 
   </div>
  )
}
