import { NumberValid } from "../domain/number";
import { WeatherParams } from "../types/weather-types";

export class Filter {
  latitude: NumberValid;
  longitude: NumberValid;
  constructor({ latitude, longitude }: WeatherParams) {
    this.latitude = new NumberValid(latitude);
    this.longitude = new NumberValid(longitude);
  }
}
