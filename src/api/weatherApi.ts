import axios from "axios";

interface GeoCoordinates {
  lat: number;
  lon: number;
}

export const getGeoWeather = async ({ lat, lon }: GeoCoordinates) => {
  try {
    const apiKey = "17e3f5364cd8952b792ee19242b036b5";
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat,
          lon,
          appid: apiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

export const getWeatherFiveDays = async ({ lat, lon }: GeoCoordinates) => {
  try {
    const apiKey = "17e3f5364cd8952b792ee19242b036b5";
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          lat,
          lon,
          appid: apiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

export const getCityWeather = async (cityName: string) => {
  try {
    const apiKey = "17e3f5364cd8952b792ee19242b036b5";
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: cityName,
          appid: apiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

export const getWeatherFiveDaysCity = async (cityName: string) => {
  try {
    const apiKey = "17e3f5364cd8952b792ee19242b036b5";
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          q: cityName,
          appid: apiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

export const setFavoriteCity = async (cityName: string, userId: number) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/users/addFavoriteCity",
      {
        cityName,
        userId,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};
