/* ============================
   DOM READY
============================ */
document.addEventListener("DOMContentLoaded", () => {

  initSectionSystem();
  initReadMoreSystem();

});


/* ============================
   SECTION SWITCHING SYSTEM
============================ */
function initSectionSystem() {
  const navButtons = document.querySelectorAll("[data-section]");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-section");
      showSection(targetId, btn);
    });
  });
}


function showSection(id, clickedBtn) {
  const targetSection = document.getElementById(id);

  if (!targetSection) {
    console.warn(`Section "${id}" not found.`);
    return;
  }

  // Hide all sections
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  // Show target section
  targetSection.classList.add("active");

  // Update active nav button
  document.querySelectorAll("[data-section]").forEach(btn => {
    btn.classList.remove("active");
  });

  if (clickedBtn) {
    clickedBtn.classList.add("active");
  }

  // Smooth scroll to top of section
  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* ============================
   READ MORE / READ LESS SYSTEM
============================ */
function initReadMoreSystem() {
  const articles = document.querySelectorAll(".article");

  articles.forEach(article => {

    const content = article.querySelector(".full-content");

    if (!content) return;

    // Create toggle button dynamically
    const btn = document.createElement("button");
    btn.className = "read-more-btn";
    btn.textContent = "Read Less";

    content.after(btn);

    let expanded = true;

    btn.addEventListener("click", () => {
      expanded = !expanded;

      if (expanded) {
        content.style.maxHeight = "none";
        btn.textContent = "Read Less";
      } else {
        content.style.maxHeight = "200px";
        content.style.overflow = "hidden";
        btn.textContent = "Read More";
      }
    });

  });
}
