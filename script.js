// Timer variables
let timer;
let timerRunning = false;
let timerCount = 0;

// Stopwatch variables
let stopwatch;
let stopwatchRunning = false;
let stopwatchCount = 0;

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  timerRunning = false;
  timerCount = 0;
  document.getElementById('timerDisplay').textContent = formatTime(timerCount);
}

function updateTimer() {
  timerCount++;
  document.getElementById('timerDisplay').textContent = formatTime(timerCount);
}

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchRunning = true;
    stopwatch = setInterval(updateStopwatch, 10);
  }
}

function stopStopwatch() {
  clearInterval(stopwatch);
  stopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatch);
  stopwatchRunning = false;
  stopwatchCount = 0;
  document.getElementById('stopwatchDisplay').textContent = formatTime(stopwatchCount);
}

function updateStopwatch() {
  stopwatchCount++;
  document.getElementById('stopwatchDisplay').textContent = formatTime(stopwatchCount);
}

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value < 10 ? '0' + value : value;
}
