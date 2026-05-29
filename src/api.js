const API_KEY = "9BV82K37CEX6TRRC5DKAKTTVJ";

async function getWeather(city, unit) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=${API_KEY}&contentType=json`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();

  return {
    address: data.resolvedAddress,
    temp: data.currentConditions.temp,
    condition: data.currentConditions.conditions,
    humidity: data.currentConditions.humidity,
    wind: data.currentConditions.windspeed,
  };
}

export default getWeather;