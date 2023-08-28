import { isDesktop, isMobile } from 'react-device-detect'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
export const metadata = {
  title: 'Giphy-Be Animated',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col gap-2 items-start  bg-[--bg-body] ">
        <Header/>
        <main className={`${isMobile?" w-full ":" w-full max-w-[1024px] min-w-[1024px] px-2 mx-auto"} `}>
          {children}
        </main>
     </body>
    </html>
  )
}
