import React from "react";
import classes from "./MainWeather.module.css";
import { WeatherData } from "../../types/types";

interface MainWeatherProps {
  weather: WeatherData | null;
}

const MainWeather: React.FC<MainWeatherProps> = ({ weather }) => {
  if (!weather) {
    <h1>Loading</h1>;
  } else {
    return (
      <div className={classes.mainWeather}>
        <div className={classes.mainWeatherFirstPart}>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather.icon}.png`}
          />
          <div className={classes.firtsPartText}>
            <h1>{(weather?.main.temp).toFixed(0)} °C</h1>
            <h2>Pressure: {weather.main.pressure} hPa</h2>
            <h3>Humidity: {weather.main.humidity}%</h3>
            <h4>Wind: {weather.wind.speed} km/h</h4>
          </div>
        </div>
        <div className={classes.mainWeatherSecondPart}>
          <h1>{weather.weather.main}</h1>
          <h2>{weather.weather.description}</h2>
        </div>
      </div>
    );
  }
};

export default MainWeather;
