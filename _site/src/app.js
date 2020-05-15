const fifteenButton = document.querySelector('.fifteen');
const customButton = document.querySelector('.custom');
const thirdButton = document.querySelector('.third');

const time = document.querySelector('.time');

const start = document.querySelector('.start');

let minutes = 30;
let seconds = 0;
let startCountdown = false;
let myInterval;

function formatTime(min, sec) {
  min = ('0' + min).slice(-2);
  sec = ('0' + sec).slice(-2);
  return `${min}:${sec}`;
}

// Decreases the time remaining
function startClock() {
  if (seconds > 0) {
    seconds--;
  } else {
    minutes--;
    seconds = 59;
  }
  time.textContent = formatTime(minutes, seconds);
}

// Standard time: 30:00
time.textContent = formatTime(minutes, seconds);

start.addEventListener('click', (e) => {
  e.preventDefault();

  // Start/continue time
  if (!startCountdown) {
    myInterval = setInterval(startClock, 1000);
    startCountdown = true;
    start.textContent = "Pause"

  // Pause time  
  } else {
    clearInterval(myInterval);
    startCountdown = false;
    start.textContent = "Start"
  }
});

