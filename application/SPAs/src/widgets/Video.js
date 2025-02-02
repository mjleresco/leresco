import Widget from './widget.js';

class Video extends Widget {
    constructor(options) {
        super({
            ...options,
            template: (data) => `
                <video style="width:${data.width}; height:${data.height};" poster="${data.poster}" controls>
                    <source src="${data.src}" type="${data.type}">
                </video>
            `,
        });
    }
}

export default Video;