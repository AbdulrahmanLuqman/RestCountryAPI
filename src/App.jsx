import './App.css'
import React, { useEffect, useState } from "react"
import Mode from "./Mode"

import Views from './View'
import CountryInfo from './CountryInfo'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [countries, setCountries] = useState([])

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

  return (
    <>
    <Mode mode={darkMode} setMode={setDarkMode} countries={countries} setCountries={setCountries}/>

    <Routes>
      <Route path='/' element={<Views mode={darkMode} setMode={setDarkMode} countries={countries} setCountries={setCountries}/>}></Route>
      <Route path='/country-info' element={<CountryInfo mode={darkMode} setMode={setDarkMode} countries={countries} setCountries={setCountries} isLoading={isLoading} setIsLoading={setIsLoading}/>}></Route>
    </Routes>
    </>
  )
}

export default App
