import { LocalStorageKeys } from '../../config/localStorage';
export declare class LocalStorageClient {
    get<T>(key: LocalStorageKeys, defaultVal: T): T;
    set<T extends LocalStorageKeys>(key: T, value: unknown): void;
    clear(key?: LocalStorageKeys): void;
}
