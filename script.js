document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});
