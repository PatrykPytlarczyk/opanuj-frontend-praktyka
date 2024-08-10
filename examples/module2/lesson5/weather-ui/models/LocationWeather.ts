export enum WeatherType {
  Sunny = 'sunny',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
  Snowy = 'snowy',
}

export interface LocationWeather {
  city: string;
  country: string;
  weatherDetails: DailyWeather[];
}
export interface DailyWeather extends DailyWeatherBase {
  averageTemperature: number;
}

export interface USLocationWeather {
  city: string;
  country: 'US';
  weatherDetails: {
    Weather: USDailyWeather[];
  };
}
export interface USDailyWeather extends DailyWeatherBase {
  average_temperature: number;
}

interface DailyWeatherBase {
  date: string;
  type: WeatherType;
}
