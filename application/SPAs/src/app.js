import Router from './core/router.js';

class App {
  constructor(id, routes) {
    this.id = id;
    this.data = window.data;
    this.routes = routes;
    this.router = new Router('app');
    this.views = {}; // Initialize views as an object
    
    // Load views asynchronously
    this.loadViews();
  }

  async loadViews() {
    
    const viewsModule = await import(`./../${window.appname}/views/index.js`);
    this.views = viewsModule.default;
    
  }

  init(init_page = '/') {
    // Wait for views to be loaded before initializing router
    this.loadViews().then(() => {
      // Add routes to the router
      this.routes.forEach((route) => {
        const ViewComponent = this.views[route.view];
        this.router.add(route.path, ViewComponent);
      });
      this.router.init(init_page);
    });
  }

  getRouter() {
    return this.router;
  }
}

export default App;
