import { DailyWeather, LocationWeather, USDailyWeather, USLocationWeather } from '../models/LocationWeather.ts';

export function convertUSWeatherData(usWeather: USLocationWeather): LocationWeather {
  const { city, country, weatherDetails } = usWeather;

  return {
    city,
    country,
    weatherDetails: convertWeatherDetails(weatherDetails.Weather)
  };
}

function convertWeatherDetails(weatherDetails: USDailyWeather[]): DailyWeather[] {
  return weatherDetails.map((dailyWeather: USDailyWeather) => ({
    date: convertDateToEUFormat(dailyWeather.date),
    type: dailyWeather.type,
    averageTemperature: dailyWeather.average_temperature,
  }));
}

function convertDateToEUFormat(date: string): string {
  const [month, day, year] = date.split('-');
  return `${day}-${month}-${year}`;
}
