// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  let theme = savedTheme || 
              (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  htmlElement.setAttribute('data-theme', theme);
  updateToggleIcon(theme);
}

function updateToggleIcon(theme) {
  if (!themeToggle) return;
  themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
}

// Theme toggle click handler
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
  });
}

// ==================== HAMBURGER MENU ====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking any nav link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ==================== SCROLL PROGRESS BAR (Only on Post Pages) ====================
function initProgressBar() {
  // Only show progress bar on pages inside /posts/ folder
  if (!window.location.pathname.includes('/posts/')) return;

  const progressBar = document.createElement('div');
  progressBar.style.position = 'fixed';
  progressBar.style.top = '0';
  progressBar.style.left = '0';
  progressBar.style.height = '4px';
  progressBar.style.width = '0%';
  progressBar.style.background = 'var(--accent)';
  progressBar.style.zIndex = '9999';
  progressBar.style.transition = 'width 0.1s ease-out';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  });
}

// ==================== INITIALIZE EVERYTHING ====================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initProgressBar();
});
