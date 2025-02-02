import Widget from './widget.js';

class List extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <ul class="jsap-widget-list">
          ${data.items.map((item) => `
            <li>${item}</li>
          `).join('')}
        </ul>
      `,
      styles: `
        .jsap-widget-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .jsap-widget-list li {
          padding: 10px;
          border-bottom: 1px solid #ccc;
        }
        .jsap-widget-list li:last-child {
          border-bottom: none;
        }
      `,
    });
  }
}

export default List;

/*
import List from './list.js';

const myList = new List({
  id: 'my-list',
  data: {
    items: ['Item 1', 'Item 2', 'Item 3'],
  },
});

*/