<script>
// ============================
// SECTION SWITCHING SYSTEM
// ============================
function showSection(id, el) {
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

  // Reset nav buttons
  document.querySelectorAll("nav button").forEach(button => {
    button.classList.remove("active");
    button.setAttribute("aria-selected", "false");
  });

  // Activate clicked button
  if (el) {
    el.classList.add("active");
    el.setAttribute("aria-selected", "true");
  }
}


// ============================
// ARTICLE TOGGLE SYSTEM
// ============================
function toggleArticle(button) {
  const content = button.previousElementSibling;

  if (!content) return;

  const isHidden = content.style.display === "none" || content.style.display === "";

  if (isHidden) {
    content.style.display = "block";
    button.innerText = "Show Less";
  } else {
    content.style.display = "none";
    button.innerText = "Read More";
  }
}
</script>
