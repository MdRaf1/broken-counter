const countLabel = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count += 1;
  countLabel.textContent = count;
});