<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video Thumbnail Generator</title>
  <style>
    #thumbnail {
      width: 320px;
      height: 240px;
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <h1>Video Thumbnail Generator</h1>
  <video id="myVideo" width="350" height="480" controls>
    <source src="x-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  
  <div class="controls">
    <button id="play-pause-button">Play/Pause</button>
    <button id="stop-button">Stop</button>
    <button id="mute-button">Mute/Unmute</button>
    <input id="volume-slider" type="range" min="0" max="1" step="0.1" value="1">
    <input id="seek-slider" type="range" min="0" max="100" step="1" value="0">
    <button id="speed-button">Speed: 1x</button>
    <button id="fullscreen-button">Fullscreen</button>
  </div>
  
  <script>
    const video = document.getElementById('myVideo');
    const playPauseButton = document.getElementById('play-pause-button');
    const stopButton = document.getElementById('stop-button');
    const muteButton = document.getElementById('mute-button');
    const volumeSlider = document.getElementById('volume-slider');
    const seekSlider = document.getElementById('seek-slider');
    const speedButton = document.getElementById('speed-button');
    const fullscreenButton = document.getElementById('fullscreen-button');
  
    let playbackSpeed = 1;
  
    playPauseButton.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
      } else {
        video.pause();
        playPauseButton.textContent = 'Play';
      }
    });
  
    stopButton.addEventListener('click', () => {
      video.pause();
      video.currentTime = 0;
      playPauseButton.textContent = 'Play';
    });
  
    muteButton.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false;
        muteButton.textContent = 'Mute';
      } else {
        video.muted = true;
        muteButton.textContent = 'Unmute';
      }
    });
  
    volumeSlider.addEventListener('input', () => {
      video.volume = volumeSlider.value;
    });
  
    seekSlider.addEventListener('input', () => {
      video.currentTime = seekSlider.value * video.duration / 100;
    });
  
    speedButton.addEventListener('click', () => {
      playbackSpeed++;
      if (playbackSpeed > 4) {
        playbackSpeed = 1;
      }
      video.playbackRate = playbackSpeed;
      speedButton.textContent = `Speed: ${playbackSpeed}x`;
    });
  
    fullscreenButton.addEventListener('click', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        fullscreenButton.textContent = 'Fullscreen';
      } else {
        video.requestFullscreen();
        fullscreenButton.textContent = 'Exit Fullscreen';
      }
    });
  
    video.addEventListener('timeupdate', () => {
      seekSlider.value = video.currentTime / video.duration * 100;
    });
  
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        fullscreenButton.textContent = 'Exit Fullscreen';
      } else {
        fullscreenButton.textContent = 'Fullscreen';
      }
    });
  </script>
  
</body>
</html>