const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("rating-text");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-value"));

    stars.forEach((s, index) => {
      s.classList.toggle("selected", index < rating);
    });

    ratingText.textContent = `Your rating: ${rating}`;
  });
});
