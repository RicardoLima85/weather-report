// Seu arquivo de teste
import { describe, test, expect } from "vitest";
import { LocalStorageAdapter } from "./local-storage-adapter";
import { HistoryRepository } from "../repositories/history-repository";

describe("LocalStorageAdapter", () => {
  test("shoud call history", async () => {
    const mockValue = [
      {
        date: new Date("2024-12-21T00:00:00"),
        latitude: "100.00",
        longitude: "20.00",
      },
    ];
    const historyAPI = new LocalStorageAdapter("history");
    const historyRepository = new HistoryRepository(historyAPI);
    const spy = vi
      .spyOn(historyRepository, "getAll")
      .mockResolvedValue(mockValue);
    const history = await historyRepository.getAll();
    
    expect(spy).toHaveBeenCalled();
    expect(mockValue).toEqual(history);
  });
});
