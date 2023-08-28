import { isMobile } from "react-device-detect"
import HomeContentForMobile from "./components/mobile/HomeContentForMobile"
import HomeContent from "./components/desktop/HomeContent"
export default function Home() {

  return (
    <section className=" relative px-2">
      {isMobile?<HomeContentForMobile/>:<HomeContent/>}
        
    </section>
  )
}
