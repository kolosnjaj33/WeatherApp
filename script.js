const apiKey = "15ed697a5c8a6bbd5d1c39639416d150";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather img");

    async function checkWeather(city){
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if(data.weather[0].main == "Clouds"){
            document.body.style.backgroundImage = "url('res/clouds.jpg')";
            weatherIcon.src = "res/icons/clouds.png";
        }
        else if(data.weather[0].main =="Clear"){
            document.body.style.backgroundImage = "url('res/clear.jpg')";
            weatherIcon.src = "res/icons/clear.png";
        }
        else if(data.weather[0].main =="Rain"){
            document.body.style.backgroundImage = "url('res/drizle.jpg')";
            weatherIcon.src = "res/icons/rain.png";
        }
        else if(data.weather[0].main =="Drizzle"){
            document.body.style.backgroundImage = "url('res/drizzle.jpg')";
            weatherIcon.src = "res/icons/drizzle.png";
        }
        else if(data.weather[0].main =="Mist"){
            document.body.style.backgroundImage = "url('res/mist.webp')";
            weatherIcon.src = "res/icons/mist.png";
        }
        else if(data.weather[0].main =="Snow"){
            document.body.style.backgroundImage = "url('res/snow.jpg')";
            weatherIcon.src = "res/icons/snow.png";

        }
    }

    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);

    })


    
