import Widget from './widget.js';

class Dialog extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-dialog" style="display: ${data.visible ? 'block' : 'none'};">
          <div class="jsap-widget-dialog-overlay"></div>
          <div class="jsap-widget-dialog-content">
            <div class="jsap-widget-dialog-header">
              <h2>${data.title}</h2>
              <button class="jsap-widget-dialog-close" aria-label="Close dialog">&times;</button>
            </div>
            <div class="jsap-widget-dialog-body">
              ${data.message}
            </div>
            <div class="jsap-widget-dialog-footer">
              ${data.buttons.map((button) => `
                <button class="jsap-widget-dialog-button ${button.type}">${button.text}</button>
              `).join('')}
            </div>
          </div>
        </div>
      `,
      styles: `
        .jsap-widget-dialog {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .jsap-widget-dialog-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .jsap-widget-dialog-content {
          position: relative;
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .jsap-widget-dialog-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .jsap-widget-dialog-close {
          background-color: transparent;
          border: none;
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
        }
        .jsap-widget-dialog-body {
          padding: 20px;
        }
        .jsap-widget-dialog-footer {
          display: flex;
          justify-content: flex-end;
        }
        .jsap-widget-dialog-button {
          margin-left: 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .jsap-widget-dialog-button.primary {
          background-color: #337ab7;
          color: #fff;
        }
        .jsap-widget-dialog-button.success {
          background-color: #5cb85c;
          color: #fff;
        }
        .jsap-widget-dialog-button.danger {
          background-color: #d9534f;
          color: #fff;
        }
      `,
    });
  }
}

export default Dialog;

/*
import Dialog from './dialog.js';

const dialog = new Dialog({
  id: 'my-dialog',
  data: {
    visible: true,
    title: 'Dialog Title',
    message: 'This is a dialog message.',
    buttons: [
      {
        type: 'primary',
        text: 'OK',
      },
      {
        type: 'danger',
        text: 'Cancel',
      },
    ],
  },
});

*/