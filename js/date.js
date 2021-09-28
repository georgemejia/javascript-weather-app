export function showDate() {
  const dateElement = document.querySelector('#date')
  const date = new Date()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  dateElement.innerHTML = `${weekDays[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`
}