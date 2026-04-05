const items = document.querySelectorAll(".reveal");

// 🔥 Use Intersection Observer (better performance than scroll)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");

      // Optional: animate only once
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

// Apply observer to all elements
items.forEach(el => observer.observe(el));
