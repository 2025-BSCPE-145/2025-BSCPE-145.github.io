/* =========================
   PAGE NAVIGATION SYSTEM
========================= */
function show(id, event) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
  if (event) event.target.classList.add('active');
}

/* =========================
   MODAL DATA SYSTEM
========================= */
const data = {

/* 💼 PROJECTS (EXPANDED) */

/* 📰 ARTICLES (EXPANDED + PROFESSIONAL) */
a1: `
  <h2>📘 Programming Fundamentals (Deep Guide)</h2>
  <p>
    Programming is the foundation of all software systems. It focuses on logic building,
    problem-solving, and structured thinking.
  </p>
  <ul>
    <li>Variables, data types, and memory concept</li>
    <li>Control structures (if, else, loops)</li>
    <li>Functions and modular programming</li>
    <li>Algorithmic thinking approach</li>
  </ul>
`,

a2: `
  <h2>🗄️ Database Systems (DBMS Guide)</h2>
  <p>
    DBMS is used to store, organize, and manage large-scale data efficiently.
  </p>
  <ul>
    <li>Relational database structure</li>
    <li>SQL queries (SELECT, INSERT, UPDATE, DELETE)</li>
    <li>Normalization (1NF, 2NF, 3NF)</li>
    <li>Data integrity & indexing concepts</li>
  </ul>
`,



/* 🌍 NEW ARTICLE (GITHUB PAGES FULL GUIDE) */
a4: `
  <h2>🚀 How to Make a Website on GitHub Pages</h2>
  <p>
    GitHub Pages allows you to host websites for free using GitHub repositories.
  </p>

  <h3>🧩 Step 1: Create GitHub Account</h3>
  <ul>
    <li>Go to https://github.com</li>
    <li>Sign up and verify your email</li>
  </ul>

  <h3>📁 Step 2: Create Repository</h3>
  <ul>
    <li>Click “New Repository”</li>
    <li>Name: yourusername.github.io</li>
    <li>Set Public</li>
  </ul>

  <h3>💻 Step 3: Add Files</h3>
  <ul>
    <li>index.html (main website)</li>
    <li>style.css (design)</li>
  </ul>

  <h3>⬆️ Step 4: Upload Files</h3>
  <ul>
    <li>Click Add File → Upload Files</li>
    <li>Commit changes</li>
  </ul>

  <h3>🌍 Step 5: Enable Pages</h3>
  <ul>
    <li>Go to Settings → Pages</li>
    <li>Select branch: main</li>
    <li>Folder: /root</li>
  </ul>

  <h3>🎉 Step 6: Live Website</h3>
  <p>
    Your site will be live at:<br>
    <b>https://yourusername.github.io</b>
  </p>
`
};

/* =========================
   MODAL FUNCTIONS
========================= */
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
