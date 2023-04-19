var searchButton = document.getElementById('search')
searchButton.addEventListener('click', function() {
  var input = document.getElementById('city')
  var userCity = input.value
  // console.log(userCity)
  fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + userCity + '&limit=1&appid=a5c9bbc780a6d5f3b81b7c2576a5552c')
    .then(response => response.json())
    .then(response => {
      var lat = response[0].lat
      var lon = response[0].lon
      fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=a5c9bbc780a6d5f3b81b7c2576a5552c&units=imperial')
        .then(response => response.json())
        .then(response => {
          console.log(response)
          
          console.log('hi')
          // need City, Date, WeatherIcon, Temperature, Humidity, Wind Speed
          var cityData = {
            city: response.city.name,
            date0: response.list[0].dt_txt,
            date1: response.list[1].dt_txt,
            date2: response.list[2].dt_txt,
            date3: response.list[3].dt_txt,
            date4: response.list[4].dt_txt,
            date5: response.list[5].dt_txt,
            icon0: response.list[0].weather[0].icon,
            icon1: response.list[1].weather[0].icon,
            icon2: response.list[2].weather[0].icon,
            icon3: response.list[3].weather[0].icon,
            icon4: response.list[4].weather[0].icon,
            icon5: response.list[5].weather[0].icon,
            temp0: response.list[0].main.temp + "°F",
            temp1: response.list[1].main.temp + "°F",
            temp2: response.list[2].main.temp + "°F",
            temp3: response.list[3].main.temp + "°F",
            temp4: response.list[4].main.temp + "°F",
            temp4: response.list[5].main.temp + "°F",
            humid0: response.list[0].main.humidity + "%",
            humid1: response.list[1].main.humidity + "%",
            humid2: response.list[2].main.humidity + "%",
            humid3: response.list[3].main.humidity + "%",
            humid4: response.list[4].main.humidity + "%",
            humid5: response.list[5].main.humidity + "%",
            wind0: response.list[0].wind.speed + "MPH",
            wind1: response.list[1].wind.speed + "MPH",
            wind2: response.list[2].wind.speed + "MPH",
            wind3: response.list[3].wind.speed + "MPH",
            wind4: response.list[4].wind.speed + "MPH",
            wind5: response.list[5].wind.speed + "MPH"
          }
          var cityHist = localStorage.getItem('cityData')
          if (cityHist) {
            localStorage.setItem('cityData', cityHist + ',' + cityData)
          } else {
            localStorage.setItem('cityData', cityData)
          }
          console.log(cityData)
        })
      .catch(error => (console.error("error fetching")))
      }
    )
    .catch(error => (console.error("error fetching")))  
})