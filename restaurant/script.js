/* ============================================================
   Shared site behavior — works across all template pages.
   Every selector is guarded, so this file is safe to reuse
   even on pages that don't have every feature.
============================================================ */

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.classList.remove("open");
    });
  });
}

// Navbar shadow + shrink on scroll
const header = document.querySelector("header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });
}

// Active nav link highlighting based on scroll position
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

if (sections.length && navAnchors.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navAnchors.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((s) => sectionObserver.observe(s));
}

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length <= 1) return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Scroll reveal animation
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("[data-reveal]").forEach((el) => {
  revealObserver.observe(el);
});

// Back to top button
const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 500);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Testimonial rotator (if present)
const testimonials = document.querySelectorAll(".testimonial");
let testimonialIndex = 0;

if (testimonials.length > 1) {
  testimonials.forEach((t, i) => t.classList.toggle("active", i === 0));

  setInterval(() => {
    testimonials[testimonialIndex].classList.remove("active");
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].classList.add("active");
  }, 5000);
}

// Contact / booking form (demo — prevents real submission, shows confirmation)
const demoForm = document.querySelector(".demo-form");

if (demoForm) {
  demoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = demoForm.querySelector("button[type='submit']");
    const original = btn.textContent;
    btn.textContent = "Sent ✓";
    btn.disabled = true;
    demoForm.reset();
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 2500);
  });
}

// Gallery lightbox-lite (click to focus/enlarge)
document.querySelectorAll("[data-lightbox] img").forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoomed");
  });
});

/* ============================================================
   FUTURISTIC FX LAYER
   Reads config from data-attributes on <body>:
   data-fx        = "particles" | "grid" | "off"   (default: particles)
   data-fx-color  = "124,92,255"  (rgb triplet, matches --glow)
   data-fx-color2 = "0,229,255"   (rgb triplet, matches --glow-2)
============================================================ */
(function () {
  const body = document.body;
  const fxMode = body.dataset.fx || "particles";
  const c1 = (body.dataset.fxColor || "124,92,255").split(",").map(Number);
  const c2 = (body.dataset.fxColor2 || "0,229,255").split(",").map(Number);

  // Scroll progress bar
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.appendChild(progress);
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = scrolled + "%";
  });

  // Cursor glow (desktop only)
  if (window.matchMedia("(hover:hover)").matches) {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);
    window.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    });
  }

  // Canvas particle / grid field — scoped to the hero itself so it renders
  // immediately behind the headline (not fixed to the whole page, which
  // previously left it hidden behind the hero's own opaque background
  // until you scrolled past it).
  if (fxMode !== "off") {
    const heroEl = document.querySelector(".hero") || document.body;
    heroEl.classList.add("has-fx-canvas");
    const canvas = document.createElement("canvas");
    canvas.className = "fx-canvas";
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

    if (fxMode === "particles") {
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
    }

    if (fxMode === "scan") {
      let t = 0;
      function step() {
        ctx.clearRect(0, 0, w, h);
        const lineY = (t % (h + 200)) - 100;
        const grad = ctx.createLinearGradient(0, lineY - 60, 0, lineY + 60);
        grad.addColorStop(0, rgba(c1, 0));
        grad.addColorStop(0.5, rgba(c2, 0.12));
        grad.addColorStop(1, rgba(c1, 0));
        ctx.fillStyle = grad;
        ctx.fillRect(0, lineY - 60, w, 120);
        t += reduceMotion ? 0 : 1.4;
        requestAnimationFrame(step);
      }
      step();
    }
  }

  // Animated number counters [data-count="450"]
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          counterObserver.unobserve(el);
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || "";
          const duration = 1400;
          const start = performance.now();
          function tick(now) {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = target < 10 ? (target * eased).toFixed(1) : Math.floor(target * eased);
            el.textContent = val + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => counterObserver.observe(el));
  }
})();
