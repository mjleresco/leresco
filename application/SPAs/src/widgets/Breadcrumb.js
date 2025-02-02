import Widget from './widget.js';

class Breadcrumb extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <nav class="jsap-widget-breadcrumb" aria-label="breadcrumb">
          <ol>
            ${data.items.map((item, index) => `
              <li>
                ${index === data.items.length - 1 ? `
                  <span>${item.text}</span>
                ` : `
                  <a href="${item.href}">${item.text}</a>
                `}
              </li>
            `).join('')}
          </ol>
        </nav>
      `,
      styles: `
        .jsap-widget-breadcrumb {
          padding: 10px;
          background-color: #f5f5f5;
          border-radius: 5px;
        }
        .jsap-widget-breadcrumb ol {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .jsap-widget-breadcrumb li {
          display: inline-block;
        }
        .jsap-widget-breadcrumb li + li::before {
          content: '/';
          margin: 0 5px;
        }
        .jsap-widget-breadcrumb a {
          text-decoration: none;
          color: #337ab7;
        }
        .jsap-widget-breadcrumb a:hover {
          color: #23527c;
        }
      `,
    });
  }
}

export default Breadcrumb;

/*
 * 
 const breadcrumb = new Breadcrumb({
  id: 'my-breadcrumb',
  data: {
    items: [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'About',
        href: '/about',
      },
      {
        text: 'Contact',
        href: '/contact',
      },
    ],
  },
});

*/