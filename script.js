function showSection(id, el) {
  // Hide all sections
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  // Show selected section
  document.getElementById(id).classList.add("active");

  // Remove active from all buttons
  document.querySelectorAll("nav button").forEach(btn => {
    btn.classList.remove("active");
  });

  // Add active to clicked button
  el.classList.add("active");
}
