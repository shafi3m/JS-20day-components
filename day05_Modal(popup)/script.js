const subscribeBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-btn");
const modalOverlay = document.getElementById("modal-overlay");

subscribeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});
