import  {useContext} from "react"
import { FaMoon } from "react-icons/fa"
import { FaSun } from "react-icons/fa"
import { DarkMode, HandleModeToggle } from "./App"

const Mode = ()=>{
    const isDarkMode = useContext(DarkMode)
    console.log(isDarkMode)
    // const setIsDarkMode = useContext(SetDarkMode)
    const handleModeToggle = useContext(HandleModeToggle)
    isDarkMode ? document.body.style.backgroundColor = "#212E37" : document.body.style.backgroundColor = "whitesmoke"

    // const handleModeToggle = ()=>{
    //     setIsDarkMode(!isDarkMode)
    // }


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