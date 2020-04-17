import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Results from './components/Results'

const App = () => {
  const [ allCountries, setAllCountries] = useState([])
  const [ newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setAllCountries(response.data))
  }, [])

  const filteredCountries = 
    newFilter.trim() === '' ?
    [] :
    allCountries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()))

  const clickCountryHandler = country => 
    () => setNewFilter(country)

  return (
    <div>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <Results countries={filteredCountries} clickCountry={clickCountryHandler} />
    </div>
  )
}

export default App