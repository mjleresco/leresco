import Widget from './widget.js';

class Audio extends Widget {
    constructor(options) {
        super({
            ...options,
            template: (data) => `
                <audio controls>
                    <source src="${data.src}" type="${data.type}">
                </audio>
            `,
        });
    }
}

export default Audio;