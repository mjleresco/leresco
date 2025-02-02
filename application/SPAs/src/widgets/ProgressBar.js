import Widget from './widget.js';

class ProgressBar extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-progress-bar">
          <div class="jsap-widget-progress-bar-fill" style="width: ${data.progress}%;"></div>
        </div>
      `,
      styles: `
        .jsap-widget-progress-bar {
          width: 100%;
          height: 20px;
          background-color: #f3f3f3;
          border-radius: 5px;
          overflow: hidden;
        }
        .jsap-widget-progress-bar-fill {
          height: 100%;
          background-color: #337ab7;
          transition: width 0.5s ease-in-out;
        }
      `,
    });
  }
}

export default ProgressBar;

/*
import ProgressBar from './progress-bar.js';

const progressBar = new ProgressBar({
  id: 'my-progress-bar',
  data: {
    progress: 50, // initial progress value
  },
});

*/