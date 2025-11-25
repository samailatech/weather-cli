const axios = require("axios");

async function getWeather() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=12&longitude=8.5&current_weather=true";
  const res = await axios.get(url);

  console.log("Temperature:", res.data.current_weather.temperature, "°C");
  console.log("Wind Speed:", res.data.current_weather.windspeed);
}

getWeather();

