import { weatherMockData } from "../mocks/weater-mock-data";
import { WeatherAPI, WeatherModel } from "../types/weather-types";

export class LocalMeteoAdapter implements WeatherAPI {
  async forecast(): Promise<WeatherModel[]> {
    return weatherMockData as WeatherModel[];
  }
}
