import Widget from './widget.js';

class Modal extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-modal" style="display: none;">
          <div class="jsap-widget-modal-overlay"></div>
          <div class="jsap-widget-modal-content">
            <header>
              <h2>${data.title}</h2>
              <button class="jsap-widget-modal-close">&times;</button>
            </header>
            <div class="jsap-widget-modal-body">${data.message}</div>
          </div>
        </div>
      `,
      styles: `
        .jsap-widget-modal {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1000;
        }
        .jsap-widget-modal-overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .jsap-widget-modal-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .jsap-widget-modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 24px;
          cursor: pointer;
        }
      `,
    });
  }

  show() {
    const modal = document.getElementById((link unavailable));
    modal.style.display = 'block';
  }

  hide() {
    const modal = document.getElementById((link unavailable));
    modal.style.display = 'none';
  }
}

export default Modal;

/* 

import Modal from './modal.js';

const myModal = new Modal({
  id: 'my-modal',
  data: {
    title: 'Modal Title',
    message: 'This is a modal message.',
  },
});

document.body.innerHTML += myModal.render();

// Show the modal
myModal.show();

// Hide the modal
myModal.hide();

*/