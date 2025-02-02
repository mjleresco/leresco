import Widget from './widget.js';

class Button extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <button class="jsap-widget-button ${data.type} ${data.size}" ${data.disabled ? 'disabled' : ''}>
          ${data.text}
        </button>
      `,
      styles: `
        .jsap-widget-button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .jsap-widget-button.primary {
          background-color: #337ab7;
          color: #fff;
        }
        .jsap-widget-button.success {
          background-color: #5cb85c;
          color: #fff;
        }
        .jsap-widget-button.info {
          background-color: #5bc0de;
          color: #fff;
        }
        .jsap-widget-button.warning {
          background-color: #f0ad4e;
          color: #fff;
        }
        .jsap-widget-button.danger {
          background-color: #d9534f;
          color: #fff;
        }
        .jsap-widget-button.large {
          padding: 15px 30px;
          font-size: 18px;
        }
        .jsap-widget-button.small {
          padding: 5px 10px;
          font-size: 12px;
        }
        .jsap-widget-button.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `,
    });
  }
}

export default Button;

/*
 * 
const button = new Button({
  id: 'my-button',
  data: {
    type: 'primary',
    size: 'large',
    text: 'Click me!',
    disabled: false,
  },
});

*/