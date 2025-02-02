class Widget {

    constructor(options) {
        
        this.id = options.id;
        this.template = options.template;
        this.data = options.data || {};
        this.elements = []; // Array to store child elements
        
    }
    
    render() {
        
        if (typeof this.template === 'function') {
            if (this.template.length === 2) {
                let template;
                this.template(this.data, (result) => {
                    template = result;
                });
                return template;
            } else {
                return this.template(this.data);
            }
        } else {
            return this.template;
        }
        
    }
    
    mounted() {
       if(this.onMount) {
            this.onMount();
        }
    }
    
    update(data) {
        this.data = { ...this.data, ...data };
    }
    
    addElement(element) {
        this.elements.push(element);
    }
    
    removeElement(element) {
        const index = this.elements.indexOf(element);
        if (index !== -1) {
            this.elements.splice(index, 1);
        }
    }
    
    getElements() {
        return this.elements;
    }
}

export default Widget;
/*
class Component extends Widget {
  constructor(options) {
    super(options);
    this.children = []; // Array to store child components
  }

  render() {
    const html = super.render();
    return html + this.renderChildren();
  }

  renderChildren() {
    return this.children.map((child) => child.render()).join('');
  }

  addChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getChildren() {
    return this.children;
  }
}
```

With these updated classes, you can now add and remove elements from widgets and components using the `addElement`, `removeElement`, `addChild`, and `removeChild` methods.

Here's an example of how you can use these methods:

```
const buttonWidget = new ButtonWidget({
  text: 'Click me!',
});

const labelWidget = new LabelWidget({
  text: 'Hello, world!',
});

buttonWidget.addElement(labelWidget);

const headerComponent = new HeaderComponent({
  items: [
    { href: '#', text: 'Home' },
    { href: '#', text: 'About' },
  ],
});

const logoWidget = new ImageWidget({
  src: 'logo.png',
  alt: 'Logo',
});

headerComponent.addChild(logoWidget);

*/