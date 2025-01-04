import { useLocation, useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

import { DarkMode } from "./App"
import { useContext } from "react"

const CountryInfo = ()=>{
    const isDarkMode = useContext(DarkMode)
    const location = useLocation()
    const navigate = useNavigate()
    const country = location.state?.country
    // console.log(country)

    return(
        <div>
            <button onClick={()=>navigate("/")} className={`md:mt-16 md:ml-16 mt-8 ml-8 px-6 rounded-md py-2 flex gap-2 font-semibold items-center background ${isDarkMode ? "bg-[#2B3945] text-[#FAFAFA] hover:bg-transparent hover:border-[#2B3945]" : "bg-[#FAFAFA] hover:bg-transparent hover:border-[#FAFAFA]"}`}><FaArrowLeft /> Back</button>

            <div className={`background w-fit border-4 rounded-md lg:mx-auto mx-8 px-10 pt-2 lg:mt-2 mt-6 pb-4 space-y-4 ${isDarkMode ? "border-[#2B3945]" : "border-[#FAFAFA]"}`}>
                <img src={country.flags.png} alt={country.flags.alt} /> 
                <h3 className={`font-bold text-lg ${isDarkMode ? "text-[#FAFAFA]" : "text-gray-800"}`}>{country.name.common}</h3>
                <div className="space-y-[2px]">
                    <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>Native Name: <span className="font-normal">{country.name.official}</span></p>
                    <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>Population: <span className="font-normal">{country.population}</span></p>
                    <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>Region: <span className="font-normal">{country.region}</span></p>
                    <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>Sub Region: <span className="font-normal">{country.subregion}</span></p>
                    <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>Capitals: <span className="font-normal">{country.capital}</span></p>
                </div>
                <div className="space-y-[2px]">
                    <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>Top Level Domain: {country.tld}</p>
                    <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>Currencies:</p>
                    <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>Languages: </p>
                </div>

                <div className="space-y-2">
                    <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>Border Countries:</p>
                    <div className="flex flex-wrap gap-4">
                        {
                            country.borders?.map((cb, index) => <p key={index} className={`px-6 rounded-md py-[4px] flex gap-2 font-semibold items-center background ${isDarkMode ? "bg-[#2B3945] text-[#FAFAFA] hover:bg-transparent hover:border-[#2B3945]" : "bg-[#FAFAFA] hover:bg-transparent hover:border-[#FAFAFA]"}`}>{cb}</p>)
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CountryInfo