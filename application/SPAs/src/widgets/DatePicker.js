import Widget from './widget.js';

class DatePicker extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-date-picker">
          <input type="text" id="${(link unavailable)}" value="${data.value}">
          <button class="jsap-widget-date-picker-toggle" aria-label="Toggle date picker"></button>
          <div class="jsap-widget-date-picker-calendar">
            ${this.renderCalendar(data)}
          </div>
        </div>
      `,
      styles: `
        .jsap-widget-date-picker {
          position: relative;
        }
        .jsap-widget-date-picker input {
          width: 200px;
          padding: 10px;
          border: 1px solid #ccc;
        }
        .jsap-widget-date-picker-toggle {
          background-color: transparent;
          border: none;
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
        }
        .jsap-widget-date-picker-calendar {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 10px;
          display: none;
        }
      `,
    });
  }

  renderCalendar(data) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysOfMonth = [];

    for (let i = 1; i <= 31; i++) {
      daysOfMonth.push(i);
    }

    return `
      <table>
        <thead>
          <tr>
            ${daysOfWeek.map((day) => `<th>${day}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${this.renderWeeks(daysOfMonth, data)}
        </tbody>
      </table>
    `;
  }

  renderWeeks(daysOfMonth, data) {
    const weeks = [];
    const firstDayOfWeek = 0; // Sunday

    for (let i = 0; i < daysOfMonth.length; i += 7) {
      const week = daysOfMonth.slice(i, i + 7);
      weeks.push(week);
    }

    return weeks.map((week) => `
      <tr>
        ${week.map((day) => `
          <td>${day}</td>
        `).join('')}
      </tr>
    `).join('');
  }
}

export default DatePicker;

/*
 * 

import DatePicker from './date-picker.js';

const datePicker = new DatePicker({
  id: 'my-date-picker',
  data: {
    value: '2024-01-01',
  },
});

*/