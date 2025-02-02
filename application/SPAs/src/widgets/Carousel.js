import Widget from './widget.js';

class Carousel extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-carousel">
          <div class="jsap-widget-carousel-inner">
            ${data.items.map((item, index) => `
              <div class="jsap-widget-carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${item.image}" alt="${item.alt}">
                <div class="jsap-widget-carousel-caption">
                  <h2>${item.title}</h2>
                  <p>${item.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <button class="jsap-widget-carousel-prev" aria-label="Previous slide">&lt;</button>
          <button class="jsap-widget-carousel-next" aria-label="Next slide">&gt;</button>
          <div class="jsap-widget-carousel-indicators">
            ${data.items.map((item, index) => `
              <button class="jsap-widget-carousel-indicator ${index === 0 ? 'active' : ''}" aria-label="Slide ${index + 1}"></button>
            `).join('')}
          </div>
        </div>
      `,
      styles: `
        .jsap-widget-carousel {
          position: relative;
          width: 600px;
          height: 400px;
          overflow: hidden;
        }
        .jsap-widget-carousel-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .jsap-widget-carousel-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: none;
        }
        .jsap-widget-carousel-item.active {
          display: block;
        }
        .jsap-widget-carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .jsap-widget-carousel-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px;
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
        }
        .jsap-widget-carousel-prev, .jsap-widget-carousel-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: transparent;
          border: none;
          padding: 10px;
          font-size: 24px;
          cursor: pointer;
        }
        .jsap-widget-carousel-prev {
          left: 0;
        }
        .jsap-widget-carousel-next {
          right: 0;
        }
        .jsap-widget-carousel-indicators {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .jsap-widget-carousel-indicator {
          background-color: #ccc;
          border: none;
          padding: 5px;
          font-size: 12px;
          cursor: pointer;
        }
        .jsap-widget-carousel-indicator.active {
          background-color: #337ab7;
        }
      `,
    });
  }
}

export default Carousel;

/* 
const carousel = new Carousel({
  id: 'my-carousel',
  data: {
    items: [
      {
        image: '(link unavailable)',
        alt: 'Image 1',
        title: 'Slide 1',
        description: 'This is the first slide.',
      },
      {
        image: '(link unavailable)',
        alt: 'Image 2',
        title: 'Slide 2',
        description: 'This is the second slide.',
      },
      // ...
    ],
  },
});

*/