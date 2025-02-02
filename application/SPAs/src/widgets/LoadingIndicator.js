import Widget from './widget.js';

class LoadingIndicator extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-loading-indicator">
          <div class="jsap-widget-loading-indicator-spinner"></div>
          <p>${data.message}</p>
        </div>
      `,
      styles: `
        .jsap-widget-loading-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .jsap-widget-loading-indicator-spinner {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #3498db;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `,
    });
  }
}

export default LoadingIndicator;

/*
import LoadingIndicator from './loading-indicator.js';

const loadingIndicator = new LoadingIndicator({
  id: 'my-loading-indicator',
  data: {
    message: 'Loading...',
  },
});

*/