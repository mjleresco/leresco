import Widget from './widget.js';

class Loader extends Widget {
    constructor(options) {
        super({
            ...options,
            template: (data) => `
                <div class="loader" style="width: ${data.size}px; height: ${data.size}px;">
                    <div class="loader-spinner" style="border-top-color: ${data.color}; border-right-color: ${data.color}; border-bottom-color: ${data.color};"></div>
                </div>
            `,
        });
    }
}

export default Loader;