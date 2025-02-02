const ajax = {
  cache: {},
  cacheSizeLimit: 100,
  cacheExpirationTime: 30000, // 30 seconds

  async get(url, options = {}) {
    if (ajax.cache[url]) {
      const currentTime = new Date().getTime();
      if (currentTime - ajax.cache[url].timestamp < ajax.cacheExpirationTime) {
        return Promise.resolve(ajax.cache[url].data);
      } else {
        delete ajax.cache[url];
      }
    }

    const controller = new AbortController();
    const signal = controller.signal;

    return fetch(url, { method: 'GET', signal, ...options })
      .then(response => {
        if (!response.ok) {
          throw new Error(`GET request failed: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        ajax.cache[url] = { data, timestamp: new Date().getTime() };
        if (Object.keys(ajax.cache).length > ajax.cacheSizeLimit) {
          // Remove the oldest cached response
          const oldestKey = Object.keys(ajax.cache).sort((a, b) => ajax.cache[a].timestamp - ajax.cache[b].timestamp)[0];
          delete ajax.cache[oldestKey];
        }
        return data;
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          throw new Error('Request timed out');
        }
        throw new Error(`GET request failed: ${error.message}`);
      })
      .finally(() => {
        controller.abort();
      });
  },

  post(url, data, options = {}) {
    const controller = new AbortController();
    const signal = controller.signal;

    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...options.headers },
      body: JSON.stringify(data),
      signal,
      ...options,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`POST request failed: ${response.statusText}`);
        }
        return response.json();
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          throw new Error('Request timed out');
        }
        throw new Error(`POST request failed: ${error.message}`);
      })
      .finally(() => {
        controller.abort();
      });
  },

  put(url, data, options = {}) {
    const controller = new AbortController();
    const signal = controller.signal;

    return fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...options.headers },
      body: JSON.stringify(data),
      signal,
      ...options,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`PUT request failed: ${response.statusText}`);
        }
        return response.json();
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          throw new Error('Request timed out');
        }
        throw new Error(`PUT request failed: ${error.message}`);
      })
      .finally(() => {
        controller.abort();
      });
  },

  delete(url, options = {}) {
    const controller = new AbortController();
    const signal = controller.signal;

    return fetch(url, { method: 'DELETE', signal, ...options })
      .then(response => {
        if (!response.ok) {
          throw new Error(`DELETE request failed: ${response.statusText}`);
        }
        return response.json();
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          throw new Error('Request timed out');
        }
        throw new Error(`DELETE request failed: ${error.message}`);
      })
      .finally(() => {
        controller.abort();
      });
  },
    // Websocket support
    async websocket(url, options = {}) {
        const { onMessage, onError, onClose } = options;
        const websocket = new WebSocket(url);
    
        websocket.onmessage = (event) => onMessage(event.data);
        websocket.onerror = (event) => onError(event);
        websocket.onclose = (event) => onClose(event);
    
        return websocket;
    },
    
    // Request caching
    cache: {},
    
    // Request retries
    retryCount: 3,
};

export default ajax;