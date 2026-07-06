// Sticky Navbar

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// Reveal Animation

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

// Smooth Scroll

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

// Hero Animation

window.addEventListener("load",()=>{

document.querySelector(".hero").animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

});

// Card Hover Glow

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 20px 50px rgba(79,140,255,.25)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});

// Floating Animation

document.querySelectorAll(".card").forEach((card,index)=>{

setInterval(()=>{

card.animate([

{transform:"translateY(0)"},

{transform:"translateY(-8px)"},

{transform:"translateY(0)"}

],{

duration:2500+index*250

});

},3500);

});