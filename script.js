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

document.querySelectorAll("section:not(.hero)").forEach(section=>{

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
"hero.eyebrow":"11 Futuristic Templates",
"hero.title":"Modern Websites That Help Businesses Grow",
"hero.subtitle":"Professional responsive websites for restaurants, cafés, gyms, beauty salons, mechanics, clinics, hotels and more.",
"hero.btn":"View Templates",
"templates.title":"Website Templates",
"templates.subtitle":"Click any template to open the live demo.",
"templates.demo":"View Demo",
"templates.new":"New",
"templates.coffee.title":"Coffee Shop",
"templates.coffee.desc":"Warm modern roastery website.",
"templates.restaurant.title":"Restaurant",
"templates.restaurant.desc":"Fine-dining landing page.",
"templates.beauty.title":"Beauty Salon",
"templates.beauty.desc":"Elegant beauty & spa website.",
"templates.mechanic.title":"Mechanic",
"templates.mechanic.desc":"Professional auto garage website.",
"templates.gym.title":"Gym & Fitness",
"templates.gym.desc":"Bold, high-energy landing page.",
"templates.bakery.title":"Bakery",
"templates.bakery.desc":"Warm, pastel bakery website.",
"templates.photographer.title":"Photographer",
"templates.photographer.desc":"Editorial portfolio website.",
"templates.realestate.title":"Real Estate",
"templates.realestate.desc":"Listings & agency website.",
"templates.barbershop.title":"Barbershop",
"templates.barbershop.desc":"Bold, classic barbershop website.",
"templates.dental.title":"Dental Clinic",
"templates.dental.desc":"Clean, trustworthy clinic website.",
"templates.hotel.title":"Hotel & Guesthouse",
"templates.hotel.desc":"Boutique hospitality website.",
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
"hero.eyebrow":"11 modèles futuristes",
"hero.title":"Des sites web modernes qui font grandir votre entreprise",
"hero.subtitle":"Sites web professionnels et responsives pour restaurants, cafés, salles de sport, salons de beauté, garages, cliniques, hôtels et plus encore.",
"hero.btn":"Voir les modèles",
"templates.title":"Modèles de sites web",
"templates.subtitle":"Cliquez sur un modèle pour voir la démo en direct.",
"templates.demo":"Voir la démo",
"templates.new":"Nouveau",
"templates.coffee.title":"Café",
"templates.coffee.desc":"Site web chaleureux et moderne pour torréfacteur.",
"templates.restaurant.title":"Restaurant",
"templates.restaurant.desc":"Page d'accueil de restaurant gastronomique.",
"templates.beauty.title":"Salon de beauté",
"templates.beauty.desc":"Site élégant pour salon de beauté et spa.",
"templates.mechanic.title":"Mécanicien",
"templates.mechanic.desc":"Site web professionnel pour garage automobile.",
"templates.gym.title":"Salle de sport",
"templates.gym.desc":"Page d'accueil audacieuse et énergique.",
"templates.bakery.title":"Boulangerie",
"templates.bakery.desc":"Site chaleureux aux tons pastel pour boulangerie.",
"templates.photographer.title":"Photographe",
"templates.photographer.desc":"Portfolio éditorial en ligne.",
"templates.realestate.title":"Immobilier",
"templates.realestate.desc":"Site d'annonces et d'agence immobilière.",
"templates.barbershop.title":"Barbier",
"templates.barbershop.desc":"Site audacieux pour salon de barbier classique.",
"templates.dental.title":"Clinique dentaire",
"templates.dental.desc":"Site propre et rassurant pour clinique.",
"templates.hotel.title":"Hôtel & Maison d'hôtes",
"templates.hotel.desc":"Site pour hébergement de charme.",
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
"hero.eyebrow":"11 قالبًا مستقبليًا",
"hero.title":"مواقع إلكترونية عصرية تساعد أعمالك على النمو",
"hero.subtitle":"مواقع احترافية ومتجاوبة للمطاعم والمقاهي والصالات الرياضية وصالونات التجميل والورش والعيادات والفنادق وغيرها.",
"hero.btn":"عرض القوالب",
"templates.title":"قوالب المواقع",
"templates.subtitle":"اضغط على أي قالب لمشاهدة العرض المباشر.",
"templates.demo":"عرض التجربة",
"templates.new":"جديد",
"templates.coffee.title":"مقهى",
"templates.coffee.desc":"موقع عصري ودافئ لمحمصة قهوة.",
"templates.restaurant.title":"مطعم",
"templates.restaurant.desc":"صفحة فاخرة لمطعم راقٍ.",
"templates.beauty.title":"صالون تجميل",
"templates.beauty.desc":"موقع أنيق لصالونات التجميل والسبا.",
"templates.mechanic.title":"ميكانيكي",
"templates.mechanic.desc":"موقع احترافي لورش السيارات.",
"templates.gym.title":"نادي رياضي",
"templates.gym.desc":"صفحة جريئة وحيوية لصالة رياضية.",
"templates.bakery.title":"مخبزة",
"templates.bakery.desc":"موقع دافئ بألوان هادئة لمخبزة.",
"templates.photographer.title":"مصور فوتوغرافي",
"templates.photographer.desc":"معرض أعمال احترافي.",
"templates.realestate.title":"عقارات",
"templates.realestate.desc":"موقع لعرض العقارات ووكالة عقارية.",
"templates.barbershop.title":"صالون حلاقة",
"templates.barbershop.desc":"موقع جريء لصالون حلاقة كلاسيكي.",
"templates.dental.title":"عيادة أسنان",
"templates.dental.desc":"موقع نظيف وموثوق لعيادة أسنان.",
"templates.hotel.title":"فندق ودار ضيافة",
"templates.hotel.desc":"موقع لإقامة فندقية راقية.",
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

/* ============================================================
   FUTURISTIC FX LAYER — canvas particles, cursor glow, scroll bar
============================================================ */
(function () {
  const body = document.body;
  const c1 = (body.dataset.fxColor || "124,92,255").split(",").map(Number);
  const c2 = (body.dataset.fxColor2 || "0,229,255").split(",").map(Number);

  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.appendChild(progress);
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = scrolled + "%";
  });

  if (window.matchMedia("(hover:hover)").matches) {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);
    window.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    });
  }

  const canvas = document.createElement("canvas");
  canvas.className = "fx-canvas";
  const heroEl = document.querySelector(".hero") || body;
  heroEl.prepend(canvas);
  const ctx = canvas.getContext("2d");
  let w, h, particles;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    const rect = heroEl.getBoundingClientRect();
    w = canvas.width = rect.width;
    h = canvas.height = rect.height || window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function rgba(arr, a) {
    return `rgba(${arr[0]},${arr[1]},${arr[2]},${a})`;
  }

  const count = Math.min(90, Math.floor((w * h) / 18000));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.8 + 0.6,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    c: Math.random() > 0.5 ? c1 : c2,
  }));

  function step() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = rgba(p.c, 0.7);
      ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = rgba(c1, 0.08 * (1 - d / 130));
          ctx.stroke();
        }
      }
    }
    if (!reduceMotion) requestAnimationFrame(step);
  }
  step();
})();
