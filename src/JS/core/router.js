class Router {
    constructor() {
        this.routes = [];
        this.middlewares = [];
        this.currentUrl = '';
    }

    addRoute(path, view, callback, options = {}) {
        this.routes.push({ path, view, callback, options });
    }

    use(middleware) {
        this.middlewares.push(middleware);
    }

    async navigate(url) {
        this.currentUrl = url;

        // Execute middlewares
        for (let middleware of this.middlewares) {
            const shouldProceed = await middleware(url);
            if (!shouldProceed) return; // Stop if middleware blocks navigation
        }

        const route = this.routes.find(route => this.matchRoute(url, route.path));

        if (route) {
            window.history.pushState(null, null, url);
            if (route.options.before) {
                await route.options.before(); // Run before route callback
            }
            route.callback();
            this.renderView(route.view);
            if (route.options.after) {
                route.options.after(); // Run after route callback
            }
        }
    }

    matchRoute(url, path) {
        // Simple route matching (can be expanded with regex support for params)
        return url === path;
    }

    renderView(view) {
        const container = document.getElementById('app');
        if (container) {
            container.innerHTML = view;
        }
    }

    init() {
        window.addEventListener('popstate', () => {
            this.navigate(window.location.pathname);
        });

        // Initial routing
        this.navigate(window.location.pathname);
    }
}

export default Router;