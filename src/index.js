import "./styles.css";
import getWeather from "./api";
import { displayWeather, setLoading } from "./dom";

const form = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city-input");
const unitBtn = document.querySelector("#unit-btn");

let currentUnit = "metric";
let currentCity = "London";

async function loadWeather(city) {
  try {
    setLoading("Loading...");

    const data = await getWeather(city, currentUnit);

    displayWeather(data);

    setLoading("");

    changeBackground(data.condition);
  } catch (error) {
    setLoading(error.message);
  }
}

function changeBackground(condition) {
  const body = document.body;

  if (condition.toLowerCase().includes("rain")) {
    body.style.background = "#334155";
  } else if (condition.toLowerCase().includes("cloud")) {
    body.style.background = "#475569";
  } else {
    body.style.background = "#0f172a";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  currentCity = cityInput.value;

  loadWeather(currentCity);
});

unitBtn.addEventListener("click", () => {
  if (currentUnit === "metric") {
    currentUnit = "us";
  } else {
    currentUnit = "metric";
  }

  loadWeather(currentCity);
});

loadWeather(currentCity);