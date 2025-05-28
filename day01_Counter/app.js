document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease");
  const resetBtn = document.getElementById("reset");

  let count = 0;

  function updateDisplay() {
    display.textContent = count;
  }

  increaseBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
  });

  decreaseBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
  });
});
