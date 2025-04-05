import { MMKV } from "react-native-mmkv";

// Create the storage instance
export const storage = new MMKV({
  id: "app-storage",
  encryptionKey: "unistyles-demo-app",
});

// Helper methods
export const StorageService = {
  get: <T>(key: string): T | null => {
    const value = storage.getString(key);
    if (!value) return null;
    try {
      return JSON.parse(value) as T;
    } catch (error) {
      return null;
    }
  },

  set: <T>(key: string, value: T): boolean => {
    try {
      storage.set(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  },

  delete: (key: string): void => {
    storage.delete(key);
  },

  clearAll: (): void => {
    storage.clearAll();
  },
};
