import { useShallow } from "zustand/react/shallow";
import { useWeatherStore } from "../stores/weather-store";
import { useEffect } from "react";
import { History } from "../types/model-types";
import { LocalStorageAdapter } from "../adapters/local-storage-adapter";
import { HistoryRepository } from "../repositories/history-repository";

type Props = {
  history: History[];
};
export const useHistory = (): Props => {
  const [history, setHistory, setLoading] = useWeatherStore(
    useShallow((state) => [
      state.history.state.history,
      state.history.dispatch.setHistory,
      state.loading.dispatch.setLoading,
    ])
  );

  useEffect(() => {
    setLoading(true);
    const historyAPI = new LocalStorageAdapter("history");
    const historyRepository = new HistoryRepository(historyAPI);
    historyRepository.getAll().then((response) => {
      setLoading(false);
      setHistory(response);
    });
  }, []);
  
  return {
    history,
  };
};
