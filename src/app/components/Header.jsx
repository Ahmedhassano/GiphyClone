import { isMobile } from "react-device-detect";
import Logo from "./Logo";
import RightHeader from "./HeaderRight";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className={`${!isMobile?" w-full max-w-[1024px] min-w-[1024px] ":" w-full "} h-24 sticky top-0 m-auto bg-[--bg-body] px-2
     grid gap-1 grid-rows-2 grid-cols-[repeat(2,1fr)] justify-between z-30`}>
       <Logo/>
      
       <RightHeader/> 
       <SearchBar/>
   </header>
  )
}
