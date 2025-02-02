import Widget from './widget.js';

class Tabs extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-tabs">
          <ul class="jsap-widget-tabs-nav">
            ${data.tabs.map((tab, index) => `
              <li>
                <a href="#" class="${index === 0 ? 'active' : ''}">${tab.title}</a>
              </li>
            `).join('')}
          </ul>
          <div class="jsap-widget-tabs-content">
            ${data.tabs.map((tab, index) => `
              <div class="${index === 0 ? 'active' : ''}">${tab.content}</div>
            `).join('')}
          </div>
        </div>
      `,
      styles: `
        .jsap-widget-tabs {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .jsap-widget-tabs-nav {
          list-style: none;
          margin: 0;
          padding: 0;
          border-bottom: 1px solid #ccc;
        }
        .jsap-widget-tabs-nav li {
          display: inline-block;
          margin-right: 20px;
        }
        .jsap-widget-tabs-nav a {
          text-decoration: none;
          color: #337ab7;
        }
        .jsap-widget-tabs-nav a.active {
          color: #23527c;
        }
        .jsap-widget-tabs-content {
          padding: 20px;
        }
        .jsap-widget-tabs-content div {
          display: none;
        }
        .jsap-widget-tabs-content div.active {
          display: block;
        }
      `,
    });
  }
}

export default Tabs;

/*
import Tabs from './tabs.js';

const tabs = new Tabs({
  id: 'my-tabs',
  data: {
    tabs: [
      {
        title: 'Tab 1',
        content: 'This is the content of Tab 1.',
      },
      {
        title: 'Tab 2',
        content: 'This is the content of Tab 2.',
      },
      {
        title: 'Tab 3',
        content: 'This is the content of Tab 3.',
      },
    ],
  },
});

*/