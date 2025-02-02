import Widget from './widget.js';

class Grid extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-grid">
          ${data.rows.map((row) => `
            <div class="jsap-widget-grid-row">
              ${row.columns.map((column) => `
                <div class="jsap-widget-grid-column" style="width: ${column.width};">
                  ${column.content}
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      <style>
        .jsap-widget-grid {
          display: flex;
          flex-direction: column;
        }
        .jsap-widget-grid-row {
          display: flex;
        }
        .jsap-widget-grid-column {
          padding: 10px;
          border: 1px solid #ccc;
        }
      </style>
      `,
    });
  }
}

export default Grid;

/*
import Grid from './grid.js';

const grid = new Grid({
  id: 'my-grid',
  data: {
    rows: [
      {
        columns: [
          {
            width: '50%',
            content: 'Column 1',
          },
          {
            width: '50%',
            content: 'Column 2',
          },
        ],
      },
      {
        columns: [
          {
            width: '33.33%',
            content: 'Column 1',
          },
          {
            width: '33.33%',
            content: 'Column 2',
          },
          {
            width: '33.33%',
            content: 'Column 3',
          },
        ],
      },
    ],
  },
});

*/