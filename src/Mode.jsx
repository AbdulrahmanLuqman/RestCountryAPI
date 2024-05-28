import React, {useState} from "react"
import { FaMoon } from "react-icons/fa"
import { FaSun } from "react-icons/fa"

const Mode = (props)=>{
    // const [isDarkMode, setIsDarkMode] = useState(true)
    const isDarkMode = props.mode
    const setIsDarkMode = props.setMode
    isDarkMode ? document.body.style.backgroundColor = "#212E37" : document.body.style.backgroundColor = "whitesmoke"

    const handleModeToggle = ()=>{
        setIsDarkMode(!isDarkMode)
    }


    return(
        <div className={`background w-full md:px-16 px-8 py-4 flex justify-between items-center ${isDarkMode ? "bg-[#2B3945]" : "bg-[#FAFAFA]"}`}>
            <h1 className={`max-[340px]:text-sm ${isDarkMode ? "text-[#FAFAFA]" : ""} text-[1.5rem] font-semibold`}>Where in the world?</h1>

            <div onClick={handleModeToggle}>
                { isDarkMode ? <button className="max-[340px]:text-sm flex items-center gap-2 font-bold text-[#FAFAFA]"><FaMoon /><span className="max-[500px]:hidden">Dark Mode</span> </button> : <button className="max-[340px]:text-sm flex items-center gap-2 font-bold"><FaSun /><span className="max-[500px]:hidden">Light Mode</span> </button>}
            </div>
        </div>
    )
}

export default Mode