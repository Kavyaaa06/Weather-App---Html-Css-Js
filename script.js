const apiKey = '5ee3db521b4b5e4a6192af9dc316ba83';

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (city === "") {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      const { name, main, weather } = data;
      resultDiv.innerHTML = `
        <h3>Weather in ${name}</h3>
        <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
        <p>🌡️ Temperature: ${main.temp}°C</p>
        <p>💧 Humidity: ${main.humidity}%</p>
      `;
    })
    .catch(() => {
      resultDiv.innerHTML = "City not found. Please try again.";
    });
}
