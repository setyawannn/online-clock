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