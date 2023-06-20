function getWeatherData(event) {
    event.preventDefault();

    let city = document.getElementById("city").value;   
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60bc9534d5573169aba87879fccf1a37`;

    fetch(url)
        .then(res => res.json())            
        .then((data) => {
            const temp = (data.main.temp -273.15).toFixed(2);
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const altitude = data.coord.alt;
            const latitude = data.coord.lat;
            const longitude = data.coord.lon;

            // document.querySelector(".result").textContent = `Weather in ${city} is ${temp} °C`;
            document.querySelector(".result").style.whiteSpace = "pre-line";           
            document.querySelector(".result").textContent = `Weather in ${city}: 
            Temperature: ${temp}°C,
            Description: ${description},
            Humidity: ${humidity}%,
            Altitude: ${altitude},
            Latitude: ${latitude},
            Longitude: ${longitude} `;

})

        .catch(() => {
            document.querySelector(".result").innerHTML = "Failed to fetch weather information.";
        });
}