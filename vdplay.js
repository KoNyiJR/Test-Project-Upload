var customVideoPlayer = (function () {

  function el(theId) {
    return document.getElementById(theId);
  }

  var videoBox = el("videoBox"),
      video = el("customVideo"),
      playPauseBtn = el("playPauseBtn"),
      currentTime = el("currentTime"),
      seekBar = el("seekBar"),
      progressBar = el("progressBar"),
      bufferBar = el("bufferBar"),
      videoTime = el("videoTime"),
      volumeBtn = el("volumeBtn"),
      volumeSeekBar = el("seekVol"),
      fsBtn = el("fsBtn"),
      vidMinutes,
      vidSeconds,
      updMinutes,
      updSeconds,
      bufferedEnd;

  var detectPlayPauseBtn = function () {
    if (video.autoplay) {
      playPauseBtn.title = "Pause";
      playPauseBtn.classList = "fa fa-pause fa-lg";
    } else {
      playPauseBtn.title = "Play";
      playPauseBtn.classList = "fa fa-play fa-lg";
    }
  };
  var detectVolumeBtn = function () {
    if (video.muted) {
      volumeBtn.title = "Unmute";
      volumeBtn.classList = "fa fa-volume-off fa-lg";
      volumeSeekBar.value = volumeSeekBar.min;
    } else {
      volumeBtn.title = "Mute";
      volumeBtn.classList = "fa fa-volume-up fa-lg";
      volumeSeekBar.value = volumeSeekBar.max;
    }
  };
  var detectVideoTime = function () {

    var duration = video.duration;
    vidMinutes = Math.floor(duration / 60);
    vidSeconds = Math.floor(duration % 60);

    if (vidMinutes < 10) {
      vidMinutes = "0" + vidMinutes;
    }

    if (vidSeconds < 10) {
      vidSeconds = "0" + vidSeconds;
    }

    detectVolumeBtn();
    videoTime.innerHTML = vidMinutes + ":" + vidSeconds;
  };
  var customVideoInit = function () {
    detectPlayPauseBtn();
    detectVolumeBtn();
    detectVideoTime();
  };

  var playPause = function () {
    if(video.paused) {
      video.play();
      playPauseBtn.title = "Pause";
      playPauseBtn.classList = "fa fa-pause fa-lg";
    } else if (video.ended) {
      video.currentTime = 0;
      video.play();
      playPauseBtn.title = "Pause";
    } else {
      video.pause();
      playPauseBtn.title = "Play";
      playPauseBtn.classList = "fa fa-play fa-lg";
    }
  };

  var videoEnd = function () {
    playPauseBtn.title = "Play";
    playPauseBtn.classList = "fa fa-play fa-lg";
  };

  var videoTimeUpdate = function () {
    updMinutes = parseInt(video.currentTime / 60);
    updSeconds = parseInt(video.currentTime % 60);
    if (updMinutes < 10) {
      updMinutes = "0" + updMinutes;
    }

    if (updSeconds < 10) {
      updSeconds = "0" + updSeconds;
    }

    currentTime.innerHTML = updMinutes + ":" + updSeconds;

    seekBar.value = video.currentTime * (100 / video.duration);
    progressBar.value = seekBar.value;
  };

  var videoSeekBar = function () {
    video.currentTime = seekBar.value * (video.duration / 100);
    videoTimeUpdate();
  };

  var buffering = function () {
    var bufferEnd = video.buffered.end(video.buffered.length - 1);
    var duration = video.duration;
    if (duration > 0) {
      bufferBar.value = (bufferEnd / duration) * 100;
    }
  };

  var volumeToggle = function () {
    if(video.muted) {
      video.muted = false;
      if (video.volume === 0) {
        video.volume = 1;
        seekVol.value = video.volume * 100;
      } else {
        seekVol.value = video.volume * 100;
      }
      volumeBtn.classList = 'fa fa-volume-up fa-lg';
      volumeBtn.title = "Mute";
    } else {
       video.muted = true;
       seekVol.value = "0";
       volumeBtn.classList = 'fa fa-volume-off fa-lg';
       volumeBtn.title = "Unmute";
    }
  }

  var volumeSeek = function () {
    if(volumeSeekBar.value === "0") {
      video.muted = true;
      volumeBtn.classList = 'fa fa-volume-off fa-lg';
      volumeBtn.title = "Unmute";
    } else {
      video.muted = false;
      volumeBtn.classList = 'fa fa-volume-up fa-lg';
      volumeBtn.title = "Mute";
    }
    video.volume = seekVol.value / 100;
  };

  var fsMode = function () {
    if(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        fsBtn.classList = "fa fa-expand fa-lg";
        fsBtn.title = "Full Screen";
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        fsBtn.classList = "fa fa-expand fa-lg";
        fsBtn.title = "Full Screen";
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        fsBtn.classList = "fa fa-expand fa-lg";
        fsBtn.title = "Full Screen";
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        fsBtn.classList = "fa fa-expand fa-lg";
        fsBtn.title = "Full Screen";
      }
    } else {
      if(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
        if(videoBox.requestFullscreen) {
          videoBox.requestFullscreen();
          fsBtn.classList = "fa fa-compress fa-lg";
          fsBtn.title = "Exit Full Screen";
          videoBox.style.width = "100%";
          videoBox.style.height = "100%";
        } else if (videoBox.webkitRequestFullscreen) {
          videoBox.webkitRequestFullscreen();
          fsBtn.classList = "fa fa-compress fa-lg";
          fsBtn.title = "Exit Full Screen";
          videoBox.style.width = "100%";
          videoBox.style.height = "100%";
        } else if (videoBox.mozRequestFullScreen) {
          videoBox.mozRequestFullScreen();
          fsBtn.classList = "fa fa-compress fa-lg";
          fsBtn.title = "Exit Full Screen";
          videoBox.style.width = "100%";
          videoBox.style.height = "100%";
        } else if (videoBox.msRequestFullscreen) {
          videoBox.msRequestFullscreen();
          fsBtn.classList = "fa fa-compress fa-lg";
          fsBtn.title = "Exit Full Screen";
          videoBox.style.width = "100%";
          videoBox.style.height = "100%";
        }
      }
    }
  };

  // Event Listeners
  video.addEventListener("loadedmetadata", customVideoInit);
  video.addEventListener('click', playPause);
  video.addEventListener('ended', videoEnd);
  playPauseBtn.addEventListener('mousedown', playPause);
  video.addEventListener('timeupdate', videoTimeUpdate);
  seekBar.addEventListener('change', videoSeekBar);
  seekBar.addEventListener('input', videoSeekBar);
  video.addEventListener('progress', buffering);
  volumeBtn.addEventListener('click', volumeToggle);
  volumeSeekBar.addEventListener('change', volumeSeek);
  volumeSeekBar.addEventListener('input', volumeSeek);
  fsBtn.addEventListener('click', fsMode);
  video.addEventListener('dblclick', fsMode);
}());


