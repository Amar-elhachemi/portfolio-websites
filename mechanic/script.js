// ==========================
// MOBILE MENU
// ==========================

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

// ==========================
// STICKY NAVBAR
// ==========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ==========================
// SECTION REVEAL
// ==========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ==========================
// SERVICE CARD SPOTLIGHT
// ==========================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,#383838,#242424)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#242424";

});

});

// ==========================
// HERO PARALLAX
// ==========================

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

hero.style.backgroundPositionY=window.scrollY*0.35+"px";

});

// ==========================
// GALLERY ZOOM
// ==========================

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});

// ==========================
// BUTTON HOVER
// ==========================

document.querySelectorAll(".btn,.contact-buttons a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

// ==========================
// EMERGENCY BUTTON PULSE
// ==========================

const floating=document.querySelector(".floating");

setInterval(()=>{

floating.animate([

{transform:"scale(1)"},

{transform:"scale(1.15)"},

{transform:"scale(1)"}

],{

duration:900

});

},1800);

// ==========================
// HERO INTRO
// ==========================

window.addEventListener("load",()=>{

document.querySelector(".hero-content").animate([

{

opacity:0,

transform:"translateY(50px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1000,

fill:"forwards"

});

});

// ==========================
// ENGINE SHAKE EFFECT
// ==========================

document.querySelectorAll(".card i").forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.animate([

{transform:"rotate(0deg)"},

{transform:"rotate(-12deg)"},

{transform:"rotate(12deg)"},

{transform:"rotate(0deg)"}

],{

duration:400

});

});

});

// ==========================
// RANDOM FLOATING GLOW
// ==========================

setInterval(()=>{

document.querySelectorAll(".card").forEach(card=>{

card.animate([

{

boxShadow:"0 0 0 rgba(255,59,48,0)"

},

{

boxShadow:"0 0 25px rgba(255,59,48,.25)"

},

{

boxShadow:"0 0 0 rgba(255,59,48,0)"

}

],{

duration:1800

});

});

},4500);