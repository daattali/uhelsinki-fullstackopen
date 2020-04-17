import React from 'react'
import Country from "./Country"

const Results = ({countries, clickCountry}) => {
  if (countries.length === 0) {
    return null
  }

  if (countries.length > 10) {
    return (
      "Too many matches, specify another filter"
    )
  }

  if (countries.length > 1) {
    return (
      <div>
        {countries.map(country => 
          <div key={country.name}>
            {country.name} {' '}
            <button onClick={clickCountry(country.name)}>show</button>
          </div>
        )}
      </div>
    )
  }

  return (
    <Country country={countries[0]} />
  )
}

export default Results