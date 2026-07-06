const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const hero = document.querySelector(".hero");

window.addEventListener("load", () => {
  hero.classList.add("loaded");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navLinks.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal, .reveal-image").forEach((element) => {
  revealObserver.observe(element);
});

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;

  dot.style.left = `${mouseX}px`;
  dot.style.top = `${mouseY}px`;
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.16;
  ringY += (mouseY - ringY) * 0.16;

  ring.style.left = `${ringX}px`;
  ring.style.top = `${ringY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

document.querySelectorAll("a, button, .gallery-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    ring.classList.add("hovering");
  });

  item.addEventListener("mouseleave", () => {
    ring.classList.remove("hovering");
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const heroImage = document.querySelector(".hero-image");

  if (scrollPosition < window.innerHeight) {
    heroImage.style.transform = `scale(1) translateY(${scrollPosition * 0.16}px)`;
  }
});