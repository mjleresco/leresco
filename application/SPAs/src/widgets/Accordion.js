import Widget from './widget.js';

class Accordion extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-accordion">
          ${data.items.map((item, index) => `
            <div class="jsap-widget-accordion-item">
              <div class="jsap-widget-accordion-header">
                <h2>${item.title}</h2>
                <button class="jsap-widget-accordion-toggle" aria-expanded="${item.expanded}"></button>
              </div>
              <div class="jsap-widget-accordion-content" style="display: ${item.expanded ? 'block' : 'none'};">
                ${item.content}
              </div>
            </div>
          `).join('')}
        </div>
      `,
      styles: `
        .jsap-widget-accordion {
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
        }
        .jsap-widget-accordion-item {
          margin-bottom: 10px;
        }
        .jsap-widget-accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .jsap-widget-accordion-toggle {
          background-color: transparent;
          border: none;
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
        }
        .jsap-widget-accordion-toggle::before {
          content: '\\25B8'; /* right-pointing triangle */
        }
        .jsap-widget-accordion-toggle[aria-expanded="true"]::before {
          content: '\\25BE'; /* down-pointing triangle */
        }
        .jsap-widget-accordion-content {
          padding: 10px;
          border-top: 1px solid #ddd;
        }
      `,
    });
  }
}

export default Accordion;


/*
const accordion = new Accordion({
  id: 'my-accordion',
  data: {
    items: [
      {
        title: 'Item 1',
        content: 'This is the content for item 1.',
        expanded: true,
      },
      {
        title: 'Item 2',
        content: 'This is the content for item 2.',
        expanded: false,
      },
      {
        title: 'Item 3',
        content: 'This is the content for item 3.',
        expanded: false,
      },
    ],
  },
});
*/