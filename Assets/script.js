var latitude = 0
var longitude = 0

var apiWeather = 'api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=a5c9bbc780a6d5f3b81b7c2576a5552c&units=imperial'

var searchButton = document.getElementById('search')
searchButton.addEventListener('click', function() {
  var input = document.getElementById('city')
  var city = input.value
  console.log(city)
  fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=a5c9bbc780a6d5f3b81b7c2576a5552c')
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(error => (console.error("error fetching")))
})