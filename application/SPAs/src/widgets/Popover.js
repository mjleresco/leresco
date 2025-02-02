import Widget from './widget.js';

class Popover extends Widget {
    constructor(options) {
        super({
            ...options,
            template: (data) => `
                <div class="popover" style="position: absolute; top: ${data.top}px; left: ${data.left}px;">
                    <div class="popover-content">${data.content}</div>
                </div>
            `,
        });
    }
}

export default Popover;