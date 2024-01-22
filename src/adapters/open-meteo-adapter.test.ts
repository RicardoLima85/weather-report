// Seu arquivo de teste
import { describe, test, expect } from "vitest";
import { OpenMeteoAdapter } from "./open-meteo-adapter";
import { Filter } from "../models/filter";

describe("OpenMeteoAdapter", () => {
  test("shoud call forecast on API", async () => {
    const mockValue = [
      {
        day: "2024-01-18T00:00:00.000Z",
        hour: "20",
        temperature2m: 30,
        relativeHumidity2m: "58%",
        windSpeed10m: "7km/h",
        surfacePressure: "1001hPa",
        apparentTemperature: 33,
        windDirection10m: 93,
        visibility: "24140m",
        isDay: 0,
        cloudCover: "0%",
      },
    ];
    const openMeteoAdapter = new OpenMeteoAdapter();
    const spy = vi
      .spyOn(openMeteoAdapter, "forecast")
      .mockResolvedValue(mockValue);
    const filter = new Filter({
      latitude: "1.00",
      longitude: "200",
    });

    const weatherForecast = await openMeteoAdapter.forecast(filter);

    expect(spy).toHaveBeenCalled();
    expect(mockValue).toEqual(weatherForecast);
  });
});
