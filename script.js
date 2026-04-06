// =========================
// SAFE THEME TOGGLE SYSTEM (FIXED)
// =========================

document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("themeToggle");

  // If button doesn't exist, stop script safely
  if (!toggleBtn) return;

  // Load saved theme safely
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
    toggleBtn.textContent = "🌞";
  } else {
    document.body.classList.remove("light");
    toggleBtn.textContent = "🌙";
  }

  // Toggle theme
  toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    if (isLight) {
      toggleBtn.textContent = "🌞";
      localStorage.setItem("theme", "light");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }

  });

});
