const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');

video1.addEventListener('mouseenter', playVideo);
video1.addEventListener('mouseleave', pauseVideo);

video2.addEventListener('mouseenter', playVideo);
video2.addEventListener('mouseleave', pauseVideo);

video3.addEventListener('mouseenter', playVideo);
video3.addEventListener('mouseleave', pauseVideo);

function playVideo(event) {
  const video = event.target;
  video.play();
}

function pauseVideo(event) {
  const video = event.target;
  video.pause();
  video.currentTime = 0;
}
