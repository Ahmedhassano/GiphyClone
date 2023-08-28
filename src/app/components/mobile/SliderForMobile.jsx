"use client"
import React, { useEffect, useRef, useState } from "react"

export default function SliderForMobile({children,height,fetchData}) {
  let [offset,setOffset]=useState(0)
  let [Observer,setObserver]=useState(false)
  let [Data,setData]=useState([])

  let LastEle=useRef()
  useEffect(()=>{
    fetchData().then(res=>res.json()).then(res=>setData(res.data))
    let observer =new IntersectionObserver((entry)=>{
          setObserver(entry[0].isIntersecting)
    })
    observer.observe(LastEle.current)
  },[])
  useEffect(()=>{
    if (Observer) {
      setOffset(offset+1)
    }
  },[Observer])
  useEffect(()=>{
    fetchData(offset).then(res=>res.json()).then(res=>setData([...Data,...res.data])
    )
     
  },[offset])
  
  return (
   
    <div 
        style={{height:height}}
         className="w-full  grid gap-2 grid-flow-col overflow-x-auto ">
         {Data.map((el,ind)=>React.cloneElement(children,{info:el}))} 
         <div ref={LastEle} className="w-[20] h-full "></div> 
    </div>
 
  )
}
