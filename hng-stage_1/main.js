const currentDate = new Date()
const currentDayOfTheWeek = currentDate.toLocaleDateString('en-us', {weekday: 'long'})
const currrentUTCTime = currentDate.toUTCString()

document.querySelector('.currentDayOfTheWeek').textContent = currentDayOfTheWeek
document.querySelector('.currrentUTCTime').textContent = currrentUTCTime