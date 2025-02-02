import Widget from './widget.js';

class SocialShare extends Widget {
    constructor(options) {
        super({
            ...options,
            template: (data) => `
                <div class="social-share">
                    ${data.platforms.map((platform) => `
                        <a href="${platform.url}" target="_blank">
                            <i class="${platform.icon}"></i>
                            <span>${platform.text || ''}</span>
                            
                        </a>
                    `).join('')}
                </div>
            `,
        });
    }
}

export default SocialShare;