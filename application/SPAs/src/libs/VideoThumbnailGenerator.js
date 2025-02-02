
function createVideo(videoFile, options = {}) {
    
}

function generateVideoThumbnail(videoFile, thumbnailTime = 1, width = 400, height = 650) {
    return new Promise((resolve, reject) => {
        const videoUrl = videoFile instanceof File ? URL.createObjectURL(videoFile) : videoFile;
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = videoUrl;
        video.addEventListener('loadedmetadata', () => {
            video.currentTime = thumbnailTime;
        });
        video.addEventListener('seeked', () => {
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, width, height);
            const thumbnail = canvas.toDataURL('image/jpeg');
            resolve(thumbnail);
        });
        video.addEventListener('error', (err) => {
            reject(err);
        });
    });
    }

export {createVideo, generateVideoThumbnail};
