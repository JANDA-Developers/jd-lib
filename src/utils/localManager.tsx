export class LocalManager<T extends string> {
    saveLocal(key: T, value: string | number | Object): void {
        let _value = value;

        if (typeof value === "number") {
            _value = value.toString();
        }

        if (typeof value === "object") {
            try {
                _value = JSON.stringify(value);
            } catch (e) {
                localStorage.removeItem(key)
                console.error("LocalManager::saveLocal:stringFyFailed");
                console.error(e);
            }
        }

        if (typeof _value === "string") localStorage.setItem(key, _value);
    }

    getLocalObj<O>(key: T, or: O): O {
        const value = localStorage.getItem(key) || "";
        let result = or;

        try {
            result = JSON.parse(value);
        } catch (e) {
            localStorage.removeItem(key)
            console.error("LocalManager::getLocalOj:parseFailed");
            console.error(e);
        }

        return result;
    }

    getLocal(key: T, or: string): string {
        const item = localStorage.getItem(key) || "";
        return item || or;
    }

    getLocalNum(key: T, or: number): number {
        const item = localStorage.getItem(key) || "";
        return parseInt(item) || or;
    }
}

