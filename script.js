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
// ===========================
// LANGUAGE SWITCHER (added)
// ===========================

const translations = {
en: {
"nav.templates":"Templates",
"nav.about":"About",
"nav.contact":"Contact",
"nav.hire":"Hire Me",
"hero.title":"Modern Websites That Help Businesses Grow",
"hero.subtitle":"Professional responsive websites for restaurants, cafés, gyms, beauty salons, mechanics and more.",
"hero.btn":"View Templates",
"templates.title":"Website Templates",
"templates.subtitle":"Click any template to open the live demo.",
"templates.demo":"View Demo",
"templates.coffee.title":"Coffee Shop",
"templates.coffee.desc":"Warm modern café website.",
"templates.restaurant.title":"Restaurant",
"templates.restaurant.desc":"Luxury restaurant landing page.",
"templates.beauty.title":"Beauty Salon",
"templates.beauty.desc":"Elegant beauty & spa website.",
"templates.mechanic.title":"Mechanic",
"templates.mechanic.desc":"Professional auto garage website.",
"templates.gym.title":"Gym & Fitness",
"templates.gym.desc":"Powerful fitness landing page.",
"about.title":"Why Choose Me?",
"about.responsive.title":"Responsive",
"about.responsive.desc":"Looks perfect on phones, tablets and desktops.",
"about.fast.title":"Fast",
"about.fast.desc":"Optimized for speed and user experience.",
"about.custom.title":"Custom Design",
"about.custom.desc":"Every website can be personalized for your business.",
"contact.title":"Need a Website?",
"contact.subtitle":"Let's build a modern website for your business.",
"contact.whatsapp":"WhatsApp",
"contact.email":"Email",
"footer.text":"© 2026 Amar Web Studio. All Rights Reserved."
},
fr: {
"nav.templates":"Modèles",
"nav.about":"À propos",
"nav.contact":"Contact",
"nav.hire":"Engagez-moi",
"hero.title":"Des sites web modernes qui font grandir votre entreprise",
"hero.subtitle":"Sites web professionnels et responsives pour restaurants, cafés, salles de sport, salons de beauté, garages et plus encore.",
"hero.btn":"Voir les modèles",
"templates.title":"Modèles de sites web",
"templates.subtitle":"Cliquez sur un modèle pour voir la démo en direct.",
"templates.demo":"Voir la démo",
"templates.coffee.title":"Café",
"templates.coffee.desc":"Site web chaleureux et moderne pour café.",
"templates.restaurant.title":"Restaurant",
"templates.restaurant.desc":"Page d'accueil de restaurant haut de gamme.",
"templates.beauty.title":"Salon de beauté",
"templates.beauty.desc":"Site élégant pour salon de beauté et spa.",
"templates.mechanic.title":"Mécanicien",
"templates.mechanic.desc":"Site web professionnel pour garage automobile.",
"templates.gym.title":"Salle de sport",
"templates.gym.desc":"Page d'accueil percutante pour salle de sport.",
"about.title":"Pourquoi me choisir ?",
"about.responsive.title":"Responsive",
"about.responsive.desc":"Parfait sur mobiles, tablettes et ordinateurs.",
"about.fast.title":"Rapide",
"about.fast.desc":"Optimisé pour la vitesse et l'expérience utilisateur.",
"about.custom.title":"Design personnalisé",
"about.custom.desc":"Chaque site peut être personnalisé pour votre entreprise.",
"contact.title":"Besoin d'un site web ?",
"contact.subtitle":"Construisons un site web moderne pour votre entreprise.",
"contact.whatsapp":"WhatsApp",
"contact.email":"E-mail",
"footer.text":"© 2026 Amar Web Studio. Tous droits réservés."
},
ar: {
"nav.templates":"القوالب",
"nav.about":"من أنا",
"nav.contact":"تواصل",
"nav.hire":"وظفني",
"hero.title":"مواقع إلكترونية عصرية تساعد أعمالك على النمو",
"hero.subtitle":"مواقع احترافية ومتجاوبة للمطاعم والمقاهي والصالات الرياضية وصالونات التجميل والورش وغيرها.",
"hero.btn":"عرض القوالب",
"templates.title":"قوالب المواقع",
"templates.subtitle":"اضغط على أي قالب لمشاهدة العرض المباشر.",
"templates.demo":"عرض التجربة",
"templates.coffee.title":"مقهى",
"templates.coffee.desc":"موقع عصري ودافئ للمقاهي.",
"templates.restaurant.title":"مطعم",
"templates.restaurant.desc":"صفحة فاخرة لموقع مطعم.",
"templates.beauty.title":"صالون تجميل",
"templates.beauty.desc":"موقع أنيق لصالونات التجميل والسبا.",
"templates.mechanic.title":"ميكانيكي",
"templates.mechanic.desc":"موقع احترافي لورش السيارات.",
"templates.gym.title":"نادي رياضي",
"templates.gym.desc":"صفحة قوية لصالات اللياقة البدنية.",
"about.title":"لماذا تختارني؟",
"about.responsive.title":"متجاوب",
"about.responsive.desc":"يظهر بشكل مثالي على الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر.",
"about.fast.title":"سريع",
"about.fast.desc":"محسّن من أجل السرعة وتجربة المستخدم.",
"about.custom.title":"تصميم مخصص",
"about.custom.desc":"يمكن تخصيص كل موقع حسب طبيعة عملك.",
"contact.title":"تحتاج إلى موقع إلكتروني؟",
"contact.subtitle":"لنبنِ معًا موقعًا عصريًا لعملك.",
"contact.whatsapp":"واتساب",
"contact.email":"البريد الإلكتروني",
"footer.text":"© 2026 Amar Web Studio. جميع الحقوق محفوظة."
}
};

function applyLanguage(lang){

document.querySelectorAll("[data-i18n]").forEach(el=>{

const key=el.getAttribute("data-i18n");

if(translations[lang] && translations[lang][key]){

el.textContent=translations[lang][key];

}

});

document.documentElement.setAttribute("lang",lang);

document.documentElement.setAttribute("dir", lang==="ar" ? "rtl" : "ltr");

document.querySelectorAll(".lang-option").forEach(opt=>{

opt.classList.toggle("active", opt.getAttribute("data-lang")===lang);

});

const codeEl=document.getElementById("langGlobeCode");

if(codeEl){

codeEl.textContent=lang.toUpperCase();

}

try{

localStorage.setItem("preferredLang", lang);

}catch(e){}

}

const langGlobeBtn=document.getElementById("langGlobeBtn");

const langDropdown=document.getElementById("langDropdown");

if(langGlobeBtn && langDropdown){

langGlobeBtn.addEventListener("click",(e)=>{

e.stopPropagation();

langDropdown.classList.toggle("open");

});

document.querySelectorAll(".lang-option").forEach(opt=>{

opt.addEventListener("click",()=>{

applyLanguage(opt.getAttribute("data-lang"));

langDropdown.classList.remove("open");

});

});

document.addEventListener("click",(e)=>{

if(!langDropdown.contains(e.target) && e.target!==langGlobeBtn){

langDropdown.classList.remove("open");

}

});

}

(function initLanguage(){

let saved="en";

try{

saved=localStorage.getItem("preferredLang")||"en";

}catch(e){}

applyLanguage(saved);

})();
