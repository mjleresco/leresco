import Widget from './widget.js';

class Calendar extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-calendar">
          <div class="jsap-widget-calendar-header">
            <button class="jsap-widget-calendar-prev" aria-label="Previous month">&lt;</button>
            <span class="jsap-widget-calendar-month">${data.month}</span>
            <button class="jsap-widget-calendar-next" aria-label="Next month">&gt;</button>
          </div>
          <div class="jsap-widget-calendar-body">
            <table>
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                ${data.days.map((week) => `
                  <tr>
                    ${week.map((day) => `
                      <td ${day.today ? 'class="today"' : ''} ${day.selected ? 'class="selected"' : ''}>
                        ${day.date}
                      </td>
                    `).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `,
      styles: `
        .jsap-widget-calendar {
          width: 300px;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
        }
        .jsap-widget-calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .jsap-widget-calendar-prev, .jsap-widget-calendar-next {
          background-color: transparent;
          border: none;
          padding: 5px;
          font-size: 16px;
          cursor: pointer;
        }
        .jsap-widget-calendar-month {
          font-size: 18px;
          font-weight: bold;
        }
        .jsap-widget-calendar-body {
          overflow-y: auto;
          max-height: 200px;
        }
        .jsap-widget-calendar table {
          width: 100%;
          border-collapse: collapse;
        }
        .jsap-widget-calendar th, .jsap-widget-calendar td {
          padding: 5px;
          border: 1px solid #ddd;
          text-align: center;
        }
        .jsap-widget-calendar td.today {
          background-color: #337ab7;
          color: #fff;
        }
        .jsap-widget-calendar td.selected {
          background-color: #5cb85c;
          color: #fff;
        }
      `,
    });
  }
}

export default Calendar;

/* 

const calendar = new Calendar({
  id: 'my-calendar',
  data: {
    month: 'January 2024',
    days: [
      [
        { date: 1, today: false, selected: false },
        { date: 2, today: false, selected: false },
        { date: 3, today: false, selected: false },
        { date: 4, today: false, selected: false },
        { date: 5, today: false, selected: false },
        { date: 6, today: false, selected: false },
        { date: 7, today: false, selected: false },
      ],
      // ...
    ],
  },
});

*/