const temp = document.querySelector('#temp')
const name = document.querySelector('#name')
const desc = document.querySelector('#desc')
const icon = document.querySelector('#icon')

export function getTemp(weather) {
  temp.innerHTML = `${parseInt(weather.main.temp)}&#176;`
  name.textContent = weather.name
  desc.textContent = weather.weather[0].description
  icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="icon displaying the weather condition">`
}