import Widget from './widget.js';

class Pagination extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-pagination">
          <ul>
            ${data.pages.map((page, index) => `
              <li>
                <a href="${page.href}" class="${page.active ? 'active' : ''}">${page.text}</a>
              </li>
            `).join('')}
          </ul>
        </div>
      `,
      styles: `
        .jsap-widget-pagination {
          display: flex;
          justify-content: center;
        }
        .jsap-widget-pagination ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .jsap-widget-pagination li {
          display: inline-block;
          margin-right: 10px;
        }
        .jsap-widget-pagination a {
          text-decoration: none;
          color: #337ab7;
        }
        .jsap-widget-pagination a.active {
          color: #23527c;
        }
        .jsap-widget-pagination a:hover {
          color: #23527c;
        }
      `,
    });
  }
}

export default Pagination;

/*
import Pagination from './pagination.js';

const pagination = new Pagination({
  id: 'my-pagination',
  data: {
    pages: [
      {
        text: 'Previous',
        href: '#previous',
      },
      {
        text: '1',
        href: '#page-1',
        active: true,
      },
      {
        text: '2',
        href: '#page-2',
      },
      {
        text: '3',
        href: '#page-3',
      },
      {
        text: 'Next',
        href: '#next',
      },
    ],
  },
});

*/