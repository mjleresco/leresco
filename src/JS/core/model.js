class Model {
    constructor(data = {}) {
        this.data = data;
        this.listeners = [];
    }

    // Subscribe to data changes
    onChange(callback) {
        this.listeners.push(callback);
    }

    // Trigger listeners when data changes
    triggerChange() {
        this.listeners.forEach(callback => callback(this.data));
    }

    // Fetch data from API
    async fetch(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.setData(data);
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Set data and notify listeners
    setData(newData) {
        this.data = { ...this.data, ...newData };
        this.triggerChange();
    }

    // Get a property from the model
    get(key) {
        return this.data[key];
    }

    // Set a property in the model
    set(key, value) {
        this.data[key] = value;
        this.triggerChange();
    }

    // Basic validation for models
    validate(rules) {
        for (let field in rules) {
            const rule = rules[field];
            if (rule.required && !this.data[field]) {
                return `${field} is required`;
            }
            if (rule.minLength && this.data[field].length < rule.minLength) {
                return `${field} must be at least ${rule.minLength} characters long`;
            }
        }
        return null;
    }
}

export default Model;