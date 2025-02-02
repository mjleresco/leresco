import Widget from './widget.js';

class Gauge extends Widget {
    constructor(options) {
        super({
            ...options,
            template: (data) => `
                <svg id="gauge" width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke-width="10" stroke-dasharray="${data.value}" stroke-dashoffset="0" />
                </svg>
            `,
        });
    }
}

export default Gauge;