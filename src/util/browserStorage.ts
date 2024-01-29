import { IBrowserStorage } from "./dataModel";


export class SRLocalStorage implements IBrowserStorage {
    set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    get(key: string): string | null {
        return localStorage.getItem(key);
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }

    clear(): void {
        localStorage.clear();
    }

}

export class SRSessionStorage implements IBrowserStorage {
    set(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }

    get(key: string): string | null {
        return sessionStorage.getItem(key);
    }

    remove(key: string): void {
        sessionStorage.removeItem(key);
    }

    clear(): void {
        sessionStorage.clear();
    }
}

export class srBrowserStorage {
    private iBrowserStorage: IBrowserStorage;

    constructor(bs: IBrowserStorage) {
        this.iBrowserStorage = bs;
    }

    set(key: string, value: string): void {
        this.iBrowserStorage.set(key, value);
    }
    get(key: string): string | null {
        return this.iBrowserStorage.get(key);
    }

    remove(key: string): void {
        this.iBrowserStorage.remove(key);
    }

    clear(): void {
        this.iBrowserStorage.clear();
    }
}