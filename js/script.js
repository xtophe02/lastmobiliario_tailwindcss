const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

document.getElementById("slider").addEventListener("input", function (e) {
  const sliderPos = e.target.value;

  // Update the width of the foreground image
  document.querySelector(".foreground-img").style.width = `${sliderPos}%`;

  // Update the position of the slider button
  document.querySelector(
    ".slider-button"
  ).style.left = `calc(${sliderPos}% - 18px)`;
});
document.getElementById("year").innerHTML = new Date().getFullYear();
