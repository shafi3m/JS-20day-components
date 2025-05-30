const dropdownBtn = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const selectedOption = document.getElementById("selectedOption");

// Toggle dropdown menu
dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

// Handle option click
dropdownMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    selectedOption.textContent = e.target.textContent;
    dropdownMenu.classList.add("hidden");
  }
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.classList.add("hidden");
  }
});
