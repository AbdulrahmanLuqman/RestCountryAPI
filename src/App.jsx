import './App.css'
import { useEffect, useState, createContext } from "react"
import Mode from "./Mode"

import Views from './View'
import CountryInfo from './CountryInfo'
import { Routes, Route } from 'react-router-dom'

export const DarkMode = createContext()
export const SetDarkMode = createContext()
export const Country = createContext()
export const SetCountries = createContext()
export const HandleModeToggle = createContext()
export const CountryInput = createContext()
export const SetCountryInput = createContext()
export const IsLoading = createContext()
export const SetIsLoading = createContext()

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [countries, setCountries] = useState([])
  const [countryInput, setCountryInput] = useState("")  

  useEffect(
      ()=>{
        const fetchCountries = ()=>{
          try {
            fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountries(data))
          } catch (e){
            console.log("Error fetching data", e)
          } finally{
             setIsLoading(false)
          }
          
        }
        fetchCountries()
      }, []
  )

  const handleToggleMode = ()=> setDarkMode(!darkMode)

  return (
    <>
    <DarkMode.Provider value={darkMode}>
      <SetDarkMode.Provider value={setDarkMode}>
        <Country.Provider value={countries}>
          <SetCountries.Provider value={setCountries}>
            <HandleModeToggle.Provider value={handleToggleMode}>
              <Mode />
            </HandleModeToggle.Provider>
            
            <CountryInput.Provider value={countryInput}>
              <SetCountryInput.Provider value={setCountryInput}>
                <IsLoading.Provider value={isLoading}>
                  <SetIsLoading.Provider value={setIsLoading}>
                    <Routes>
                      <Route path='/' element={<Views />}></Route>
                      <Route path='/country-info' element={<CountryInfo />}></Route>
                    </Routes>
                  </SetIsLoading.Provider>
                </IsLoading.Provider>
              </SetCountryInput.Provider>
            </CountryInput.Provider>
          </SetCountries.Provider>
        </Country.Provider>
      </SetDarkMode.Provider>
    </ DarkMode.Provider>

    </>
  )
}

export default App