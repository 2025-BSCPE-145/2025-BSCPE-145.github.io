// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    htmlElement.setAttribute('data-theme', 'light');
    updateToggleIcon('light');
  } else {
    // Default to dark
    htmlElement.setAttribute('data-theme', 'dark');
    updateToggleIcon('dark');
  }
}

function updateToggleIcon(theme) {
  if (theme === 'light') {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
}

// Toggle event
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleIcon(newTheme);
});
// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link (optional but nice)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', initTheme);
