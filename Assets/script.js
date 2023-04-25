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
          var cityData = {
            city: response.city.name,
            date0: response.list[0].dt_txt,
            date1: response.list[8].dt_txt,
            date2: response.list[16].dt_txt,
            date3: response.list[24].dt_txt,
            date4: response.list[32].dt_txt,
            date5: response.list[39].dt_txt,
            icon0: response.list[0].weather[0].icon,
            icon1: response.list[8].weather[0].icon,
            icon2: response.list[16].weather[0].icon,
            icon3: response.list[24].weather[0].icon,
            icon4: response.list[32].weather[0].icon,
            icon5: response.list[39].weather[0].icon,
            temp0: response.list[0].main.temp + "°F",
            temp1: response.list[8].main.temp + "°F",
            temp2: response.list[16].main.temp + "°F",
            temp3: response.list[24].main.temp + "°F",
            temp4: response.list[32].main.temp + "°F",
            temp4: response.list[39].main.temp + "°F",
            humid0: response.list[0].main.humidity + "%",
            humid1: response.list[8].main.humidity + "%",
            humid2: response.list[16].main.humidity + "%",
            humid3: response.list[24].main.humidity + "%",
            humid4: response.list[32].main.humidity + "%",
            humid5: response.list[39].main.humidity + "%",
            wind0: response.list[0].wind.speed + "MPH",
            wind1: response.list[8].wind.speed + "MPH",
            wind2: response.list[16].wind.speed + "MPH",
            wind3: response.list[24].wind.speed + "MPH",
            wind4: response.list[32].wind.speed + "MPH",
            wind5: response.list[39].wind.speed + "MPH"  
          }
          // store search to local
          localStorage.setItem("City", cityData.city)
          // display current conditions.
          // display city
          var resultCity = document.getElementById("searchedCity")
          resultCity.textContent = cityData.city
          // display icon
          // !make it an actual icon
          var resultIcon = document.getElementById("icon0")
          resultIcon.textContent = cityData.icon0
          // current date
          var date0 = document.getElementById("searchedDate")
          date0.textContent = "(" + cityData.date0.slice(0, 10) + ")"
          // current temp
          var temp0 = document.getElementById("temp0")
          temp0.textContent = cityData.temp0
          // current wind
          var wind0 = document.getElementById("wind0")
          wind0.textContent = cityData.wind0
          // current humidity
          var humid0 = document.getElementById("humid0")
          humid0.textContent = cityData.humid0


          
        })
      .catch(error => (console.error("error fetching")))
      }
    )
    .catch(error => (console.error("error fetching")))  
})

