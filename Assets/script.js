var lat
var lon
var city
var state

var searchButton = document.getElementById('search')
searchButton.addEventListener('click', function() {
  var input = document.getElementById('city')
  var userCity = input.value
  // console.log(userCity)
  fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + userCity + '&limit=1&appid=a5c9bbc780a6d5f3b81b7c2576a5552c')
    .then(response => response.json())
    .then(response => {
      // console.log(response)

      // console.log(response[0].lat)
      var lat = response[0].lat
      // console.log(lat)

      // console.log(response[0].lon)
      var lon = response[0].lon
      // console.log (lon)

      // console.log(response[0].name)
      var city = response[0].name
      // console.log(city)

      // console.log(response[0].state)
      var state = response[0].state
      // console.log(state)
      
      localStorage.setItem('City', city)
      localStorage.setItem('State', state)
      localStorage.setItem('Latitude', lat)
      localStorage.setItem('Longitude', lon)
      }
    )
    .catch(error => (console.error("error fetching")))
  
    
    lat = localStorage.getItem('Latitude')
    
    lon = localStorage.getItem('Longitude')
    
    city = localStorage.getItem('City')
  
    state = localStorage.getItem('State')
    console.log(city, state, lat, lon)
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=a5c9bbc780a6d5f3b81b7c2576a5552c')
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(error => (console.error("error fetching")))
  
})