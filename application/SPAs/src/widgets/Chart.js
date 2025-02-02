import Widget from './widget.js';

class Chart extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-chart">
          <canvas id="${data.id}"></canvas>
        </div>
      `,
      styles: `
        .jsap-widget-chart {
          width: 600px;
          height: 400px;
        }
      `,
    });
  }

  render() {
    const html = super.render();
    const canvas = document.getElementById(this.id);
    const ctx = canvas.getContext('2d');

    // Render chart using Chart.js library
    const chart = new Chart(ctx, {
      type: this.data.type,
      data: this.data.data,
      options: this.data.options,
    });

    return html;
  }
}

export default Chart;

/*
 * 
import Chart from './chart.js';

const chart = new Chart({
  id: 'my-chart',
  data: {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March'],
      datasets: [{
        label: 'Series A',
        data: [10, 20, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  },
});

*/