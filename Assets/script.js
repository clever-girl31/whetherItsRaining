var searchButton = document.getElementById('search')
searchButton.addEventListener('click', function() {
  var input = document.getElementById('city')
  var userCity = input.value
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
            date0: "(" + response.list[0].dt_txt.slice(0, 10) + ")",
            date1: "(" + response.list[8].dt_txt.slice(0, 10) + ")",
            date2: "(" + response.list[16].dt_txt.slice(0, 10) + ")",
            date3: "(" + response.list[24].dt_txt.slice(0, 10) + ")",
            date4: "(" + response.list[32].dt_txt.slice(0, 10) + ")",
            date5: "(" + response.list[39].dt_txt.slice(0, 10) + ")",
            icon0: response.list[0].weather[0].icon,
            icon1: response.list[8].weather[0].icon,
            icon2: response.list[16].weather[0].icon,
            icon3: response.list[24].weather[0].icon,
            icon4: response.list[32].weather[0].icon,
            icon5: response.list[39].weather[0].icon,
            temp0: "Temperature: " + response.list[0].main.temp + "°F",
            temp1: "Temperature: " + response.list[8].main.temp + "°F",
            temp2: "Temperature: " + response.list[16].main.temp + "°F",
            temp3: "Temperature: " + response.list[24].main.temp + "°F",
            temp4: "Temperature: " + response.list[32].main.temp + "°F",
            temp5: "Temperature: " + response.list[39].main.temp + "°F",
            humid0: "Humidity: " + response.list[0].main.humidity + "%",
            humid1: "Humidity: " + response.list[8].main.humidity + "%",
            humid2: "Humidity: " + response.list[16].main.humidity + "%",
            humid3: "Humidity: " + response.list[24].main.humidity + "%",
            humid4: "Humidity: " + response.list[32].main.humidity + "%",
            humid5: "Humidity: " + response.list[39].main.humidity + "%",
            wind0: "Wind: " + response.list[0].wind.speed + "MPH",
            wind1: "Wind: " + response.list[8].wind.speed + "MPH",
            wind2: "Wind: " + response.list[16].wind.speed + "MPH",
            wind3: "Wind: " + response.list[24].wind.speed + "MPH",
            wind4: "Wind: " + response.list[32].wind.speed + "MPH",
            wind5: "Wind: " + response.list[39].wind.speed + "MPH"  
          }
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
          date0.textContent = cityData.date0
          // current temp
          var temp0 = document.getElementById("temp0")
          temp0.textContent = cityData.temp0
          // current wind
          var wind0 = document.getElementById("wind0")
          wind0.textContent = cityData.wind0
          // current humidity
          var humid0 = document.getElementById("humid0")
          humid0.textContent = cityData.humid0

          // five day forecast
          var date1 = document.getElementById("date1")
          date1.textContent = cityData.date1
          var icon1 = document.getElementById("icon1")
          icon1.textContent = cityData.icon1
          var temp1 = document.getElementById("temp1")
          temp1.textContent = cityData.temp1
          var wind1 = document.getElementById("wind1")
          wind1.textContent = cityData.wind1
          var humid1 = document.getElementById("humid1")
          humid1.textContent = cityData.humid1

          var date2 = document.getElementById("date2")
          date2.textContent = cityData.date2
          var icon2 = document.getElementById("icon2")
          icon2.textContent = cityData.icon2
          var temp2 = document.getElementById("temp2")
          temp2.textContent = cityData.temp2
          var wind2 = document.getElementById("wind2")
          wind2.textContent = cityData.wind2
          var humid2 = document.getElementById("humid2")
          humid2.textContent = cityData.humid2

          var date3 = document.getElementById("date3")
          date3.textContent = cityData.date3
          var icon3 = document.getElementById("icon3")
          icon3.textContent = cityData.icon3
          var temp3 = document.getElementById("temp3")
          temp3.textContent = cityData.temp3
          var wind3 = document.getElementById("wind3")
          wind3.textContent = cityData.wind3
          var humid3 = document.getElementById("humid3")
          humid3.textContent = cityData.humid3

          var date4 = document.getElementById("date4")
          date4.textContent = cityData.date4
          var icon4 = document.getElementById("icon4")
          icon4.textContent = cityData.icon4
          var temp4 = document.getElementById("temp4")
          temp4.textContent = cityData.temp4
          var wind4 = document.getElementById("wind4")
          wind4.textContent = cityData.wind4
          var humid4 = document.getElementById("humid4")
          humid4.textContent = cityData.humid4

          var date5 = document.getElementById("date5")
          date5.textContent = cityData.date5
          var icon5 = document.getElementById("icon5")
          icon5.textContent = cityData.icon5
          var temp5 = document.getElementById("temp5")
          temp5.textContent = cityData.temp5
          var wind5 = document.getElementById("wind5")
          wind5.textContent = cityData.wind5
          var humid5 = document.getElementById("humid5")
          humid5.textContent = cityData.humid5

          // store searched cities in local storage
          var cityHist = localStorage.getItem("Cities")
          console.log(cityHist)
          var lastSearch = cityData.city
          localStorage.setItem("Cities", lastSearch)
          console.log(lastSearch)
          if (cityHist) {
            localStorage.setItem("Cities", lastSearch + ", " + cityHist)
          }

          
        })
      .catch(error => (console.error("error fetching")))
      }
    )
    .catch(error => (console.error("error fetching")))  
})

// makes saved cities appear in recently searched section
var savedCities = localStorage.getItem("Cities")
console.log(savedCities)
var searchCollectionList = savedCities.split(", ")
console.log(searchCollectionList[0])
var listContainer = document.querySelector(".searchCollection")
console.log(listContainer)

// ! figureout how to make labeltext = search input. buttonlabel[i] equals second character?
for (i = 0; i < searchCollectionList.length; i++) {
  city[i] = document.createElement("button")
  city[i].textContent = searchCollectionList[i]
  listContainer.appendChild(city[i])
  city[i].addEventListener("click", function () {
    var buttonLabel = this.textContent
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + buttonLabel + '&limit=1&appid=a5c9bbc780a6d5f3b81b7c2576a5552c')
      .then(response => response.json())
      .then(response => {
        var lat = response[0].lat
        var lon = response[0].lon
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=a5c9bbc780a6d5f3b81b7c2576a5552c&units=imperial')
          .then(response => response.json())
          .then(response => {
            console.log(buttonLabel[0])
            var cityData = {
              city: response.city.name,
              date0: "(" + response.list[0].dt_txt.slice(0, 10) + ")",
              date1: "(" + response.list[8].dt_txt.slice(0, 10) + ")",
              date2: "(" + response.list[16].dt_txt.slice(0, 10) + ")",
              date3: "(" + response.list[24].dt_txt.slice(0, 10) + ")",
              date4: "(" + response.list[32].dt_txt.slice(0, 10) + ")",
              date5: "(" + response.list[39].dt_txt.slice(0, 10) + ")",
              icon0: response.list[0].weather[0].icon,
              icon1: response.list[8].weather[0].icon,
              icon2: response.list[16].weather[0].icon,
              icon3: response.list[24].weather[0].icon,
              icon4: response.list[32].weather[0].icon,
              icon5: response.list[39].weather[0].icon,
              temp0: "Temperature: " + response.list[0].main.temp + "°F",
              temp1: "Temperature: " + response.list[8].main.temp + "°F",
              temp2: "Temperature: " + response.list[16].main.temp + "°F",
              temp3: "Temperature: " + response.list[24].main.temp + "°F",
              temp4: "Temperature: " + response.list[32].main.temp + "°F",
              temp5: "Temperature: " + response.list[39].main.temp + "°F",
              humid0: "Humidity: " + response.list[0].main.humidity + "%",
              humid1: "Humidity: " + response.list[8].main.humidity + "%",
              humid2: "Humidity: " + response.list[16].main.humidity + "%",
              humid3: "Humidity: " + response.list[24].main.humidity + "%",
              humid4: "Humidity: " + response.list[32].main.humidity + "%",
              humid5: "Humidity: " + response.list[39].main.humidity + "%",
              wind0: "Wind: " + response.list[0].wind.speed + "MPH",
              wind1: "Wind: " + response.list[8].wind.speed + "MPH",
              wind2: "Wind: " + response.list[16].wind.speed + "MPH",
              wind3: "Wind: " + response.list[24].wind.speed + "MPH",
              wind4: "Wind: " + response.list[32].wind.speed + "MPH",
              wind5: "Wind: " + response.list[39].wind.speed + "MPH"
            }
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
            date0.textContent = cityData.date0
            // current temp
            var temp0 = document.getElementById("temp0")
            temp0.textContent = cityData.temp0
            // current wind
            var wind0 = document.getElementById("wind0")
            wind0.textContent = cityData.wind0
            // current humidity
            var humid0 = document.getElementById("humid0")
            humid0.textContent = cityData.humid0

            // five day forecast
            var date1 = document.getElementById("date1")
            date1.textContent = cityData.date1
            var icon1 = document.getElementById("icon1")
            icon1.textContent = cityData.icon1
            var temp1 = document.getElementById("temp1")
            temp1.textContent = cityData.temp1
            var wind1 = document.getElementById("wind1")
            wind1.textContent = cityData.wind1
            var humid1 = document.getElementById("humid1")
            humid1.textContent = cityData.humid1

            var date2 = document.getElementById("date2")
            date2.textContent = cityData.date2
            var icon2 = document.getElementById("icon2")
            icon2.textContent = cityData.icon2
            var temp2 = document.getElementById("temp2")
            temp2.textContent = cityData.temp2
            var wind2 = document.getElementById("wind2")
            wind2.textContent = cityData.wind2
            var humid2 = document.getElementById("humid2")
            humid2.textContent = cityData.humid2

            var date3 = document.getElementById("date3")
            date3.textContent = cityData.date3
            var icon3 = document.getElementById("icon3")
            icon3.textContent = cityData.icon3
            var temp3 = document.getElementById("temp3")
            temp3.textContent = cityData.temp3
            var wind3 = document.getElementById("wind3")
            wind3.textContent = cityData.wind3
            var humid3 = document.getElementById("humid3")
            humid3.textContent = cityData.humid3

            var date4 = document.getElementById("date4")
            date4.textContent = cityData.date4
            var icon4 = document.getElementById("icon4")
            icon4.textContent = cityData.icon4
            var temp4 = document.getElementById("temp4")
            temp4.textContent = cityData.temp4
            var wind4 = document.getElementById("wind4")
            wind4.textContent = cityData.wind4
            var humid4 = document.getElementById("humid4")
            humid4.textContent = cityData.humid4

            var date5 = document.getElementById("date5")
            date5.textContent = cityData.date5
            var icon5 = document.getElementById("icon5")
            icon5.textContent = cityData.icon5
            var temp5 = document.getElementById("temp5")
            temp5.textContent = cityData.temp5
            var wind5 = document.getElementById("wind5")
            wind5.textContent = cityData.wind5
            var humid5 = document.getElementById("humid5")
            humid5.textContent = cityData.humid5
          })
          .catch(error => (console.error("error fetching")))
      }
      )
      .catch(error => (console.error("error fetching")))
  })
}