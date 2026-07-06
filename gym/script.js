// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ==========================
// STICKY NAVBAR
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

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

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

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
// COUNTERS
// ==========================

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const increment=target/120;

const update=()=>{

count+=increment;

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
// HERO PARALLAX
// ==========================

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

hero.style.backgroundPositionY=window.scrollY*0.35+"px";

});

// ==========================
// CARD HOVER GLOW
// ==========================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 35px rgba(0,255,136,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});

// ==========================
// BUTTON EFFECT
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
// FLOATING DUMBBELL
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
transform:"translateY(60px)"
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

// ==========================
// PREMIUM CARD GLOW
// ==========================

const premium=document.querySelector(".premium");

if(premium){

setInterval(()=>{

premium.animate([

{
boxShadow:"0 0 0 rgba(0,255,136,0)"
},

{
boxShadow:"0 0 40px rgba(0,255,136,.5)"
},

{
boxShadow:"0 0 0 rgba(0,255,136,0)"
}

],{

duration:2200

});

},2800);

}

// ==========================
// TRAINER IMAGE EFFECT
// ==========================

document.querySelectorAll(".trainers img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.filter="brightness(1.15)";

});

img.addEventListener("mouseleave",()=>{

img.style.filter="brightness(1)";

});

});

// ==========================
// RANDOM CARD FLOAT
// ==========================

document.querySelectorAll(".card").forEach((card,index)=>{

setInterval(()=>{

card.animate([

{
transform:"translateY(0)"
},

{
transform:"translateY(-8px)"
},

{
transform:"translateY(0)"
}

],{

duration:2500+(index*250)

});

},3500);

});