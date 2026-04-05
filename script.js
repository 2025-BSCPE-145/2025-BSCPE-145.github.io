function show(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

/* 🧠 DATA ENGINE (React-style structure) */
const data = {
  p1: `
    <h2>🚀 Portfolio System</h2>
    <p>Fully structured frontend engineering system with modular architecture.</p>

    <h3>Features</h3>
    <ul>
      <li>Component-like structure</li>
      <li>Modal-based rendering</li>
      <li>Scalable UI system</li>
    </ul>
  `,

  a1: `
    <h2>📘 Programming Fundamentals</h2>
    <p>Core concepts of programming including logic building and problem solving.</p>

    <ul>
      <li>Variables</li>
      <li>Loops</li>
      <li>Functions</li>
    </ul>
  `,

  a2: `
    <h2>🗄️ Database Systems</h2>
    <p>DBMS is the backbone of all modern applications.</p>

    <ul>
      <li>Tables</li>
      <li>SQL</li>
      <li>Normalization</li>
    </ul>
  `
};

/* MODAL */
function openModal(key) {
  document.getElementById("modal-body").innerHTML = data[key];
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* click outside modal */
window.onclick = function(e){
  const modal = document.getElementById("modal");
  if(e.target === modal){
    modal.style.display = "none";
  }
};
