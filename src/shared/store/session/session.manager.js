/**
 * A class to interact with the browser's local storage and session
 */
class LocalStore {
  setItem(key, value, store = "localstorage") {
    if (store === "localstorage") {
      localStorage.setItem(key, value);
    } else if (store === "session") {
      sessionStorage.setItem(key, value);
    } else {
      throw new Error("Store not supported!");
    }
  }

  getItem(key, store = "localstorage") {
    if (store === "localstorage") {
      return localStorage.getItem(key);
    } else if (store === "session") {
      return sessionStorage.getItem(key);
    } else {
      throw new Error("Store not supported!");
    }
  }

  removeItem(key, store = "localstorage") {
    if (store === "localstorage") {
      localStorage.removeItem(key);
    } else if (store === "session") {
      sessionStorage.removeItem(key);
    } else {
      throw new Error("Store not supported!");
    }
  }

  clearStore(store = "localstorage") {
    if (store === "localstorage") {
      localStorage.clear();
    } else if (store === "session") {
      sessionStorage.clear();
    } else {
      throw new Error("Store not supported!");
    }
  }
}

export default new LocalStore();
