const storage = {
    // Store data in localStorage
    saveToLocalStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    },

    // Retrieve data from localStorage
    getFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error getting from localStorage:', e);
            return null;
        }
    },

    // Remove data from localStorage
    removeFromLocalStorage(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Error removing from localStorage:', e);
        }
    },

    // Store data in sessionStorage
    saveToSessionStorage(key, value) {
        try {
            sessionStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to sessionStorage:', e);
        }
    },

    // Retrieve data from sessionStorage
    getFromSessionStorage(key) {
        try {
            const data = sessionStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error getting from sessionStorage:', e);
            return null;
        }
    },

    // Remove data from sessionStorage
    removeFromSessionStorage(key) {
        try {
            sessionStorage.removeItem(key);
        } catch (e) {
            console.error('Error removing from sessionStorage:', e);
        }
    }
};

export default storage;