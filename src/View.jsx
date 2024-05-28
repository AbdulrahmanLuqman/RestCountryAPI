import Filter from "./Filter"
import Countries from "./Countries"


// Dark Blue (Dark Mode Elements): #2B3945
// Very Dark Blue (Dark Mode Background):  #212E37
// Very Dark Blue (Light Mode Text)   #111517
// Dark Gray (Light Mode Input)   #838383
// Very Light Gray (Light Mode Background)   #FAFAFA
// White (Dark Mode Text & Light Mode Elements)   #FFFFFF

const Views = (props)=>{
    const darkMode = props.mode
    const setDarkMode = props.setMode
    const countries = props.countries
    const setCountries = props.setCountries
    const countryData = props.countryData
    const setCountryData = props.setCountryData
    const isLoading = props.isLoading
    const setIsLoading = props.setIsLoading

 //instead use boolean to toggle this stuff         



    return(
        <>
            <Filter mode={darkMode} setMode={setDarkMode} countries={countries} setCountries={setCountries} countryData={countryData} setCountryData={setCountryData}/>
            <Countries countries={countries} setCountries={setCountries} mode={darkMode} setMode={setDarkMode} isLoading={isLoading} setIsLoading={isLoading}/>
        </>
    )
}

export default Views