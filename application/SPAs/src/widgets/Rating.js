import Widget from './widget.js';

class Rating extends Widget {
    constructor(options) {
        super({
            ...options,
            template: (data) => `
                <div class="rating">
                    ${Array(data.maxValue).fill(0).map((_, index) => `
                        <span class="rating-star ${data.value > index ? 'active' : ''}"></span>
                    `).join('')}
                </div>
            `
        });
    }
}

export default Rating;