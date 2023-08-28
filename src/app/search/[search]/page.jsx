import { isMobile } from "react-device-detect"
import SearchContent from "@/app/components/desktop/SearchContent"
import SearchContentForMobile from "@/app/components/mobile/SearchContentForMobile"
export default function page({params}) {
  return (
    <section>
      {isMobile?<SearchContentForMobile searchValue={params.search}/>:<SearchContent searchValue={params.search}/>}
    </section>
  )
}
