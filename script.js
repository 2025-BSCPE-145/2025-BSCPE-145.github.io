/* ============================
   SECTION SWITCHING SYSTEM
============================ */
function showSection(id, el) {
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

  // Reset nav buttons
  document.querySelectorAll("nav button").forEach(btn => {
    btn.classList.remove("active");
    btn.setAttribute("aria-selected", "false");
  });

  // Activate clicked button
  if (el) {
    el.classList.add("active");
    el.setAttribute("aria-selected", "true");
  }
}


/* ============================
   ARTICLE TOGGLE SYSTEM (IMPROVED)
============================ */
function toggleArticle(button) {
  const article = button.closest(".article-card");

  if (!article) return;

  const content = article.querySelector(".full-content");
  if (!content) return;

  const isOpen = article.classList.contains("open");

  if (isOpen) {
    article.classList.remove("open");
    button.innerText = "Read More";
  } else {
    article.classList.add("open");
    button.innerText = "Show Less";
  }
}
