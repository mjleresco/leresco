import Widget from './widget.js';

class VideoPlayer extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-video-player">
          <video id="${(link unavailable)}" width="${data.width}" height="${data.height}" controls>
            <source src="${data.src}" type="${data.type}">
            Your browser does not support the video tag.
          </video>
        </div>
      `,
      styles: `
        .jsap-widget-video-player {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      `,
    });
  }
}

export default VideoPlayer;

/*
import VideoPlayer from './video-player.js';

const videoPlayer = new VideoPlayer({
  id: 'my-video-player',
  data: {
    src: '(link unavailable)',
    type: 'video/mp4',
    width: '640',
    height: '480',
  },
});

*/