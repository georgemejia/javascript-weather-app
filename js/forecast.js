const forecast = document.querySelector('#forecast')

export async function getForecast(weather) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&units=imperial&appid=${import.meta.env.VITE_KEY}`)
  const data = await response.json()
  const days = data.daily.splice(1,5)
  
  forecast.innerHTML = null
  // loop creates a card for every day in the array
  days.forEach((day) => {
    const unixtime = day.dt
    const milliseconds = unixtime * 1000
    const date = new Date(milliseconds)
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const element = document.createElement('div')
    element.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'p-4', 'bg-blue-300',)
    element.innerHTML = `
      <div>${weekDays[date.getDay()]}</div>
      <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="Icon">
      <div class="text-sm mb-2">L:${parseInt(day.temp.min)} H:${parseInt(day.temp.max)}</div>
      <div class="capitalize">${day.weather[0].description}</div>`
    forecast.appendChild(element)
  })
}