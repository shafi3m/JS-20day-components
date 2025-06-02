const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active from all buttons and contents
    tabButtons.forEach((button) => button.classList.remove("active"));
    tabContents.forEach((tab) => tab.classList.remove("active"));

    // Add active to clicked button and related content
    btn.classList.add("active");
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});
