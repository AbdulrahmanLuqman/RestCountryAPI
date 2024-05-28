import React, { useState } from "react"
import { FaArrowDown } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa"

const Filter = (props)=>{
    const isDarkMode = props.mode
    const countries = props.countries
    const setCountries = props.setCountries
    const [showRegion, setShowRegion] = useState(false)

    // console.log(countries)

    const handleRegion = ()=>{
        setShowRegion(!showRegion)
    }

    const handleAfricaRegion = ()=>{
        setShowRegion(!showRegion)
        const africaCountries = countries.filter(country => country.region === "Africa")  
        console.log(africaCountries)
        // setCountries(africaCountries)      
    }
    const handleAmericaRegion = ()=>{
        setShowRegion(!showRegion)
        const americaCountries = countries.filter(country => country.region === "Americas")
        setCountries(americaCountries)
        // console.log(americaCountries)
    }
    const handleAsiaRegion = ()=>{
        setShowRegion(!showRegion)
        const asiaCountries = countries.filter(country => country.region === "Asia")
        console.log(asiaCountries)
        // setCountries(asiaCountries)
    }
    const handleEuropeRegion = ()=>{
        setShowRegion(!showRegion)
        const europeCountries = countries.filter(country => country.region === "Europe")
        console.log(europeCountries)
        // setCountries(europeCountries)
    }
    const handleOceaniaRegion = ()=>{
        setShowRegion(!showRegion)
        const oceaniaCountries = countries.filter(country => country.region === "Oceania")
        console.log(oceaniaCountries)
        // setCountries(oceaniaCountries)
    }
    const handleFilter = (e)=>{
        setCountries(countries.filter(country => country.name.common.toLowerCase().includes(e.target.value)))
    }
    return(
        <div className="md:px-16 px-8 my-12 flex min-[600px]:flex-row flex-col gap-2 justify-between">
            <div className={`background rounded-md flex items-center gap-2 w-[300px] h-10 outline-none px-4 font-semibold max-[350px]:w-full ${isDarkMode ? "bg-[#2B3945]" : "bg-[#FAFAFA]"}`}>
                <span className={`${isDarkMode ? "text-[#FAFAFA]" : ""}`}><FaSearch /></span>
                <input onChange={handleFilter} className={`w-full outline-none bg-transparent ${isDarkMode ? "text-[#FAFAFA]" : ""}`}/>
            </div>

            <div className="w-[200px] max-[265px]:w-full relative">
                <button onClick={handleRegion} className={`background rounded-md flex items-center justify-between w-full h-10 px-6 ${isDarkMode ? "bg-[#2B3945]" : "bg-[#FAFAFA]"}`}>
                    <span className={`text-sm font-semibold ${isDarkMode ? "text-[#FAFAFA]" : ""}`}>Filter by Region</span>
                    <span className={`${isDarkMode ? "text-[#FAFAFA]" : ""}`}><FaArrowDown /></span>
                </button>
                <div className={`background mt-2 absolute py-2 rounded-md flex flex-col items-start gap-2 w-full ${isDarkMode ? "bg-[#2B3945]" : "bg-[#FAFAFA]"}  ${showRegion ? "" : "hidden"}`}>
                    <button onClick={handleAfricaRegion} className={`text-sm font-semibold w-full text-left px-6 py-2 rounded ${isDarkMode ? "text-[#FAFAFA] hover:bg-gray-600" : "hover:bg-gray-200"}`}>Africa</button>
                    <button onClick={handleAmericaRegion} className={`text-sm font-semibold w-full text-left px-6 py-2 rounded ${isDarkMode ? "text-[#FAFAFA] hover:bg-gray-600" : "hover:bg-gray-200"}`}>America</button>
                    <button onClick={handleAsiaRegion} className={`text-sm font-semibold w-full text-left px-6 py-2 rounded ${isDarkMode ? "text-[#FAFAFA] hover:bg-gray-600" : "hover:bg-gray-200"}`}>Asia</button>
                    <button onClick={handleEuropeRegion} className={`text-sm font-semibold w-full text-left px-6 py-2 rounded ${isDarkMode ? "text-[#FAFAFA] hover:bg-gray-600" : "hover:bg-gray-200"}`}>Europe</button>
                    <button onClick={handleOceaniaRegion} className={`text-sm font-semibold w-full text-left px-6 py-2 rounded ${isDarkMode ? "text-[#FAFAFA] hover:bg-gray-600" : "hover:bg-gray-200"}`}>Oceania</button>
                </div>
            </div>
        </div>
    )
}

export default Filter