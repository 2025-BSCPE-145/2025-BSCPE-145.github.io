document.addEventListener("DOMContentLoaded", () => {
  initSectionSystem();
});

/* ============================
   SECTION SYSTEM
============================ */
function initSectionSystem() {
  const navButtons = document.querySelectorAll("[data-section]");
  const sections = document.querySelectorAll("main section");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-section");
      showSection(targetId, btn, sections, navButtons);
    });
  });
}

function showSection(id, clickedBtn, sections, navButtons) {
  const target = document.getElementById(id);
  if (!target) return;

  sections.forEach(sec => sec.classList.remove("active"));
  target.classList.add("active");

  navButtons.forEach(btn => btn.classList.remove("active"));
  clickedBtn.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}
