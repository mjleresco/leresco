import Loader from './../widgets/Loader.js';

class Router {
  constructor(app_id, NavigationLoader = null) {
    this.app_id = app_id;
    this.routes = {};
    this.middlewares = [];
    this.currentUrl = '';
    this.history = [];
    this.currentIndex = -1;
    this.loader = NavigationLoader;
    //this.navigationLoader();
    this.cache = {};
  }

  add(path, view, callback = () => {}, options = {}) {
    const parameterRegex = /:([a-zA-Z0-9_]+)/g;
    const parameters = [];
    let match;

    while ((match = parameterRegex.exec(path))) {
      parameters.push(match[1]);
    }

    this.routes[path] = {
      view,
      callback,
      options,
      parameters,
      guards: options.guards || [],
      //lazy: options.lazy || false,
      //cache: options.cache || false,
      redirect: options.redirect || null,
      meta: options.meta || {},
    };
  }

  async navigate(url, params = {}) {
    try {
      const route = this.routes[url];

      if (route) {
        if (route.redirect) {
          return this.navigate(route.redirect, params);
        }

        for (const guard of route.guards) {
          if (!(await guard(url, params))) {
            return;
          }
        }
/*
        if (route.lazy) {
          route.view = await route.view();
        }

        if (route.cache) {
          const cachedResponse = this.cache[url];

          if (cachedResponse) {
            return cachedResponse;
          }
        }
*/
        const queryString = url.split('?')[1];
        const queryParams = {};

        if (queryString) {
          const queryPairs = queryString.split('&');

          queryPairs.forEach((pair) => {
            const [key, value] = pair.split('=');
            queryParams[key] = value;
          });
        }

        const viewParams = { ...params, ...queryParams };

        this.currentUrl = url;
        this.history.push({ url, params });
        this.currentIndex++;

        window.history.pushState(null, null, url);

        this.renderView(route.view, viewParams);

        route.callback(viewParams);

        if (route.cache) {
          this.cache[url] = route.view;
        }

        const scrollPosition = this.scrollBehavior(url, this.history[this.currentIndex - 1], null);

        window.scrollTo(scrollPosition.x, scrollPosition.y);
      } else {
        throw new Error(`Route not found: ${url}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

    async backward() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            const url = this.history[this.currentIndex].url;
            const params = this.history[this.currentIndex].params;
      
            this.loadView(url, params, this.currentIndex);
        }
    }
  
    async forward() {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            const url = this.history[this.currentIndex].url;
            const params = this.history[this.currentIndex].params;
      
            this.loadView(url, params, this.currentIndex);
        }
    }
    
    loadView(url, params, currentIndex) {
        const route = this.routes[url];
    
        if (route) {
            this.renderView(route.view, params);
            route.callback(params);
        } else {
            throw new Error(`Route not found: ${url}`);
        }
    
        this.currentIndex = currentIndex;
    }
    
  renderView(view, params) {
    const container = document.getElementById(this.app_id);

    if (container) {
      container.innerHTML = view.render(params);
      view.mount();
    }
  }

  matchRoute(url, path) {
    const parameterRegex = /:([a-zA-Z0-9_]+)/g;
    let match;

    while ((match = parameterRegex.exec(path))) {
      const parameter = match[1];
      path = path.replace(match[0], `(${parameter})`);
    }

    const regex = new RegExp(`^${path}$`);
    return regex.test(url);
  }

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { x: 0, y: document.querySelector(to.hash).offsetTop };
    } else {
      return { x: 0, y: 0 };
    }
  }

    init(init_page = '/') {
        this.navigate(init_page);
        
        window.addEventListener('popstate', (event) => {
            const currentIndex = window.history.lenght - 1;
            const url = window.location.pathname;
            const params = {};
            
            // Parse query string parameters
            const queryString = window.location.search;
            if (queryString) {
                const queryPairs = queryString.substring(1).split('&');
                
                queryPairs.forEach((pair) => {
                  const [key, value] = pair.split('=');
                  params[key] = value;
                });
            }
            
            this.loadView(url, params, currentIndex);
        });
        
    }
    
    getRouter() {
        return this;
    }
}

export default Router;