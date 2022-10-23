
export default class LocalStorageService {
    
  public static get(key: string): any {
    const data: string | null = window.localStorage.getItem(key);

    if (!data) {
      return null;
    }

    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  public static set(key: string, value: any): void {
    const objValue = JSON.stringify(value);

    window.localStorage.setItem(key, objValue);
  }

  public static remove(key: string): void {
    window.localStorage.removeItem(key);
  }
}
