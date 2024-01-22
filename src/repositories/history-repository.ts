import { History } from "../types/model-types";
import { APIProps, RepositoryAPIProps } from "../types/repository-types";

export class HistoryRepository implements RepositoryAPIProps<History> {
  constructor(private readonly repository: APIProps<History>) {}

  async getAll(): Promise<History[]> {
    return this.repository.get();
  }

  async save(arg0: History): Promise<void> {
    this.repository.set(arg0);
  }

  async last(): Promise<History> {
    return this.repository.get().then(response => response[response?.length - 1])
  }
}
