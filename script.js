document.addEventListener("DOMContentLoaded", () => {
  initSectionSystem();
  initReadMoreSystem();
});

/* ============================
   SECTION SWITCHING SYSTEM
============================ */
function initSectionSystem() {
  const navButtons = document.querySelectorAll("[data-section]");
  const sections = document.querySelectorAll("section");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-section");
      showSection(targetId, btn, sections, navButtons);
    });
  });
}

function showSection(id, clickedBtn, sections, navButtons) {
  const targetSection = document.getElementById(id);

  if (!targetSection) {
    console.warn(`Section "${id}" not found.`);
    return;
  }

  // Hide all sections
  sections.forEach(sec => {
    sec.classList.remove("active");
  });

  // Show selected section
  targetSection.classList.add("active");

  // Update active nav button
  navButtons.forEach(btn => {
    btn.classList.remove("active");
  });

  if (clickedBtn) {
    clickedBtn.classList.add("active");
  }

  // Smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* ============================
   READ MORE / READ LESS SYSTEM (FIXED + IMPROVED)
============================ */
function initReadMoreSystem() {
  const articles = document.querySelectorAll(".article");

  articles.forEach(article => {
    const content = article.querySelector(".full-content");

    if (!content) return;

    let expanded = true;

    // Set initial collapsed state
    content.style.maxHeight = "none";
    content.style.overflow = "visible";

    // Create button
    const btn = document.createElement("button");
    btn.className = "read-more-btn";
    btn.textContent = "Read Less";

    content.after(btn);

    btn.addEventListener("click", () => {
      expanded = !expanded;

      if (expanded) {
        content.style.maxHeight = "none";
        content.style.overflow = "visible";
        btn.textContent = "Read Less";
      } else {
        content.style.maxHeight = "200px";
        content.style.overflow = "hidden";
        btn.textContent = "Read More";
      }
    });
  });
}
