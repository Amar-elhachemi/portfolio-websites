// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

// ==========================
// GLASS NAVBAR
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
// SCROLL REVEAL
// ==========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

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
// SERVICE CARD FLOAT
// ==========================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ==========================
// GALLERY CLICK ZOOM
// ==========================

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

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
// BUTTON ANIMATION
// ==========================

document.querySelectorAll(".btn,.contact-buttons a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});

// ==========================
// WHATSAPP PULSE
// ==========================

const floating=document.querySelector(".floating");

setInterval(()=>{

floating.animate([

{transform:"scale(1)"},
{transform:"scale(1.12)"},
{transform:"scale(1)"}

],{

duration:1200

});

},2500);

// ==========================
// FLOATING EFFECT
// ==========================

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

setInterval(()=>{

card.animate([

{transform:"translateY(0px)"},
{transform:"translateY(-8px)"},
{transform:"translateY(0px)"}

],{

duration:2500+index*300

});

},3000);

});

// ==========================
// HERO FADE
// ==========================

window.addEventListener("load",()=>{

const heroContent=document.querySelector(".hero-content");

heroContent.animate([

{opacity:0,transform:"translateY(40px)"},

{opacity:1,transform:"translateY(0px)"}

],{

duration:1200,

fill:"forwards"

});

});