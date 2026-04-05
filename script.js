function showSection(id, el) {
  // Get target section safely
  const targetSection = document.getElementById(id);
  if (!targetSection) {
    console.warn(`Section with id "${id}" not found.`);
    return;
  }

  // Hide all sections
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active");
  });

  // Show selected section
  targetSection.classList.add("active");

  // Remove active state from all nav buttons
  document.querySelectorAll("nav button").forEach(button => {
    button.classList.remove("active");
    button.setAttribute("aria-selected", "false");
  });

  // Activate clicked button
  if (el) {
    el.classList.add("active");
    el.setAttribute("aria-selected", "true");
    function toggleArticle(button) {
  const article = button.parentElement;
  const fullContent = article.querySelector(".full-content");

  if (!fullContent) return;

  if (fullContent.style.display === "block") {
    fullContent.style.display = "none";
    button.textContent = "Read More";
  } else {
    fullContent.style.display = "block";
    button.textContent = "Read Less";
  }
}
  }
}
