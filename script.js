/* =========================
   DOM READY
========================= */
document.addEventListener("DOMContentLoaded", () => {

  handleLoader();
  handleTheme();
  handleScrollReveal();
  handleSmoothScroll();
  handleNavbarEffect();
  handleSidebar();

});


/* =========================
   LOADER
========================= */
function handleLoader() {
  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    if (loader) {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
      }, 500);
    }
  });
}


/* =========================
   DARK / LIGHT MODE
========================= */
function handleTheme() {
  const toggle = document.getElementById("themeToggle");

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }

  toggle?.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
}


/* =========================
   SCROLL REVEAL (SECTIONS + CARDS)
========================= */
function handleScrollReveal() {

  const revealElements = document.querySelectorAll(".section, .card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {

        // stagger effect for cards
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 100);

      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => observer.observe(el));
}


/* =========================
   SMOOTH SCROLL
========================= */
function handleSmoothScroll() {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */
function handleNavbarEffect() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
}


/* =========================
   SIDEBAR TOGGLE (MOBILE)
========================= */
function handleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const openBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");

  openBtn?.addEventListener("click", () => {
    sidebar?.classList.add("active");
  });

  closeBtn?.addEventListener("click", () => {
    sidebar?.classList.remove("active");
  });
}
