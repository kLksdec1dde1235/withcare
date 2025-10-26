$(function() {
// 첫 번째 카운트 다운
let totalTimeLeft1 = 900; // 초 단위로 15분입니다.
let millisecondsLeft1 = totalTimeLeft1 * 1000; // 밀리초 단위로 변환합니다.
const countdownDisplay1 = document.getElementById('time1');

function countdown1() {
  const minutes = Math.floor(millisecondsLeft1 / (60 * 1000));
  const seconds = Math.floor((millisecondsLeft1 % (60 * 1000)) / 1000);
  const milliseconds = Math.floor((millisecondsLeft1 % 1000) / 10); // 밀리초 단위까지 계산합니다.

  countdownDisplay1.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  if (millisecondsLeft1 <= 0) {
    clearInterval(timerId1);
    document.getElementById('form').style.display = 'none'; // 폼을 숨깁니다.
  } else {
    millisecondsLeft1 -= 10; // 10밀리초마다 카운트다운합니다.
  }
}

const timerId1 = setInterval(countdown1, 10); // 10밀리초마다 countdown1 함수를 호출합니다.

// 두 번째 카운트 다운
let totalTimeLeft2 = 600; // 초 단위로 10분입니다.
let millisecondsLeft2 = totalTimeLeft2 * 1000; // 밀리초 단위로 변환합니다.
const countdownDisplay2 = document.getElementById('time2');

function countdown2() {
  const minutes = Math.floor(millisecondsLeft2 / (60 * 1000));
  const seconds = Math.floor((millisecondsLeft2 % (60 * 1000)) / 1000);
  const milliseconds = Math.floor((millisecondsLeft2 % 1000) / 10); // 밀리초 단위까지 계산합니다.

  countdownDisplay2.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds < 10 ? '0' : ''}${milliseconds}`;

  if (millisecondsLeft2 <= 0) {
    clearInterval(timerId2);
  } else {
    millisecondsLeft2 -= 10; // 10밀리초마다 카운트다운합니다.
  }
}

const timerId2 = setInterval(countdown2, 10); // 10밀리초마다 countdown2 함수를 호출합니다.

// 첫 번째 카운트 다운
let totalTimeLeft = 900; // 초 단위로 15분입니다.
let millisecondsLeft = totalTimeLeft1 * 1000; // 밀리초 단위로 변환합니다.
const countdownDisplay = document.getElementById('time');

function countdown() {
  const minutes = Math.floor(millisecondsLeft / (60 * 1000));
  const seconds = Math.floor((millisecondsLeft % (60 * 1000)) / 1000);
  const milliseconds = Math.floor((millisecondsLeft % 1000) / 10); // 밀리초 단위까지 계산합니다.

  countdownDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  if (millisecondsLeft <= 0) {
    clearInterval(timerId);
    document.getElementById('form').style.display = 'none'; // 폼을 숨깁니다.
  } else {
    millisecondsLeft -= 10; // 10밀리초마다 카운트다운합니다.
  }
}

const timerId = setInterval(countdown, 10); // 10밀리초마다 countdown1 함수를 호출합니다.
})