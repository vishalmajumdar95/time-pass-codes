const scissors = document.querySelector('.scissors');
const photoContainer = document.querySelector('.photo-container');
let isCutting = false;

scissors.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isCutting = true;
});

document.addEventListener('mouseup', () => {
  isCutting = false;
});

photoContainer.addEventListener('mousemove', (e) => {
  if (isCutting) {
    const containerRect = photoContainer.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const cutWidth = Math.max(0, mouseX);

    scissors.style.left = `${cutWidth}px`;
  }
});
