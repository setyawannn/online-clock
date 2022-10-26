function displayTime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();

  document.getElementById('hours').setAttribute("style", `--value:${hrs}`);
  document.getElementById('minutes').setAttribute("style", `--value:${min}`);
  document.getElementById('seconds').setAttribute("style", `--value:${sec}`);
}
setInterval(displayTime, 10);

// Full Screen

function getFullscreenElement() {
  return document.fullscreenElement
    || document.webkitFullScreenElement
    || document.mozFullScreenElement
    || document.msFullScreenElement;
}

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen;
  } else {
    document.getElementById('myClock').requestFullscreen().catch(console.log);
  }
}

const btnFullscreen = document.getElementById('enterFullscreen');

btnFullscreen.addEventListener("click", () => {
  toggleFullscreen();
});

document.addEventListener("fullscreenchange", () => {
  console.log("Full screen changed!");
});
