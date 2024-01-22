import { History } from "../types/model-types";
import { APIProps } from "../types/repository-types";

export class LocalStorageAdapter implements APIProps<History> {
  constructor(private readonly storageName: string) {}
  async get(): Promise<History[]> {
    const data = localStorage?.getItem(this.storageName) || "[]";
    return JSON.parse(data);
  }

  async set(arg0: History): Promise<void> {
    const data = await this.get();
    data.push(arg0);
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }
}
