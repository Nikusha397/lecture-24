let day = prompt("ჩაწერე დღეების რაოდენობა:");
let hour = prompt("ჩაწერე საათების რაოდენობა:");
let min = prompt("ჩაწერე წუთების რაოდენობა:");
let sec = prompt("ჩაწერე წამების რაოდენობა:");

let totalSeconds = day * 24 * 3600 + hour * 3600 + min * 60 + sec * 1;

const dayEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateTimer() {
  if (totalSeconds <= 0) {
    dayEl.textContent = "0";
    hourEl.textContent = "0";
    minuteEl.textContent = "0";
    secondEl.textContent = "0";
    return;
  }

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  let temp = totalSeconds;

  while (temp >= 86400) {
    temp = temp - 86400;
    days = days + 1;
  }

  while (temp >= 3600) {
    temp = temp - 3600;
    hours = hours + 1;
  }

  while (temp >= 60) {
    temp = temp - 60;
    minutes = minutes + 1;
  }

  seconds = temp;

  dayEl.textContent = days;
  hourEl.textContent = hours;
  minuteEl.textContent = minutes;
  secondEl.textContent = seconds;

  totalSeconds = totalSeconds - 1;
}

setInterval(updateTimer, 1000);
updateTimer();
