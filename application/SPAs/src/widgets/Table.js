import Widget from './widget.js';

class Table extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <table class="jsap-widget-table">
          <thead>
            <tr>
              ${data.columns.map((column) => `
                <th>${column}</th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            ${data.rows.map((row) => `
              <tr>
                ${row.map((cell) => `
                  <td>${cell}</td>
                `).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      `,
      styles: `
        .jsap-widget-table {
          border-collapse: collapse;
          width: 100%;
        }
        .jsap-widget-table th, .jsap-widget-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }
        .jsap-widget-table th {
          background-color: #f0f0f0;
        }
      `,
    });
  }
}

export default Table;

/*
import Table from './table.js';

const myTable = new Table({
  id: 'my-table',
  data: {
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [
      ['Cell 1', 'Cell 2', 'Cell 3'],
      ['Cell 4', 'Cell 5', 'Cell 6'],
      ['Cell 7', 'Cell 8', 'Cell 9'],
    ],
  },
});

*/