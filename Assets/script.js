// create search button
var searchButton = document.getElementById('search')
// assign what happens when search is clicked
searchButton.addEventListener('click', function() {
  var input = document.getElementById('city')
  var userCity = input.value
  // convert city into long and lat
  fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + userCity + '&limit=1&appid=a5c9bbc780a6d5f3b81b7c2576a5552c')
    .then(response => response.json())
    .then(response => {
      var lat = response[0].lat
      var lon = response[0].lon
      // feed long and lat into actual weather api
      fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=a5c9bbc780a6d5f3b81b7c2576a5552c&units=imperial')
        .then(response => response.json())
        .then(response => {
          // create variables for respsonses
          var cityData = {
            city: response.city.name,
            date0: "(" + response.list[0].dt_txt.slice(0, 10) + ")",
            date1: "(" + response.list[8].dt_txt.slice(0, 10) + ")",
            date2: "(" + response.list[16].dt_txt.slice(0, 10) + ")",
            date3: "(" + response.list[24].dt_txt.slice(0, 10) + ")",
            date4: "(" + response.list[32].dt_txt.slice(0, 10) + ")",
            date5: "(" + response.list[39].dt_txt.slice(0, 10) + ")",
            icon0: "<img src='https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png' width='100' height='100'>",
            icon1: "<img src='https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png' width='50' height='50'>",
            icon2: "<img src='https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png' width='50' height='50'>",
            icon3: "<img src='https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png' width='50' height='50'>",
            icon4: "<img src='https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + ".png' width='50' height='50'>",
            icon5: "<img src='https://openweathermap.org/img/wn/" + response.list[39].weather[0].icon + ".png' width='50' height='50'>",
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
          var resultIcon = document.getElementById("icon0")
          resultIcon.innerHTML = cityData.icon0
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

          // make sub header appear
          var fiveDayHeader = document.getElementById("fiveDayHeader")
          fiveDayHeader.textContent = "Five Day Forecast:"
          // five day forecast
          var date1 = document.getElementById("date1")
          date1.textContent = cityData.date1
          var icon1 = document.getElementById("icon1")
          icon1.innerHTML = cityData.icon1
          var temp1 = document.getElementById("temp1")
          temp1.textContent = cityData.temp1
          var wind1 = document.getElementById("wind1")
          wind1.textContent = cityData.wind1
          var humid1 = document.getElementById("humid1")
          humid1.textContent = cityData.humid1

          var date2 = document.getElementById("date2")
          date2.textContent = cityData.date2
          var icon2 = document.getElementById("icon2")
          icon2.innerHTML = cityData.icon2
          var temp2 = document.getElementById("temp2")
          temp2.textContent = cityData.temp2
          var wind2 = document.getElementById("wind2")
          wind2.textContent = cityData.wind2
          var humid2 = document.getElementById("humid2")
          humid2.textContent = cityData.humid2

          var date3 = document.getElementById("date3")
          date3.textContent = cityData.date3
          var icon3 = document.getElementById("icon3")
          icon3.innerHTML = cityData.icon3
          var temp3 = document.getElementById("temp3")
          temp3.textContent = cityData.temp3
          var wind3 = document.getElementById("wind3")
          wind3.textContent = cityData.wind3
          var humid3 = document.getElementById("humid3")
          humid3.textContent = cityData.humid3

          var date4 = document.getElementById("date4")
          date4.textContent = cityData.date4
          var icon4 = document.getElementById("icon4")
          icon4.innerHTML = cityData.icon4
          var temp4 = document.getElementById("temp4")
          temp4.textContent = cityData.temp4
          var wind4 = document.getElementById("wind4")
          wind4.textContent = cityData.wind4
          var humid4 = document.getElementById("humid4")
          humid4.textContent = cityData.humid4

          var date5 = document.getElementById("date5")
          date5.textContent = cityData.date5
          var icon5 = document.getElementById("icon5")
          icon5.innerHTML = cityData.icon5
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

          // items from local storage only appear on refresh. below code creates button for city that was searched so it appears without needing to refresh page. when refreshed, this button disappears and is replaced with button created from local storage data
          pushLast = document.createElement('button')
          pushLast.textContent = lastSearch
          var pushLastCont = document.getElementById('pushLastCont')
          pushLastCont.appendChild(pushLast)
          // create event listener so button is usable. same basic function as above but does not save to local storage.
          pushLast.addEventListener('click', function () {
            var input = document.getElementById('city')
            var userCity = input.value
            fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + userCity + '&limit=1&appid=a5c9bbc780a6d5f3b81b7c2576a5552c')
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
                      icon0: "<img src='https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png' width='100' height='100'>",
                      icon1: "<img src='https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png' width='50' height='50'>",
                      icon2: "<img src='https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png' width='50' height='50'>",
                      icon3: "<img src='https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png' width='50' height='50'>",
                      icon4: "<img src='https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + ".png' width='50' height='50'>",
                      icon5: "<img src='https://openweathermap.org/img/wn/" + response.list[39].weather[0].icon + ".png' width='50' height='50'>",
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
                    var resultIcon = document.getElementById("icon0")
                    resultIcon.innerHTML = cityData.icon0
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
                    
                    // make sub header appear
                    var fiveDayHeader = document.getElementById("fiveDayHeader")
                    fiveDayHeader.textContent = "Five Day Forecast:"
                    // five day forecast
                    var date1 = document.getElementById("date1")
                    date1.textContent = cityData.date1
                    var icon1 = document.getElementById("icon1")
                    icon1.innerHTML = cityData.icon1
                    var temp1 = document.getElementById("temp1")
                    temp1.textContent = cityData.temp1
                    var wind1 = document.getElementById("wind1")
                    wind1.textContent = cityData.wind1
                    var humid1 = document.getElementById("humid1")
                    humid1.textContent = cityData.humid1

                    var date2 = document.getElementById("date2")
                    date2.textContent = cityData.date2
                    var icon2 = document.getElementById("icon2")
                    icon2.innerHTML = cityData.icon2
                    var temp2 = document.getElementById("temp2")
                    temp2.textContent = cityData.temp2
                    var wind2 = document.getElementById("wind2")
                    wind2.textContent = cityData.wind2
                    var humid2 = document.getElementById("humid2")
                    humid2.textContent = cityData.humid2

                    var date3 = document.getElementById("date3")
                    date3.textContent = cityData.date3
                    var icon3 = document.getElementById("icon3")
                    icon3.innerHTML = cityData.icon3
                    var temp3 = document.getElementById("temp3")
                    temp3.textContent = cityData.temp3
                    var wind3 = document.getElementById("wind3")
                    wind3.textContent = cityData.wind3
                    var humid3 = document.getElementById("humid3")
                    humid3.textContent = cityData.humid3

                    var date4 = document.getElementById("date4")
                    date4.textContent = cityData.date4
                    var icon4 = document.getElementById("icon4")
                    icon4.innerHTML = cityData.icon4
                    var temp4 = document.getElementById("temp4")
                    temp4.textContent = cityData.temp4
                    var wind4 = document.getElementById("wind4")
                    wind4.textContent = cityData.wind4
                    var humid4 = document.getElementById("humid4")
                    humid4.textContent = cityData.humid4

                    var date5 = document.getElementById("date5")
                    date5.textContent = cityData.date5
                    var icon5 = document.getElementById("icon5")
                    icon5.innerHTML = cityData.icon5
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
          
        })
      .catch(error => (console.error("error fetching")))
      }
    )
    .catch(error => (console.error("error fetching")))  
})

// turns list of cities (string format) in localstorage into a variable
var savedCities = localStorage.getItem("Cities")
// splits city list string into an array
var searchCollectionList = savedCities.split(", ")
// creates variable for parent container
var listContainer = document.querySelector(".searchCollection")

// creates buttons for each stored city with the same click listener.
// loops until there are as many buttons as list items
for (i = 0; i < searchCollectionList.length; i++) {
  city[i] = document.createElement("button")
  city[i].textContent = searchCollectionList[i]
  listContainer.appendChild(city[i])
  city[i].addEventListener("click", function () {
    // same basic function that has been called before to display weather data one page
    var buttonLabel = this.textContent
    fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + buttonLabel + '&limit=1&appid=a5c9bbc780a6d5f3b81b7c2576a5552c')
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
              icon0: "<img src='https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png' width='100' height='100'>",
              icon1: "<img src='https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png' width='50' height='50'>",
              icon2: "<img src='https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png' width='50' height='50'>",
              icon3: "<img src='https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png' width='50' height='50'>",
              icon4: "<img src='https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + ".png' width='50' height='50'>",
              icon5: "<img src='https://openweathermap.org/img/wn/" + response.list[39].weather[0].icon + ".png' width='50' height='50'>",
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
            var resultIcon = document.getElementById("icon0")
            resultIcon.innerHTML = cityData.icon0
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

            // make sub header appear
            var fiveDayHeader = document.getElementById("fiveDayHeader")
            fiveDayHeader.textContent = "Five Day Forecast:"

            // five day forecast
            var date1 = document.getElementById("date1")
            date1.textContent = cityData.date1
            var icon1 = document.getElementById("icon1")
            icon1.innerHTML = cityData.icon1
            var temp1 = document.getElementById("temp1")
            temp1.textContent = cityData.temp1
            var wind1 = document.getElementById("wind1")
            wind1.textContent = cityData.wind1
            var humid1 = document.getElementById("humid1")
            humid1.textContent = cityData.humid1

            var date2 = document.getElementById("date2")
            date2.textContent = cityData.date2
            var icon2 = document.getElementById("icon2")
            icon2.innerHTML = cityData.icon2
            var temp2 = document.getElementById("temp2")
            temp2.textContent = cityData.temp2
            var wind2 = document.getElementById("wind2")
            wind2.textContent = cityData.wind2
            var humid2 = document.getElementById("humid2")
            humid2.textContent = cityData.humid2

            var date3 = document.getElementById("date3")
            date3.textContent = cityData.date3
            var icon3 = document.getElementById("icon3")
            icon3.innerHTML = cityData.icon3
            var temp3 = document.getElementById("temp3")
            temp3.textContent = cityData.temp3
            var wind3 = document.getElementById("wind3")
            wind3.textContent = cityData.wind3
            var humid3 = document.getElementById("humid3")
            humid3.textContent = cityData.humid3

            var date4 = document.getElementById("date4")
            date4.textContent = cityData.date4
            var icon4 = document.getElementById("icon4")
            icon4.innerHTML = cityData.icon4
            var temp4 = document.getElementById("temp4")
            temp4.textContent = cityData.temp4
            var wind4 = document.getElementById("wind4")
            wind4.textContent = cityData.wind4
            var humid4 = document.getElementById("humid4")
            humid4.textContent = cityData.humid4

            var date5 = document.getElementById("date5")
            date5.textContent = cityData.date5
            var icon5 = document.getElementById("icon5")
            icon5.innerHTML = cityData.icon5
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