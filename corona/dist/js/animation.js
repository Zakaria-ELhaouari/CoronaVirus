const hamburger = document.querySelector(".humber");
const navLinks = document.querySelector(".nav-line");
const links = document.querySelectorAll(".nav-line li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
      links.forEach(link => {
    link.classList.toggle("fade");
  });
});

// const hamburger = document.querySelector(".humber");
// const navLinks = document.querySelector(".nav-line");
// const links = document.querySelectorAll(".nav-line li");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });