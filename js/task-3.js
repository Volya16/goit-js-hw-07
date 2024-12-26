const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

// First varsion
// inputNameEl.addEventListener('input', () => {
//   if (inputNameEl.value.trim() === "") {
//     outputNameEl.textContent = "Anonymous";
//   } else {
//     outputNameEl.textContent = inputNameEl.value.trim();
//   }
// })


// Second varsion
inputNameEl.addEventListener('input', () => {
  outputNameEl.textContent =
    inputNameEl.value.trim() === "" ? "Anonymus" : inputNameEl.value.trim();
})