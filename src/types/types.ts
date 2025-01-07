export interface WeatherData {
  name: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    main: string;
    description: string;
  };
}

export interface WeatherInfo {
  temp: number;
  icon: string;
  wind: number;
  main: string;
}

export interface WeatherDataFiveDays {
  weather: WeatherInfo[];
}

export interface UserData {
  email: string;
  id: number;
  exp: number;
  iat: number;
  password: string;
  username: string;
}
