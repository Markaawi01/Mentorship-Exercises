// Select VIDEO element (from HTML)
const videoElement = document.getElementById('player');

// Select DOM elements
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume');
const speedSelect = document.getElementById('speed');

// 🎬 Video data (use MP4 links)
const videos = [
    {
        title: 'Big Buck Bunny',
        artist: 'Blender Studio',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
        title: 'Sample Video',
        artist: 'W3Schools',
        src: 'https://www.w3schools.com/html/movie.mp4'
    }
];

// Keep track
let videoIndex = 0;
let isPlaying = false;
let speed = 1;

// Load video
function loadVideo(video) {
    title.textContent = video.title;
    artist.textContent = video.artist;
    videoElement.src = video.src;
}

// Initial load
loadVideo(videos[videoIndex]);

// Play
function playVideo() {
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
    videoElement.play().catch(e => console.error("Error playing video:", e));
    isPlaying = true;
}

// Pause
function pauseVideo() {
    playBtn.querySelector('i').classList.remove('fa-pause');
    playBtn.querySelector('i').classList.add('fa-play');
    videoElement.pause();
    isPlaying = false;
}

// Previous
function prevVideo() {
    pauseVideo();
    setTimeout(() => {
        videoIndex--;
        if (videoIndex < 0) {
            videoIndex = videos.length - 1;
        }
        loadVideo(videos[videoIndex]);
        playVideo();
    }, 300);
}

// Next
function nextVideo() {
    pauseVideo();
    setTimeout(() => {
        videoIndex++;
        if (videoIndex > videos.length - 1) {
            videoIndex = 0;
        }
        loadVideo(videos[videoIndex]);
        playVideo();
    }, 300);
}

// Update progress
function updateProgress(e) {
    const { duration, currentTime } = e.target;

    if (isNaN(duration)) return;

    const percent = (currentTime / duration) * 100;
    progress.style.width = `${percent}%`;

    // Duration
    const dMin = Math.floor(duration / 60);
    let dSec = Math.floor(duration % 60);
    if (dSec < 10) dSec = `0${dSec}`;
    durationEl.textContent = `${dMin}:${dSec}`;

    // Current
    const cMin = Math.floor(currentTime / 60);
    let cSec = Math.floor(currentTime % 60);
    if (cSec < 10) cSec = `0${cSec}`;
    currentTimeEl.textContent = `${cMin}:${cSec}`;

    videoElement.playbackRate = speed;
}

// Seek
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = videoElement.duration;

    if (isNaN(duration)) return;

    const newTime = (clickX / width) * duration;

    if (isFinite(newTime)) {
        videoElement.currentTime = newTime;
    }
}

// Event listeners
playBtn.addEventListener('click', () => {
    isPlaying ? pauseVideo() : playVideo();
});

prevBtn.addEventListener('click', prevVideo);
nextBtn.addEventListener('click', nextVideo);

// Time update
videoElement.addEventListener('timeupdate', updateProgress);

// Click progress bar
progressContainer.addEventListener('click', setProgress);

// Ended
videoElement.addEventListener('ended', nextVideo);

// Volume
volumeSlider.addEventListener('input', (e) => {
    videoElement.volume = e.target.value;
});

// Speed
speedSelect.addEventListener('change', (e) => {
    speed = parseFloat(e.target.value);
    videoElement.playbackRate = speed;
});

// Metadata loaded
videoElement.addEventListener('loadedmetadata', updateProgress);