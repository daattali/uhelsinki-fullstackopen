import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({country}) => {
  const [ weatherData, setWeatherData] = useState([])

  useEffect(() => {
    const weatherURL = `http://api.weatherstack.com/current?access_key=cf56f15a0b18ec7e0bf915c02cf341bf&query=${country.capital},${country.name}`
    axios
      .get(weatherURL)
      .then(response => setWeatherData(response.data))
  }, [country])
  
  if (process.env.REACT_APP_WEATHERSTACK_API_KEY === undefined) {
    return null
  }

  if (weatherData.length === 0) {
      return null
  }

  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      <div><strong>temperature:</strong> {weatherData.current.temperature} Celcius</div>
      <div>
        {weatherData.current.weather_icons.map((icon, idx) => {
          const desc = weatherData.current.weather_descriptions[idx]
          return <img key={desc} src={icon} alt={desc} />
        })}
      </div>
      <div><strong>wind:</strong> {weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</div>
    </div>
  )
}

export default Weather