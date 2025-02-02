class ChartClass {
  constructor(canvas, options) {
    this.canvas = canvas;
    this.ctx = canvas;
    this.options = options;
    this.data = options.data;
    this.labels = options.labels;
  
    this.clearCanvas();
    this.drawChart();
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawChart() {
    const chartType = this.options.type;
    if (chartType === 'bar') {
      this.drawBarChart();
    } else if (chartType === 'line') {
      this.drawLineChart();
    } else {
      console.error(`Unsupported chart type: ${chartType}`);
    }
  }

  drawBarChart() {
    const barWidth = this.canvas.width / this.data.length;
    const barSpacing = 10;
    const maxValue = Math.max(...this.data);
    const scale = this.canvas.height / maxValue;

    this.data.forEach((value, index) => {
      const x = index * (barWidth + barSpacing);
      const y = this.canvas.height - value * scale;
      const height = value * scale;

      this.ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
      this.ctx.fillRect(x, y, barWidth, height);
    });
  }

  drawLineChart() {
    const maxValue = Math.max(...this.data);
    const scale = this.canvas.height / maxValue;

    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
    this.ctx.lineWidth = 2;

    this.data.forEach((value, index) => {
      const x = index * (this.canvas.width / (this.data.length - 1));
      const y = this.canvas.height - value * scale;

      if (index === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    });

    this.ctx.stroke();
  }
}

export default ChartClass;
/*
const canvas = document.getElementById('chart-canvas');
const chart = new Chart(canvas, {
  type: 'bar',
  data: [10, 20, 30, 40, 50],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
});

chart.render();
*/