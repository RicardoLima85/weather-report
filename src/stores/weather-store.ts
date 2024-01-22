import { create } from "zustand";
import { ErrorType, History } from "../types/model-types";
import { WeatherModel, WeatherParams } from "../types/weather-types";
import { Filter } from "../models/filter";
import { GetForecasts } from "../use-cases/get-forecast";
import { ValidationError } from "../errors/validation-error";
import { OpenMeteoAdapter } from "../adapters/open-meteo-adapter";
import { StoreProps } from "../types/store-types";
import { LocalStorageAdapter } from "../adapters/local-storage-adapter";
import { HistoryRepository } from "../repositories/history-repository";

export const useWeatherStore = create<StoreProps>((set, get) => ({
  history: {
    state: {
      history: [],
    },
    dispatch: {
      setHistory: (data: History[]) =>
        set((state) => ({
          ...state,
          history: {
            ...state.history,
            state: { ...state.history.state, history: data },
          },
        })),
    },
  },
  loading: {
    state: {
      loading: false,
    },
    dispatch: {
      setLoading: (isLoading: boolean) =>
        set((state) => ({
          ...state,
          loading: {
            ...state.loading,
            state: { ...state.loading.state, loading: isLoading },
          },
        })),
    },
  },
  error: {
    state: {
      error: "",
    },
    dispatch: {
      setError: (error: ErrorType) =>
        set((state) => ({
          ...state,
          error: {
            ...state.error,
            state: { ...state.error.state, error: error },
          },
        })),
    },
  },
  weather: {
    state: {
      data: [],
    },
    dispatch: {
      setData: (data: WeatherModel[]) =>
        set((state) => ({
          ...state,
          weather: {
            ...state.weather,
            state: { ...state.weather.state, data: data },
          },
        })),
    },
    action: {
      forecast: async (params: WeatherParams): Promise<void> => {
        const setError = get().error.dispatch.setError;
        const setLoading = get().loading.dispatch.setLoading;
        const setData = get().weather.dispatch.setData;
        setError("");
        setLoading(true);
        try {
          const filter = new Filter(params);
          const api = new OpenMeteoAdapter();
          const result = await new GetForecasts(api).execute(filter);
          setData(result);
          const historyAPI = new LocalStorageAdapter("history");
          const historyRepository = new HistoryRepository(historyAPI);
          historyRepository.save({
            date: new Date(),
            latitude: params?.latitude,
            longitude: params?.longitude,
          });
        } catch (error) {
          console.error(error);
          if (error instanceof ValidationError) setError("ValidationError");
          else setError("Error");
        } finally {
          setLoading(false);
        }
      },
      reload: async (): Promise<void> => {
        const forecast = get().weather.action.forecast;
        const historyAPI = new LocalStorageAdapter("history");
        const historyRepository = new HistoryRepository(historyAPI);
        const last = await historyRepository.last();
        forecast({
          latitude: last.latitude,
          longitude: last.longitude,
        });
      },
    },
  },
}));
