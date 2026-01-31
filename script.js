// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }

    // 🔥 CHIUDE MENU MOBILE
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav-links");

// toggle hamburger
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});
