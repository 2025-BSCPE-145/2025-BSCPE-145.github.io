document.addEventListener("DOMContentLoaded", () => {
  initSectionSystem();
});

/* ============================
   SECTION SYSTEM (IMPROVED)
============================ */
function initSectionSystem() {
  const navButtons = document.querySelectorAll("[data-section]");
  const sections = document.querySelectorAll("main section");

  // Use event delegation for better performance (1 listener instead of many)
  document.querySelector("nav").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-section]");
    if (!btn) return;

    const targetId = btn.dataset.section;
    switchSection(targetId, btn, sections, navButtons);
  });
}
// ================= MENU =================
function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// ================= THEME (SAVE MODE) =================
function toggleTheme() {
  document.body.classList.toggle("light");

  // save preference
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

// load theme
window.onload = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    document.body.classList.add("light");
  }
  revealOnScroll();
};
// ================= SMOOTH PAGE LOAD =================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ================= ACTIVE LINK =================
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ================= SCROLL REVEAL =================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card, .section").forEach(el => {
  observer.observe(el);
});
// ================= SCROLL ANIMATION =================
function revealOnScroll() {
  const elements = document.querySelectorAll(".card, .section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// ================= ACTIVE NAV =================
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active-link"));
    link.classList.add("active-link");
  });
});

// ================= CONTACT FORM =================
function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    alert("Message sent successfully 🚀");
  } else {
    alert("Please fill all fields!");
  }
}
/* ============================
   SWITCH SECTION LOGIC
============================ */
function switchSection(id, activeBtn, sections, navButtons) {
  const target = document.getElementById(id);
  if (!target) return;

  // Hide all sections
  sections.forEach(sec => sec.classList.remove("active"));

  // Show target
  target.classList.add("active");

  // Update nav state
  navButtons.forEach(btn => btn.classList.remove("active"));
  activeBtn.classList.add("active");

  // Smooth UX scroll
  scrollToTopSmooth();
}
// ============================
// DARK MODE TOGGLE
// ============================
const toggleBtn = document.getElementById("darkToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // save preference
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

/* ============================
   SCROLL HANDLER (REUSABLE)
============================ */
function scrollToTopSmooth() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
