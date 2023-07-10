



const searchbtn = document.getElementById("btn");
const searchbox = document.getElementById("location");

const weather = document.getElementById("weather_temp");
const weathericon = document.getElementById("weather_icon");
const weatherdesc = document.getElementById("weather_desc");
const country = document.getElementById("country");
const city = document.getElementById("city");
const feels_likes = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");

const pm = document.getElementById("pm");
const so = document.getElementById("so");
const no = document.getElementById("no");
const o = document.getElementById("o");

var sunrises = document.getElementById("sunrise");
var sunsets = document.getElementById("sunset");

const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");
const day3 = document.getElementById("day3");
const day4 = document.getElementById("day4");
const day5 = document.getElementById("day5");

const day1_d = document.getElementById("day1_d");
const day2_d = document.getElementById("day2_d");
const day3_d = document.getElementById("day3_d");
const day4_d = document.getElementById("day4_d");
const day5_d = document.getElementById("day5_d");

const day1_icon = document.getElementById("day1_icon");
const day2_icon = document.getElementById("day2_icon");
const day3_icon = document.getElementById("day3_icon");
const day4_icon = document.getElementById("day4_icon");
const day5_icon = document.getElementById("day5_icon");

const hrs_1 = document.getElementById("hrs_1");
const hrs_2 = document.getElementById("hrs_2");
const hrs_3 = document.getElementById("hrs_3");
const hrs_4 = document.getElementById("hrs_4");
const hrs_5 = document.getElementById("hrs_5");
const hrs_6 = document.getElementById("hrs_6");
const hrs_7 = document.getElementById("hrs_7");
const hrs_8 = document.getElementById("hrs_8");
const hrs_9 = document.getElementById("hrs_9");
const hrs_10 = document.getElementById("hrs_10");
const hrs_11 = document.getElementById("hrs_11");
const hrs_12 = document.getElementById("hrs_12");

const hrs_1_t = document.getElementById("hrs_1_t");
const hrs_2_t = document.getElementById("hrs_2_t");
const hrs_3_t = document.getElementById("hrs_3_t");
const hrs_4_t = document.getElementById("hrs_4_t");
const hrs_5_t = document.getElementById("hrs_5_t");
const hrs_6_t = document.getElementById("hrs_6_t");
const hrs_7_t = document.getElementById("hrs_7_t");
const hrs_8_t = document.getElementById("hrs_8_t");
const hrs_9_t = document.getElementById("hrs_9_t");
const hrs_10_t = document.getElementById("hrs_10_t");
const hrs_11_t = document.getElementById("hrs_11_t");
const hrs_12_t = document.getElementById("hrs_12_t");

const hrs_1_icon = document.getElementById("hrs_1_icon");
const hrs_2_icon = document.getElementById("hrs_2_icon");
const hrs_3_icon = document.getElementById("hrs_3_icon");
const hrs_4_icon = document.getElementById("hrs_4_icon");
const hrs_5_icon = document.getElementById("hrs_5_icon");
const hrs_6_icon = document.getElementById("hrs_6_icon");
const hrs_7_icon = document.getElementById("hrs_7_icon");
const hrs_8_icon = document.getElementById("hrs_8_icon");
const hrs_9_icon = document.getElementById("hrs_9_icon");
const hrs_10_icon = document.getElementById("hrs_10_icon");
const hrs_11_icon = document.getElementById("hrs_11_icon");
const hrs_12_icon = document.getElementById("hrs_12_icon");




const map=document.getElementById("map");
const x=document.getElementById("currentlocation");

  function getLocation(){
    navigator.geolocation.getCurrentPosition(
        function (position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
          
            console.log("Latitude: " + latitude + ", Longitude: " + longitude);
            
            // You can use the latitude and longitude values for further processing or display on your web page.
           
    
          }
         
        )
  }

let loc;

function send() {
  loc = searchbox.value;
    const API = "6887b4d90e88fab29e06e4ac5be12b27";
    const api = "%09aDm7Nn34z0fQfGLAdm2cMprE3sNAsYur";



    const temp = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${loc}&appid=${API}`;
    const daily = `https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=${loc}&appid=${API}`;



    fetch(daily)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            

            const options = { month: 'long', day: 'numeric', weekday: 'long' };

            day1.textContent = data.list[4].main.temp + "°C";
            day2.textContent = data.list[12].main.temp + "°C";
            day3.textContent = data.list[20].main.temp + "°C";
            day4.textContent = data.list[28].main.temp + "°C";
            day5.textContent = data.list[36].main.temp + "°C";

            day1_d.textContent = new Date(data.list[4].dt * 1000).toLocaleDateString(undefined, options);
            day2_d.textContent = new Date(data.list[12].dt * 1000).toLocaleDateString(undefined, options);
            day3_d.textContent = new Date(data.list[20].dt * 1000).toLocaleDateString(undefined, options);
            day4_d.textContent = new Date(data.list[28].dt * 1000).toLocaleDateString(undefined, options);
            day5_d.textContent = new Date(data.list[36].dt * 1000).toLocaleDateString(undefined, options);


            // Day1

            if (data.list[4].weather[0].main == "Clouds") {
                day1_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
            }
            else if (data.list[4].weather[0].main == "Clear") {
                day1_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
            }
            else if (data.list[4].weather[0].main == "Rain") {
                day1_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
            }
            else if (data.list[4].weather[0].main == "Drizzle") {
                day1_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
            }
            else if (data.list[4].weather[0].main == "Mist") {
                day1_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
            }

            // Day2

            if (data.list[12].weather[0].main == "Clouds") {
                day2_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
            }
            else if (data.list[12].weather[0].main == "Clear") {
                day2_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
            }
            else if (data.list[12].weather[0].main == "Rain") {
                day2_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
            }
            else if (data.list[12].weather[0].main == "Drizzle") {
                day2_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
            }
            else if (data.list[12].weather[0].main == "Mist") {
                day2_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
            }


            // Day 3


            if (data.list[20].weather[0].main == "Clouds") {
                day3_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
            }
            else if (data.list[20].weather[0].main == "Clear") {
                day3_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
            }
            else if (data.list[20].weather[0].main == "Rain") {
                day3_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
            }
            else if (data.list[20].weather[0].main == "Drizzle") {
                day3_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
            }
            else if (data.list[20].weather[0].main == "Mist") {
                day3_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
            }


            // Day 4


            if (data.list[28].weather[0].main == "Clouds") {
                day4_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
            }
            else if (data.list[28].weather[0].main == "Clear") {
                day4_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
            }
            else if (data.list[28].weather[0].main == "Rain") {
                day4_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
            }
            else if (data.list[28].weather[0].main == "Drizzle") {
                day4_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
            }
            else if (data.list[28].weather[0].main == "Mist") {
                day4_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
            }


            // Day 5



            if (data.list[36].weather[0].main == "Clouds") {
                day5_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
            }
            else if (data.list[36].weather[0].main == "Clear") {
                day5_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
            }
            else if (data.list[36].weather[0].main == "Rain") {
                day5_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
            }
            else if (data.list[36].weather[0].main == "Drizzle") {
                day5_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
            }
            else if (data.list[36].weather[0].main == "Mist") {
                day5_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
            }

            var key = data.city.id;

            const hourly = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=${api}&details=true&metric=true`;

            fetch(hourly)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    hrs_1_t.textContent = data[0].Temperature.Value + "°C";
                    hrs_2_t.textContent = data[1].Temperature.Value + "°C";
                    hrs_3_t.textContent = data[2].Temperature.Value + "°C";
                    hrs_4_t.textContent = data[3].Temperature.Value + "°C";
                    hrs_5_t.textContent = data[4].Temperature.Value + "°C";
                    hrs_6_t.textContent = data[5].Temperature.Value + "°C";
                    hrs_7_t.textContent = data[6].Temperature.Value + "°C";
                    hrs_8_t.textContent = data[7].Temperature.Value + "°C";
                    hrs_9_t.textContent = data[8].Temperature.Value + "°C";
                    hrs_10_t.textContent = data[9].Temperature.Value + "°C";
                    hrs_11_t.textContent = data[10].Temperature.Value + "°C";
                    hrs_12_t.textContent = data[11].Temperature.Value + "°C";
    
    
    
    
                    hrs_1.textContent = new Date(data[0].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    hrs_2.textContent = new Date(data[1].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    hrs_3.textContent = new Date(data[2].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    hrs_4.textContent = new Date(data[3].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    hrs_5.textContent = new Date(data[4].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    hrs_6.textContent = new Date(data[5].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    hrs_7.textContent = new Date(data[6].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    hrs_8.textContent = new Date(data[7].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    hrs_9.textContent = new Date(data[8].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    hrs_10.textContent = new Date(data[9].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    hrs_11.textContent = new Date(data[10].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    hrs_12.textContent = new Date(data[11].EpochDateTime * 1000).toLocaleTimeString("en-US");
    
    
    
                    // hrs_1_icon.textContent=new Date(data[0].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    // hrs_2_icon.textContent=new Date(data[0].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    // hrs_3_icon.textContent=new Date(data[0].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    // hrs_4_icon.textContent=new Date(data[0].EpochDateTime * 1000).toLocaleTimeString("en-US");
                    
                    if (data[0].IconPhrase == "Clouds"||"Partly cloudy") {
                        hrs_1_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[0].IconPhrase == "Clear") {
                        hrs_1_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[0].IconPhrase == "Rain") {
                        hrs_1_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[0].IconPhrase == "Drizzle") {
                        hrs_1_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[0].IconPhrase == "Mist") {
                        hrs_1_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    }



                    if (data[1].IconPhrase == "Clouds"||"Partly cloudy") {
                        hrs_2_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[1].IconPhrase == "Clear") {
                        hrs_2_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[1].IconPhrase == "Rain") {
                        hrs_2_icon.src ="https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[1].IconPhrase == "Drizzle") {
                        hrs_2_icon.src ="https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[1].IconPhrase == "Mist") {
                        hrs_2_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    }



                    if (data[2].IconPhrase == "Clouds"||"Partly cloudy") {
                        hrs_3_icon.src= "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[2].IconPhrase == "Clear") {
                        hrs_3_icon.src= "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[2].IconPhrase == "Rain") {
                        hrs_3_icon.src= "https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[2].IconPhrase == "Drizzle") {
                        hrs_3_icon.src= "https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[2].IconPhrase == "Mist") {
                        hrs_3_icon.src= "https://openweathermap.org/img/wn/50d@2x.png";
                    }


                    if (data[3].IconPhrase == "Clouds"||"Partly cloudy") {
                        hrs_4_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[3].IconPhrase == "Clear") {
                        hrs_4_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[3].IconPhrase == "Rain") {
                        hrs_4_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[3].IconPhrase == "Drizzle") {
                        hrs_4_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[3].IconPhrase == "Mist") {
                        hrs_4_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    }




                    if (data[4].IconPhrase =="Clouds"||"Partly cloudy") {
                        hrs_5_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[4].IconPhrase == "Clear") {
                        hrs_5_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[4].IconPhrase == "Rain") {
                        hrs_5_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[4].IconPhrase == "Drizzle") {
                        hrs_5_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[4].IconPhrase == "Mist") {
                        hrs_5_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    }



                    if (data[5].IconPhrase == "Clouds"||"Partly cloudy") {
                        hrs_6_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[5].IconPhrase == "Clear") {
                        hrs_6_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[5].IconPhrase == "Rain") {
                        hrs_6_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[5].IconPhrase == "Drizzle") {
                        hrs_6_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[5].IconPhrase == "Mist") {
                        hrs_6_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    }



                    if (data[6].IconPhrase =="Clouds"||"Partly cloudy") {
                        hrs_7_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[6].IconPhrase == "Clear") {
                        hrs_7_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[6].IconPhrase == "Rain") {
                        hrs_7_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[6].IconPhrase == "Drizzle") {
                        hrs_7_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[6].IconPhrase == "Mist") {
                        hrs_7_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    }




                    if (data[7].IconPhrase == "Clouds"||"Partly cloudy") {
                        hrs_8_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[7].IconPhrase == "Clear") {
                        hrs_8_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[7].IconPhrase == "Rain") {
                        hrs_8_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[7].IconPhrase == "Drizzle") {
                        hrs_8_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[7].IconPhrase == "Mist") {
                        hrs_8_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    }




                    if (data[8].IconPhrase =="Clouds"||"Partly cloudy") {
                        hrs_9_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[8].IconPhrase == "Clear") {
                        hrs_9_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[8].IconPhrase == "Rain") {
                        hrs_9_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[8].IconPhrase == "Drizzle") {
                        hrs_9_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[8].IconPhrase == "Mist") {
                        hrs_9_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    }




                    if (data[9].IconPhrase == "Clouds"||"Partly cloudy") {
                        hrs_10_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[9].IconPhrase == "Clear") {
                        hrs_10_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[9].IconPhrase == "Rain") {
                        hrs_10_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[9].IconPhrase == "Drizzle") {
                        hrs_10_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[9].IconPhrase == "Mist") {
                        hrs_10_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    }




                    if (data[10].IconPhrase =="Clouds"||"Partly cloudy") {
                        hrs_11_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[10].IconPhrase == "Clear") {
                        hrs_11_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[10].IconPhrase == "Rain") {
                        hrs_11_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[10].IconPhrase == "Drizzle") {
                        hrs_11_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[10].IconPhrase == "Mist") {
                        hrs_11_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    }



                    if (data[11].IconPhrase == "Clouds"||"Partly cloudy") {
                        hrs_12_icon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    }
                    else if (data[11].IconPhrase == "Clear") {
                        hrs_12_icon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    }
                    else if (data[11].IconPhrase == "Rain") {
                        hrs_12_icon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    }
                    else if (data[11].IconPhrase == "Drizzle") {
                        hrs_12_icon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                    }
                    else if (data[11].IconPhrase == "Mist") {
                        hrs_12_icon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    }
    
    
    
    
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        })
        .catch(error => {
            console.error('Error:', error);
        });





       


    fetch(temp)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Timestamp in seconds
            var sunrise = data.sys.sunrise;
            var sunset = data.sys.sunset;
            var sunrise = new Date(sunrise * 1000);
            var sunset = new Date(sunset * 1000);
            console.log(data);

            weather.textContent = data.main.temp.toFixed(1) + "°C";

            if (data.weather[0].main == "Clouds") {
                weathericon.src = "https://openweathermap.org/img/wn/04d@2x.png";
            }
            else if (data.weather[0].main == "Clear") {
                weathericon.src = "https://openweathermap.org/img/wn/01d@2x.png";
            }
            else if (data.weather[0].main == "Rain") {
                weathericon.src = "https://openweathermap.org/img/wn/09d@2x.png";
            }
            else if (data.weather[0].main == "Drizzle") {
                weathericon.src = "https://openweathermap.org/img/wn/10d@2x.png";
            }
            else if (data.weather[0].main == "Mist") {
                weathericon.src = "https://openweathermap.org/img/wn/50d@2x.png";
            }
            weatherdesc.textContent = data.weather[0].description;
            country.textContent = data.sys.country;
            city.textContent = data.name + " ,";
            feels_likes.textContent = data.main.feels_like + "%";
            humidity.textContent = data.main.humidity + "%";
            pressure.textContent = data.main.pressure;
            visibility.textContent = data.visibility / 1000 + " Km";
            sunrises.textContent = sunrise.toLocaleTimeString("en-US");
            sunsets.textContent = sunset.toLocaleTimeString("en-US");







 //                  for Air Pollution

            let lat = data.coord.lat;
            let lon = data.coord.lon;
            
            

            const air = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API}`;

            fetch(air)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    pm.textContent = data.list[0].components.pm10;
                    so.textContent = data.list[0].components.so2;
                    no.textContent = data.list[0].components.no;
                    o.textContent = data.list[0].components.o3;
    
                })
                .catch(error => {
                    console.error('Error:', error);
                });



                // const map =``;

                // fetch(map)
                // .then(response=>{
                //     return response.json();
                // })
                // .then(data=>{
                //     console.log(data);
                    
                // })
                

        })
        .catch(error => {
            console.error('Error:', error);
        });



       
}

