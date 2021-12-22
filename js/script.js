
let hamburger = document.querySelector(".toggler");
let nav = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
  console.log("hello");
  nav.classList.toggle("active");
});
  