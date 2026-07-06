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
// STICKY HEADER
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){
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
// ACTIVE NAV LINK
// ==========================

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

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
// MENU CARD EFFECT
// ==========================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,#3a3a3a,#222)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#222";

    });

});

// ==========================
// GALLERY ZOOM
// ==========================

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.classList.toggle("zoom");

    });

});

// ==========================
// BUTTON RIPPLE
// ==========================

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

// ==========================
// FLOATING BUTTON PULSE
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

},3000);

// ==========================
// PARALLAX HERO
// ==========================

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    hero.style.backgroundPositionY=window.scrollY*0.4+"px";

});