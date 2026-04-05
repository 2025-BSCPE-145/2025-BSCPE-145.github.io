function show(id){
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));

  const target = document.getElementById(id);
  if (!target) {
    console.warn("Section not found:", id);
    return;
  }

  target.classList.add('active');
}

/* DATA SYSTEM */
const data = {
  p1: `
    <h2>🚀 Portfolio Website — Engineering Case Study</h2>
    <p>Professional engineering portfolio built using HTML, CSS, and JavaScript.</p>
  `,
  a1: `
    <h2>📘 Programming Fundamentals</h2>
    <p>Core logic and problem solving foundations.</p>
  `,
  a2: `
    <h2>🗄️ DBMS Basics</h2>
    <p>Structured data management systems.</p>
  `
};

function openModal(key){
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  if (!modal || !body || !data[key]) {
    console.warn("Modal or data missing:", key);
    return;
  }

  body.innerHTML = data[key];
  modal.style.display = "flex";
}

function closeModal(){
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}
