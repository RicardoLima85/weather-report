import { Filter } from "../models/filter";
import { UseCase } from "../types/model-types";
import { WeatherAPI, WeatherModel } from "../types/weather-types";

export class GetForecasts implements UseCase<Filter, WeatherModel[]> {
  constructor(private readonly api: WeatherAPI) {}
  async execute(props: Filter): Promise<WeatherModel[]> {
    return this.api.forecast(props);
  }
}
