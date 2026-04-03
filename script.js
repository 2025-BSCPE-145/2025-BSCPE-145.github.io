const toggle = document.getElementById("themeToggle");

toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scrollTop / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";
});
