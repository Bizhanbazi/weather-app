function displayWeather(data) {
  const weather = document.querySelector("#weather");

  weather.innerHTML = `
    <div class="weather-card">
      <h2>${data.address}</h2>
      <p>Temperature: ${data.temp}</p>
      <p>Condition: ${data.condition}</p>
      <p>Humidity: ${data.humidity}</p>
      <p>Wind: ${data.wind}</p>
    </div>
  `;
}

function setLoading(text) {
  const loading = document.querySelector("#loading");

  loading.textContent = text;
}

export { displayWeather, setLoading };