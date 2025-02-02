import Widget from './widget.js';

class Dropdown extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-dropdown">
          <button class="jsap-widget-dropdown-toggle" aria-label="Toggle dropdown">
            ${data.text}
          </button>
          <ul class="jsap-widget-dropdown-menu">
            ${data.items.map((item) => `
              <li>
                <a href="${item.href}">${item.text}</a>
              </li>
            `).join('')}
          </ul>
        </div>
      `,
      styles: `
        .jsap-widget-dropdown {
          position: relative;
        }
        .jsap-widget-dropdown-toggle {
          background-color: transparent;
          border: none;
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
        }
        .jsap-widget-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 10px;
          display: none;
        }
        .jsap-widget-dropdown-menu li {
          margin-bottom: 10px;
        }
        .jsap-widget-dropdown-menu a {
          text-decoration: none;
          color: #337ab7;
        }
        .jsap-widget-dropdown-menu a:hover {
          color: #23527c;
        }
      `,
    });
  }
}

export default Dropdown;

/*
import Dropdown from './dropdown.js';

const dropdown = new Dropdown({
  id: 'my-dropdown',
  data: {
    text: 'Dropdown',
    items: [
      {
        text: 'Item 1',
        href: '#item-1',
      },
      {
        text: 'Item 2',
        href: '#item-2',
      },
      {
        text: 'Item 3',
        href: '#item-3',
      },
    ],
  },
});

*/