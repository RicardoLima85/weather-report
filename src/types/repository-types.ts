export type APIProps<T> = {
    get: () => Promise<T[]>
    set: (arg0: T) => Promise<void>
};

export type RepositoryAPIProps<T> = {
    getAll: () => Promise<T[]>
    save: (arg0: T) => Promise<void>
};
