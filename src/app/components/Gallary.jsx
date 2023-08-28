"use client"

import { useEffect, useState } from "react"
import React from "react"

export default function Gallary({children,fetchData,customClass}) {
    let [offset,setOffSet]=useState(2)
    let [Data,setData]=useState([])
    let [isLoading,setIsLoading]=useState(false)
    function handleScroll(){
        if(window.scrollY == (document.documentElement.scrollHeight-document.documentElement.clientHeight))
           setOffSet((prev)=>prev+1) 
   }
   useEffect(()=>{
    fetchData()
    .then(res=>res.json())
    .then(res=>setData([...Data,...res.data]))
    window.addEventListener("scroll",handleScroll)
    return()=>{
    window.removeEventListener("scroll",handleScroll)
    }
  },[])
  useEffect(()=>{
    fetchData(offset)
    .then(res=>res.json())
    .then(res=>setData([...Data,...res.data]))
  },[offset])
 
    
   return (
    <div
     style={{columnGap:"10px"}} 
     className={`w-full  [&>div]:break-inside-avoid ${customClass}`}>
         {Data.map(el=> React.cloneElement(children,{info:el}) )}
    </div>
  )
}
