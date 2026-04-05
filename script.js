function showSection(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  // ACTIVE BUTTON HIGHLIGHT
  document.querySelectorAll("nav button").forEach(btn => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
}
