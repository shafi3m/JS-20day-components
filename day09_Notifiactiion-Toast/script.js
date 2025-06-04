const button = document.getElementById("add-to-cart");
const toast = document.getElementById("toast");

button.addEventListener("click", () => {
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
});
