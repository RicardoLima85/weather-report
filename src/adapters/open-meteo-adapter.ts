import { fetchWeatherApi } from "openmeteo";
import { Hourly, WeatherAPI, WeatherModel } from "../types/weather-types";
import { DateUtils } from "../utils/date-utils";
import { Filter } from "../models/filter";

export class OpenMeteoAdapter implements WeatherAPI {
  async forecast({ latitude, longitude }: Filter): Promise<WeatherModel[]> {
    const API_URL = "https://api.open-meteo.com/v1/forecast";
    const hourlyParam: Hourly[] = [
      "temperature_2m",
      "relative_humidity_2m",
      "wind_speed_10m",
      "surface_pressure",
      "apparent_temperature",
      "wind_direction_10m",
      "visibility",
      "is_day",
      "cloud_cover",
    ];
    return fetchWeatherApi(API_URL, {
      latitude: latitude?.number,
      longitude: longitude?.number,
      hourly: hourlyParam,
    }).then((responses) => {
      const response = responses[0];
      const range = (start: number, stop: number, step: number) =>
        Array.from(
          { length: (stop - start) / step },
          (_, i) => start + i * step
        );
      const utcOffsetSeconds = response.utcOffsetSeconds();
      const hourly = response.hourly()!;
      const weatherData = {
        hourly: {
          time: range(
            Number(hourly.time()),
            Number(hourly.timeEnd()),
            hourly.interval()
          ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
          temperature2m: hourly.variables(0)!.valuesArray()!,
          relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
          windSpeed10m: hourly.variables(2)!.valuesArray()!,
          surfacePressure: hourly.variables(3)!.valuesArray()!,
          apparentTemperature: hourly.variables(4)!.valuesArray()!,
          windDirection10m: hourly.variables(5)!.valuesArray()!,
          visibility: hourly.variables(6)!.valuesArray()!,
          isDay: hourly.variables(7)!.valuesArray()!,
          cloudCover: hourly.variables(8)!.valuesArray()!,
        },
      };
      return weatherData?.hourly?.time?.map((item, index) => ({
        day: item,
        hour: DateUtils.getHour(item),
        temperature2m: Number(
          weatherData?.hourly?.temperature2m[index]?.toFixed(0)
        ),
        relativeHumidity2m: `${weatherData?.hourly?.relativeHumidity2m[
          index
        ]?.toFixed(0)}%`,
        windSpeed10m: `${weatherData?.hourly?.windSpeed10m[index]?.toFixed(
          0
        )}km/h`,
        surfacePressure: `${weatherData?.hourly?.surfacePressure[
          index
        ]?.toFixed(0)}hPa`,
        apparentTemperature: Number(weatherData?.hourly?.apparentTemperature[
          index
        ]?.toFixed(0)),
        windDirection10m:
          Number(weatherData?.hourly?.windDirection10m[index]?.toFixed(0)) || 0,
        visibility: `${weatherData?.hourly?.visibility[index]}m`,
        isDay: weatherData?.hourly?.isDay[index],
        cloudCover: `${weatherData?.hourly?.cloudCover[index]?.toFixed(0)}%`,
      }));
    });
  }
}
