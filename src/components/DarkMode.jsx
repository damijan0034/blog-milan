"use client"

import { TiWeatherSunny} from "react-icons/ti"
import { FaMoon} from "react-icons/fa6"
import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"



const DarkMode = () => {
  const{toggle,mode}=useContext(ThemeContext)
    
  return (
    <div className="flex gap-1 border px-2 py-1 rounded-xl relative"
      onClick={toggle}
    >
        <div><TiWeatherSunny /></div>
        <div><FaMoon /></div>
        <div className="bg-green-300 h-[15px]
        rounded-full
        w-[17px] absolute"
        
        style={mode === "light" ? {left:"6px"}  :  {right:"6px"} } 
        ></div>
    </div>
  )
}

export default DarkMode