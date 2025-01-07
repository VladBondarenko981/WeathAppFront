// src/services/weatherService.ts

import {
  getCityWeather,
  getGeoWeather,
  getWeatherFiveDays,
  getWeatherFiveDaysCity,
} from "../api/weatherApi.ts";
import { WeatherData, WeatherDataFiveDays } from "../types/types.ts";

export const fetchWeatherByCityName = async (
  cityName: string
): Promise<{
  weather: WeatherData;
  weatherFiveDays: WeatherDataFiveDays;
}> => {
  const data = await getCityWeather(cityName);
  const fiveDayData = await getWeatherFiveDaysCity(cityName);

  const weather = {
    name: data.name,
    main: {
      temp: data.main.temp - 273.15,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
    },
    wind: {
      speed: data.wind.speed,
    },
    weather: {
      icon: data.weather[0].icon,
      main: data.weather[0].main,
      description: data.weather[0].description,
    },
  };

  const weatherFiveDays = {
    weather: fiveDayData.list.map((item: any) => ({
      icon: item.weather[0].icon,
      temp: item.main.temp - 273.15,
      wind: item.wind.speed,
      main: item.weather[0].main,
    })),
  };

  return { weather, weatherFiveDays };
};

export const fetchWeatherByGeo = async (
  lat: number,
  lon: number
): Promise<{
  weather: WeatherData;
  weatherFiveDays: WeatherDataFiveDays;
}> => {
  const geoData = await getGeoWeather({ lat, lon });
  const geoFiveDayData = await getWeatherFiveDays({ lat, lon });

  const weather = {
    name: geoData.name,
    main: {
      temp: geoData.main.temp - 273.15,
      pressure: geoData.main.pressure,
      humidity: geoData.main.humidity,
    },
    wind: {
      speed: geoData.wind.speed,
    },
    weather: {
      icon: geoData.weather[0].icon,
      main: geoData.weather[0].main,
      description: geoData.weather[0].description,
    },
  };

  const weatherFiveDays = {
    weather: geoFiveDayData.list.map((item: any) => ({
      icon: item.weather[0].icon,
      temp: item.main.temp - 273.15,
      wind: item.wind.speed,
      main: item.weather[0].main,
    })),
  };

  return { weather, weatherFiveDays };
};
