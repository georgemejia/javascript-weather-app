import { getTemp } from './js/temp'
import { showDate } from './js/date'
import { getForecast } from './js/forecast'

const button = document.querySelector('#button')
const input = document.querySelector('#input')

async function getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=${import.meta.env.VITE_KEY}`)
  const weather = await response.json()
  // function gets called to get the temperature of the city typed in the input
  getTemp(weather)
  // function shows the date
  showDate()
  // function shows the five day forecast according to the city
  getForecast(weather)
  // clears input value
  input.value = null
}

button.addEventListener('click', getWeather)

console.log(import.meta.env)