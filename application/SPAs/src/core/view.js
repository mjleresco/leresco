import TemplateEngine from './TemplateEngine.js';

class View {
  constructor(options) {
    this.template = options.template;
    this.data = options.data;
    this.components = options.components || {};
    this.views = options.views || {};
    this.widgets = options.widgets || {};
    this.isMounted = false;
    this.templateEngine = new TemplateEngine();
    
  }

  render(params) {
    const data = { 
      ...this.data, 
      ...params, 
      components: this.components, 
      widgets: this.widgets 
    };
    
    const template = this.templateEngine.compile(this.template);
    return template(data);
  }

  mount() {
    this.isMounted = true;
    Object.keys(this.components).forEach((component) => {
        this.components[component].mounted();
    });
    
    Object.keys(this.widgets).forEach((widget) => {
        this.widgets[widget].mounted();
    });
    
    if(this.onMount) {
        this.onMount();
    }
  }

  unmount() {
    this.isMounted = false;
  }
}

export default View;
/*
const view = new View({
  template: `
    <h1>{{title}}</h1>
    <foreach items="items" as="item">
      <div>{{item}}</div>
    </foreach>
    <c:myComponent />
    <w:myWidget />
  `,
  data: {
    title: 'My View',
    items: ['Item 1', 'Item 2', 'Item 3'],
  },
  components: {
    myComponent: {
      render: () => '<div>My Component</div>',
    },
  },
  widgets: {
    myWidget: {
      render: () => '<div>My Widget</div>',
    },
  },
});

view.mount();
*/