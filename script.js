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

  // Show selected section
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
   ARTICLE TOGGLE SYSTEM (FIXED + CLEAN)
============================ */
function toggleArticle(button) {
  const article = button.closest(".article-card");

  if (!article) {
    console.warn("Article card not found.");
    return;
  }

  const content = article.querySelector(".full-content");

  if (!content) {
    console.warn("Full content not found.");
    return;
  }

  // Toggle state
  article.classList.toggle("open");

  const isOpen = article.classList.contains("open");

  // Update button text
  button.innerText = isOpen ? "Show Less" : "Read More";
}
