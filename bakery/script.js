const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const cursor = document.querySelector(".cursor");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("load", () => {
hero.classList.add("loaded");
});

window.addEventListener("scroll", () => {
header.classList.toggle("scrolled", window.scrollY > 40);
});

window.addEventListener("mousemove", (event) => {
cursor.style.left = `${event.clientX}px`;
cursor.style.top = `${event.clientY}px`;
});

document.querySelectorAll("a, button, .pastry-card").forEach((item) => {
item.addEventListener("mouseenter", () => {
cursor.classList.add("big");
});

item.addEventListener("mouseleave", () => {
cursor.classList.remove("big");
});
});

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
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
{ threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => {
revealObserver.observe(element);
});
