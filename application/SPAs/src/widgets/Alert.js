import Widget from './widget.js';

class Alert extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-alert ${data.type}" role="alert">
          ${data.message}
          ${data.dismissible ? `
            <button class="jsap-widget-alert-dismiss" aria-label="Dismiss alert">
              &times;
            </button>
          ` : ''}
        </div>
      `,
      styles: `
        .jsap-widget-alert {
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .jsap-widget-alert.success {
          background-color: #dff0d8;
          color: #3c763d;
          border-color: #3c763d;
        }
        .jsap-widget-alert.info {
          background-color: #d9edf7;
          color: #31708f;
          border-color: #31708f;
        }
        .jsap-widget-alert.warning {
          background-color: #fcf8e3;
          color: #8a6d3b;
          border-color: #8a6d3b;
        }
        .jsap-widget-alert.danger {
          background-color: #f2dede;
          color: #a94442;
          border-color: #a94442;
        }
        .jsap-widget-alert-dismiss {
          background-color: transparent;
          border: none;
          padding: 0;
          font-size: 16px;
          cursor: pointer;
        }
      `,
    });
  }
}

export default Alert;

/*
const alert = new Alert({
  id: 'my-alert',
  data: {
    type: 'success',
    message: 'This is a success alert.',
    dismissible: true,
  },
});

*/