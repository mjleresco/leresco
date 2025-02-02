import Widget from './widget.js';

class Badge extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <span class="jsap-widget-badge ${data.type}">${data.text}</span>
      `,
      styles: `
        .jsap-widget-badge {
          display: inline-block;
          padding: 2px 5px;
          border-radius: 5px;
          font-size: 12px;
          font-weight: bold;
        }
        .jsap-widget-badge.success {
          background-color: #dff0d8;
          color: #3c763d;
          border-color: #3c763d;
        }
        .jsap-widget-badge.info {
          background-color: #d9edf7;
          color: #31708f;
          border-color: #31708f;
        }
        .jsap-widget-badge.warning {
          background-color: #fcf8e3;
          color: #8a6d3b;
          border-color: #8a6d3b;
        }
        .jsap-widget-badge.danger {
          background-color: #f2dede;
          color: #a94442;
          border-color: #a94442;
        }
      `,
    });
  }
}

export default Badge;


/*
const badge = new Badge({
  id: 'my-badge',
  data: {
    type: 'success',
    text: 'New',
  },
});

*/