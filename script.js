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
