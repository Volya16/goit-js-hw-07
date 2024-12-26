const inputEl = document.querySelector("input[type='number']");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    
    const boxArr = [];
    const step = 10;
    const baseSize = 30;
    for (let i = 0; i < amount; i += 1) {
        boxArr.push(
          `<div style ="width: ${baseSize + step * i}px; height: ${
            baseSize + step * i
          }px; background-color: ${getRandomHexColor()}"></div>`
        );
    }
    return boxArr.join("");
};

createBtnEl.addEventListener("click", () => {
  if (inputEl.value >= 1 && inputEl.value <= 100) {
    boxesEl.innerHTML = createBoxes(inputEl.value);
    inputEl.value = "";
  }
});

destroyBtnEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});