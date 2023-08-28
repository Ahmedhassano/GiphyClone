"use client"
import React from "react"
export default function NavigationTabs({children,tabCurrentNumber}) {
  return (
    <div className=" w-fit h-12  relative grid grid-flow-col auto-cols-[100px] items-stretch ">
        <div className={`
             ${tabCurrentNumber==1?
             "animate-[toggleAnimationLeft_0.5s_forwards_linear]  bg-gradient-to-l from-[#a111fa] to-[#6f00ff]"
             :"animate-[toggleAnimationRight_0.5s_forwards_linear] bg-gradient-to-l from-[#25edf4] to-[#00ffe1]" } 
             absolute w-[100px] h-full rounded-full   -z-10`}></div>
        {children}
   </div>
  )
}
