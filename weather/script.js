function getWeather() {
    let city = document.getElementById("city").value;
    let apiKey = '883b9636a6093982d76ff6cd4c73af2c'; 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherInfo").innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <h3>${data.main.temp}°C</h3>
                    <p>${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p>
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
                `;
                document.getElementById("error").innerText = "";
            } else {
                document.getElementById("weatherInfo").innerHTML = "";
                document.getElementById("error").innerText = "City not found. Try again!";
            }
        })
        .catch(error => {
            document.getElementById("error").innerText = "Error fetching data. Please try again.";
        });
}
