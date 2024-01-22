import { ErrorType, History } from "./model-types";
import { WeatherModel, WeatherParams } from "./weather-types";

export type ErrorProps = {
  state: {
    error: ErrorType;
  };
  dispatch: {
    setError: (arg0: ErrorType) => void;
  };
};

export type LoadingProps = {
  state: {
    loading: boolean;
  };
  dispatch: {
    setLoading: (arg0: boolean) => void;
  };
};

export type HistoryProps = {
  state: {
    history: History[];
  };
  dispatch: {
    setHistory: (data: History[]) => void;
  };
};

export type WeatherProps = {
  state: {
    data: WeatherModel[];
  };
  dispatch: {
    setData: (data: WeatherModel[]) => void;
  };
  action: {
    forecast: (params: WeatherParams) => Promise<void>;
    reload: () => Promise<void>;
  };
};

export type StoreProps = {
  history: HistoryProps;
  loading: LoadingProps;
  error: ErrorProps;
  weather: WeatherProps;
};
