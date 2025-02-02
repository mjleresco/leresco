import Widget from './widget.js';

class Tooltip extends Widget {
    constructor(options) {
        super({
            ...options,
            template: async (data) => `
                <div class="tooltip" style="position: relative; top: ${data.top}px; left: ${data.left}px;">
                    ${data.text}
                </div>
            `,
        });
    }
}

export default Tooltip;