const storage = {
    // Store data in localStorage
    saveToLocalStorage(key, value) {
        try {
            const stringValue = JSON.stringify(value);
            localStorage.setItem(key, stringValue);
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    },
    
    // Retrieve data from localStorage
    getFromLocalStorage(key) {
        try {
            const stringValue = localStorage.getItem(key);
            if (stringValue) {
                return JSON.parse(stringValue);
            }
            return null;
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
            const stringValue = JSON.stringify(value);
            sessionStorage.setItem(key, stringValue);
        } catch (e) {
            console.error('Error saving to sessionStorage:', e);
        }
    },
    
    // Retrieve data from sessionStorage
    getFromSessionStorage(key) {
        try {
            const stringValue = sessionStorage.getItem(key);
            if (stringValue) {
                return JSON.parse(stringValue);
            }
            return null;
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
    },
    
    // Encrypt data using a simple XOR cipher
    encrypt(data, key) {
        const encryptedData = [];
        for (let i = 0; i < data.length; i++) {
            encryptedData.push(data[i] ^ key[i % key.length]);
        }
        return encryptedData;
    },
    
    // Decrypt data using a simple XOR cipher
    decrypt(encryptedData, key) {
        const decryptedData = [];
        for (let i = 0; i < encryptedData.length; i++) {
            decryptedData.push(encryptedData[i] ^ key[i % key.length]);
        }
        return decryptedData;
    },
    
    // Secure storage
    secureSave(key, value, options = {}) {
        const { encryptionKey } = options;
        
        const encryptedValue = storage.encrypt(JSON.stringify(value), encryptionKey);
        storage.saveToLocalStorage(key, encryptedValue);
    },
    
    secureGet(key, options = {}) {
        const { encryptionKey } = options;
        
        const encryptedValue = storage.getFromLocalStorage(key);
        if (encryptedValue) {
            return JSON.parse(storage.decrypt(encryptedValue, encryptionKey));
        }
        return null;
    },
};

export default storage;


    