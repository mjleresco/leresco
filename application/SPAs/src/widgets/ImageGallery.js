import Widget from './widget.js';

class ImageGallery extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-image-gallery">
          <div class="jsap-widget-image-gallery-thumbnails">
            ${data.images.map((image, index) => `
              <img src="${image.thumbnail}" alt="${image.alt}" data-index="${index}">
            `).join('')}
          </div>
          <div class="jsap-widget-image-gallery-main">
            <img src="${data.images[0].src}" alt="${data.images[0].alt}">
          </div>
        </div>
      `,
      styles: `
        .jsap-widget-image-gallery {
          display: flex;
          flex-direction: column;
        }
        .jsap-widget-image-gallery-thumbnails {
          display: flex;
          flex-wrap: wrap;
        }
        .jsap-widget-image-gallery-thumbnails img {
          width: 100px;
          height: 100px;
          margin: 10px;
          cursor: pointer;
        }
        .jsap-widget-image-gallery-main {
          margin-top: 20px;
        }
        .jsap-widget-image-gallery-main img {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }
      `,
    });
  }
}

export default ImageGallery;

/*
import ImageGallery from './image-gallery.js';

const imageGallery = new ImageGallery({
  id: 'my-image-gallery',
  data: {
    images: [
      {
        src: '(link unavailable)',
        alt: 'Image 1',
        thumbnail: '(link unavailable)',
      },
      {
        src: '(link unavailable)',
        alt: 'Image 2',
        thumbnail: '(link unavailable)',
      },
      {
        src: '(link unavailable)',
        alt: 'Image 3',
        thumbnail: '(link unavailable)',
      },
    ],
  },
});

*/