const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const colorBtnEl = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorBtnEl.addEventListener('click', (evt) => {
    const newColor = getRandomHexColor();

    bodyEl.style.backgroundColor = newColor;
    spanEl.textContent = newColor;
});