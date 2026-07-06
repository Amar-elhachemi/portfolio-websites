const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const cursor = document.querySelector(".cursor");
const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

window.addEventListener("load", () => hero.classList.add("loaded"));

window.addEventListener("scroll", () => {
header.classList.toggle("scrolled", window.scrollY > 45);
});

window.addEventListener("mousemove", (event) => {
cursor.style.left = event.clientX + "px";
cursor.style.top = event.clientY + "px";
});

document.querySelectorAll("a, button, .property").forEach((item) => {
item.addEventListener("mouseenter", () => cursor.classList.add("big"));
item.addEventListener("mouseleave", () => cursor.classList.remove("big"));
});

menu.addEventListener("click", () => {
nav.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
link.addEventListener("click", () => nav.classList.remove("active"));
});

const reveal = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
reveal.unobserve(entry.target);
}
});
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((item) => {
item.style.opacity = "0";
item.style.transform = "translateY(35px)";
item.style.transition = "opacity .9s ease, transform .9s ease";
reveal.observe(item);
});

const counters = document.querySelectorAll(".counter");

const countObserver = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (!entry.isIntersecting) return;


const counter = entry.target;
const target = Number(counter.dataset.target);
let value = 0;
const step = Math.max(1, Math.ceil(target / 80));

const update = () => {
  value += step;
  counter.textContent = value >= target ? target : value;
  if (value < target) requestAnimationFrame(update);
};

update();
countObserver.unobserve(counter);


});
}, { threshold: 0.5 });

counters.forEach((counter) => countObserver.observe(counter));
