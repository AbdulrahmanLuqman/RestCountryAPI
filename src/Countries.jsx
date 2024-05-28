import { useNavigate } from "react-router-dom"
import React, { useState } from "react"


const Countries = (props)=>{
    const isDarkMode = props.mode
    const countries = props.countries
    const isLoading = props.isLoading
    const setIsLoading = props.setIsLoading
    const navigate = useNavigate()
    const toCountryInfo = (country)=>{
        // console.log(country)
        navigate('/country-info', {state: {country}})
    }
    return(
        <div className="md:px-16 px-8 my-12 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {
                isLoading ? (<h2 className="text-3xl text-red-500">Loading...</h2>) :
                <>
                {countries.map((country, index) =>
                    <div onClick={()=> toCountryInfo(country)} key={index} className={`cursor-pointer md:w-full w-[250px] mx-auto background rounded-md ${isDarkMode ? "bg-[#2B3945]" : "bg-[#FAFAFA]"}`}>
                        <img className="h-[150px] w-full" src={country.flags.png} alt={country.flags.alt} />
                        <div className="p-4 space-y-4">
                            <p className={`font-bold ${isDarkMode ? "text-[#FAFAFA]" : ""}`}>{country.name.common}</p>
                            <div>
                                <p className={`font-semibold ${isDarkMode ? "text-gray-300" : ""}`}>Population: <span className="text-gray-400 font-normal">{country.population}</span></p>
                                <p className={`font-semibold ${isDarkMode ? "text-gray-300" : ""}`}>Region: <span className="text-gray-400 font-normal">{country.region}</span></p>
                                <p className={`font-semibold ${isDarkMode ? "text-gray-300" : ""}`}>Capital: <span className="text-gray-400 font-normal">{country.capital}</span></p>
                            </div>
                        </div>
                    </div>
                )}
                </>
            }
            
        </div>
    );
}

export default Countries
