const mainDiv = document.getElementById('main-wrap');
const HotContain = document.querySelector('.hot-contain');
const HotTimerDiv = document.getElementById('hotId');
const ColdTimerDiv = document.getElementById('coldId');
const ColdContain = document.querySelector('.cold-contain');
const startButton = document.querySelector('.start-button');
let countdown;


startButton.addEventListener('click', () =>{
  timer(10);
});

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  setInterval(() =>{
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0){
      clearInterval(countdown);
      HotContain.style.display = 'none';
      ColdContain.style.display = 'flex';
      displayTimeLeft(100);
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}


function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `
    <p class="timer-p">${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}</p>
  `;
  HotTimerDiv.innerHTML = display;

}
