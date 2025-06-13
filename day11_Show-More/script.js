const toggleBtn = document.getElementById("toggle-btn");
const moreText = document.getElementById("more-text");

toggleBtn.addEventListener("click", () => {
  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    toggleBtn.textContent = "Show Less";
  } else {
    moreText.classList.add("hidden");
    toggleBtn.textContent = "Show More";
  }
});
