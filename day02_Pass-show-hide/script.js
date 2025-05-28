const passField = document.getElementById("password");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  const type = passField.getAttribute("type");
  if (type === "password") {
    passField.setAttribute("type", "text");
    toggleBtn.textContent = "hide";
  } else {
    passField.setAttribute("type", "password");
    toggleBtn.textContent = "show";
  }
});
