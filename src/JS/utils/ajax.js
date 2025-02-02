const ajax = {
    // Perform a GET request
    async get(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`GET request failed: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('GET request failed:', error);
            throw new Error('GET request failed');
        }
    },

    // Perform a POST request
    async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`POST request failed: ${response.statusText}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('POST request failed:', error);
            throw new Error('POST request failed');
        }
    },

    // Perform a PUT request
    async put(url, data) {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`PUT request failed: ${response.statusText}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('PUT request failed:', error);
            throw new Error('PUT request failed');
        }
    },

    // Perform a DELETE request
    async delete(url) {
        try {
            const response = await fetch(url, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error(`DELETE request failed: ${response.statusText}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('DELETE request failed:', error);
            throw new Error('DELETE request failed');
        }
    },
};

export default ajax;