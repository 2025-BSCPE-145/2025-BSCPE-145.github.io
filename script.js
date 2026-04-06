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

    if (!loader) return;

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
    }, 400);
  });
}


/* =========================
   DARK / LIGHT MODE
========================= */
function handleTheme() {
  const toggle = document.getElementById("themeToggle");

  // apply saved theme on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }

  toggle?.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}


/* =========================
   SCROLL REVEAL
========================= */
function handleScrollReveal() {
  const elements = document.querySelectorAll(".section, .card, .project-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // prevents repeated triggering
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach((el) => observer.observe(el));
}


/* =========================
   SMOOTH SCROLL
========================= */
function handleSmoothScroll() {
  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}


/* =========================
   NAVBAR EFFECT
========================= */
function handleNavbarEffect() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 50;

    navbar.style.boxShadow = scrolled
      ? "0 4px 20px rgba(0,0,0,0.25)"
      : "none";

    navbar.style.backdropFilter = scrolled
      ? "blur(10px)"
      : "none";
  });
}


/* =========================
   SIDEBAR (MOBILE MENU)
========================= */
function handleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const openBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");

  if (!sidebar) return;

  openBtn?.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  closeBtn?.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });

  // optional: close when clicking outside
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && e.target !== openBtn) {
      sidebar.classList.remove("active");
    }
  });
}
