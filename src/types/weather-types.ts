import { Filter } from "../models/filter";

export type Hourly =
  | "temperature_2m"
  | "relative_humidity_2m"
  | "wind_speed_10m"
  | "surface_pressure"
  | "apparent_temperature"
  | "wind_direction_10m"
  | "visibility"
  | "is_day"
  | "cloud_cover";

export type AnyNumber = {
  [param: string]: number[];
};

export type WeatherParams = {
  latitude: string;
  longitude: string;
};

export type WeaterMount = {
  hourly: {
    time: string[];
    temperature2m: AnyNumber;
    relativeHumidity2m: AnyNumber;
    windSpeed10m: AnyNumber;
    surfacePressure: AnyNumber;
    apparentTemperature: AnyNumber;
    windDirection10m: AnyNumber;
    visibility: AnyNumber;
    isDay: AnyNumber;
  };
};

export type WeatherModel = {
  day: string | Date;
  hour: string;
  temperature2m: number;
  relativeHumidity2m: string;
  windSpeed10m: string;
  surfacePressure: string;
  apparentTemperature: number;
  windDirection10m: number;
  visibility: string;
  isDay: number;
  cloudCover: string;
};

export type WeatherAPI = {
  forecast: (params: Filter) => Promise<WeatherModel[]>;
};

export type NowInfoProps = {
  title: string;
  image: string;
  value: string | React.ReactNode;
};

export type DaysProps = {
  [data: string]: DaysInnerProps;
};

export type DaysInnerProps = {
  dayOfWeek: string;
  quantity: number;
  total: number;
};