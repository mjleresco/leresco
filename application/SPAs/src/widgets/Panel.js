import Widget from './widget.js';

class Panel extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-panel">
          <header>
            <h2>${data.title}</h2>
          </header>
          <div class="jsap-widget-panel-content">${data.content}</div>
        </div>
      `,
      styles: `
        .jsap-widget-panel {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .jsap-widget-panel header {
          background-color: #337ab7;
          color: #fff;
          padding: 10px;
          border-radius: 5px 5px 0 0;
        }
        .jsap-widget-panel-content {
          padding: 20px;
        }
      `,
    });
  }
}

export default Panel;

/*

import Panel from './panel.js';

const myPanel = new Panel({
  id: 'my-panel',
  data: {
    title: 'Panel Title',
    content: 'This is the panel content.',
  },
});

*/